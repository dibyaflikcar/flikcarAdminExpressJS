const jwt = require('jsonwebtoken');
require('dotenv').config();

const config = process.env;

module.exports = (req, res, next) => {
  const header = req.headers.authorization;
  if (!header) {
    return res.json({ status: 403, error: [{ msg: 'A token is required for authentication' }] });
  }
  try {
    const token = header.split(' ');

    jwt.verify(token[1], config.JWT_SECRET, function (err, user) {
      if (err) {
        return res.json({ status: 401, error: [{ msg: err.message }] });
      }
      req.body.auth = { id: user.id, username: user.username};
      next();
      return;
    });
  } catch (error) {
    return res.json({ success: false, status: 400, errors: [{ msg: error.message }] });
  }
};
