/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
const express = require('express');
const { validationResult } = require('express-validator');
const vehicle = require('../../../controllers/vehicle.controller');
const status = require('../../../utils/status.utils');
const authjwt = require('../../../middleware/authjwt');
const multer = require("multer");


const router = express.Router();
const storage = multer.memoryStorage();
// const storage = multer.diskStorage({
  //         destination: function (req, file, cb) {
  //           return cb(null, '/uploads')
  //         },
  //         filename: function (req, file, cb) {
  //           const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
  //          return  cb(null, file.fieldname + '-' + uniqueSuffix)
  //         }
  //       })
const upload = multer({ storage: storage });


router.get('/makeAndModel',authjwt, async (req, res, next) => {
  // return res.send("hello ok");
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.send({ errors: errors.array(), success: false, status: status.BadRequest });
  }
  const response = await vehicle.makeAndModel(req.body)
    .catch((e) => res.send({ success: false, errors: [{ msg: e.message }], status: status.InternalServerError }));
  return res.send(response);
});



router.get('/getModel',authjwt, async (req, res, next) => {
  // return res.send("hello ok");
  // console.log(req.query);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.send({ errors: errors.array(), success: false, status: status.BadRequest });
  }
  const response = await vehicle.getModel(req.query)
    .catch((e) => res.send({ success: false, errors: [{ msg: e.message }], status: status.InternalServerError }));
  return res.send(response);
});

router.get('/bodytype',authjwt, async (req, res, next) => {
    // return res.send("hello ok");
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.send({ errors: errors.array(), success: false, status: status.BadRequest });
    }
    const response = await vehicle.bodytype(req.body)
      .catch((e) => res.send({ success: false, errors: [{ msg: e.message }], status: status.InternalServerError }));
    return res.send(response);
});


router.get('/color',authjwt, async (req, res, next) => {
  // return res.send("hello ok");
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.send({ errors: errors.array(), success: false, status: status.BadRequest });
  }
  const response = await vehicle.color(req.body)
    .catch((e) => res.send({ success: false, errors: [{ msg: e.message }], status: status.InternalServerError }));
  return res.send(response);
});

router.get('/fueltype',authjwt, async (req, res, next) => {
  // return res.send("hello ok");
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.send({ errors: errors.array(), success: false, status: status.BadRequest });
  }
  const response = await vehicle.fueltype(req.body)
    .catch((e) => res.send({ success: false, errors: [{ msg: e.message }], status: status.InternalServerError }));
  return res.send(response);
});

router.get('/seat',authjwt, async (req, res, next) => {
  // return res.send("hello ok");
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.send({ errors: errors.array(), success: false, status: status.BadRequest });
  }
  const response = await vehicle.seat(req.body)
    .catch((e) => res.send({ success: false, errors: [{ msg: e.message }], status: status.InternalServerError }));
  return res.send(response);
});

router.get('/ownerType',authjwt, async (req, res, next) => {
  // return res.send("hello ok");
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.send({ errors: errors.array(), success: false, status: status.BadRequest });
  }
  const response = await vehicle.ownerType(req.body)
    .catch((e) => res.send({ success: false, errors: [{ msg: e.message }], status: status.InternalServerError }));
  return res.send(response);
});

router.get('/auction',authjwt, async (req, res, next) => {
  // return res.send("hello ok");
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.send({ errors: errors.array(), success: false, status: status.BadRequest });
  }
  const response = await vehicle.getAuction(req.body)
    .catch((e) => res.send({ success: false, errors: [{ msg: e.message }], status: status.InternalServerError }));
  return res.send(response);
});

router.get('/getAuctionVehicle',authjwt, async (req, res, next) => {
  // return res.send("hello ok");
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.send({ errors: errors.array(), success: false, status: status.BadRequest });
  }
  const response = await vehicle.getAuctionVehicle(req.body)
    .catch((e) => res.send({ success: false, errors: [{ msg: e.message }], status: status.InternalServerError }));
  return res.send(response);
});

router.post('/addAuctionVehicle',authjwt, upload.fields([
  { name: 'frontImage', maxCount: 1 },
  { name: 'backImage', maxCount: 1 },
  { name: 'sideImage', maxCount: 1 },
]) ,async (req, res, next) => {
  // return res.send("hello ok");
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.send({ errors: errors.array(), success: false, status: status.BadRequest });
  }
  const response = await vehicle.addAuctionVehicle(req.body)
    .catch((e) => res.send({ success: false, errors: [{ msg: e.message }], status: status.InternalServerError }));
  return res.send(response);
});




module.exports = router;
