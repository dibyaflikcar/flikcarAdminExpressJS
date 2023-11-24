/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
const express = require('express');
const { validationResult } = require('express-validator');
const user = require('../../../controllers/auth.controller');
const status = require('../../../utils/status.utils');
const authjwt = require('../../../middleware/authjwt');
const multer = require("multer");


const router = express.Router();

router.get('/test', async (req, res, next) => {
    // return res.send("hello ok");
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.send({ errors: errors.array(), success: false, status: status.BadRequest });
    }
    const response = await user
      .test(req.body)
      .catch((e) => res.send({ success: false, errors: [{ msg: e.message }], status: status.InternalServerError }));
    return res.send(response);
});

router.get('/get-user',authjwt, async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.send({ errors: errors.array(), success: false, status: status.BadRequest });
    }
    const response = await user
      .getUser(req.body)
      .catch((e) => res.send({ success: false, errors: [{ msg: e.message }], status: status.InternalServerError }));
    return res.send(response);
});





module.exports = router;
