/* eslint-disable linebreak-style */
/* eslint-disable no-async-promise-executor */
const jwt = require('jsonwebtoken');
const status = require('../utils/status.utils');

exports.generateAccessToken = (req) =>
  new Promise(async (resolve, reject) => {
    try {
      jwt.sign(
        { username: req.username, id: req.id },
        process.env.JWT_SECRET,
        {
          algorithm: 'HS512'
          // expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRE,
        },
        (err, token) => {
          if (err) {
            resolve({ success: false, status: status.BadRequest, errors: [{ msg: err.message }] });
          }
          resolve({ sucess: true, status: status.Ok, token });
        }
      );
    } catch (error) {
      reject(error.message);
    }
  });
