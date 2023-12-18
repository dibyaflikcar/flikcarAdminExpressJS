/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
const express = require('express');
const { validationResult } = require('express-validator');
const global = require('../../../controllers/global.controller');
const status = require('../../../utils/status.utils');
const authjwt = require('../../../middleware/authjwt');
const multer = require("multer");
const db=require('../../../config/db');

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const bucket = db.storage().bucket();

router.get('/city',authjwt, async (req, res, next) => {
    // return res.send("hello ok");
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.send({ errors: errors.array(), success: false, status: status.BadRequest });
    }
    const response = await global.city(req.body)
      .catch((e) => res.send({ success: false, errors: [{ msg: e.message }], status: status.InternalServerError }));
    return res.send(response);
});
router.get('/blog',authjwt, async (req, res, next) => {
  // return res.send("hello ok");
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.send({ errors: errors.array(), success: false, status: status.BadRequest });
  }
  const response = await global.blog(req)
    .catch((e) => res.send({ success: false, errors: [{ msg: e.message }], status: status.InternalServerError }));
  return res.send(response);
});
router.post('/addBlog',authjwt, async (req, res, next) => {
  // return res.send("hello ok");
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.send({ errors: errors.array(), success: false, status: status.BadRequest });
  }
  const response = await global.addBlog(req)
    .catch((e) => res.send({ success: false, errors: [{ msg: e.message }], status: status.InternalServerError }));
  return res.send(response);
});
router.post('/getBlogWithId',authjwt, async (req, res, next) => {
  // return res.send("hello ok");
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.send({ errors: errors.array(), success: false, status: status.BadRequest });
  }
  const response = await global.getBlogWithId(req)
    .catch((e) => res.send({ success: false, errors: [{ msg: e.message }], status: status.InternalServerError }));
  return res.send(response);
});
router.post('/updateBlog',authjwt, async (req, res, next) => {
  // return res.send("hello ok");
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.send({ errors: errors.array(), success: false, status: status.BadRequest });
  }
  const response = await global.updateBlog(req)
    .catch((e) => res.send({ success: false, errors: [{ msg: e.message }], status: status.InternalServerError }));
  return res.send(response);
});


router.post('/deleteBlog',authjwt, async (req, res, next) => {
  // return res.send("hello ok");
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.send({ errors: errors.array(), success: false, status: status.BadRequest });
  }
  const response = await global.deleteBlog(req)
    .catch((e) => res.send({ success: false, errors: [{ msg: e.message }], status: status.InternalServerError }));
  return res.send(response);
});










module.exports = router;
