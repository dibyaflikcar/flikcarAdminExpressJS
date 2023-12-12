/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
const express = require('express');
const { validationResult } = require('express-validator');
const vehicle = require('../../../controllers/vehicle.controller');
const status = require('../../../utils/status.utils');
const authjwt = require('../../../middleware/authjwt');
const multer = require("multer");
const db=require('../../../config/db');



const router = express.Router();


const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const bucket = db.storage().bucket();


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

router.get('/carFeature',authjwt, async (req, res, next) => {
  // return res.send("hello ok");
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.send({ errors: errors.array(), success: false, status: status.BadRequest });
  }
  const response = await vehicle.carFeature(req.body)
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

// router.post('/addAuctionVehicle',multer({ storage: fileUpload.auctionCarFileStorage() }).array('ThumbnailPhotos') ,authjwt,async (req, res, next) => {
router.post('/addAuctionVehicle' ,authjwt,async (req, res, next) => {
// router.post('/addAuctionVehicle',upload.fields([{ name: 'ThumbnailPhotos', maxCount: 1 }, { name: 'ExteriorPhotos', maxCount: 1 }]) ,authjwt,async (req, res, next) => {
  // return res.send(ThumbnailPhotos);

  // const ThumbnailPhotos = req.files['ThumbnailPhotos'][0];
  // const ExteriorPhotos = req.files['ExteriorPhotos'][0];
        
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.send({ errors: errors.array(), success: false, status: status.BadRequest });
  }
  const response = await vehicle.addAuctionVehicle(req)
    .catch((e) => res.send({ success: false, errors: [{ msg: e.message }], status: status.InternalServerError }));
  return res.send(response);
});

router.post('/addAuctionVehicle' ,authjwt,async (req, res, next) => {
  // router.post('/addAuctionVehicle',upload.fields([{ name: 'ThumbnailPhotos', maxCount: 1 }, { name: 'ExteriorPhotos', maxCount: 1 }]) ,authjwt,async (req, res, next) => {
    // return res.send(ThumbnailPhotos);
  
    // const ThumbnailPhotos = req.files['ThumbnailPhotos'][0];
    // const ExteriorPhotos = req.files['ExteriorPhotos'][0];
          
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.send({ errors: errors.array(), success: false, status: status.BadRequest });
    }
    const response = await vehicle.addAuctionVehicle(req)
      .catch((e) => res.send({ success: false, errors: [{ msg: e.message }], status: status.InternalServerError }));
    return res.send(response);
  });

  router.post('/updateAuctionVehicle' ,authjwt,async (req, res, next) => {      
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.send({ errors: errors.array(), success: false, status: status.BadRequest });
      }
      const response = await vehicle.updateAuctionVehicle(req)
        .catch((e) => res.send({ success: false, errors: [{ msg: e.message }], status: status.InternalServerError }));
      return res.send(response);
    });

  


  router.post('/getAuctionCarDetails' ,authjwt,async (req, res, next) => { 
    // console.log(req.body.id);
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.send({ errors: errors.array(), success: false, status: status.BadRequest });
      }
      const response = await vehicle.getAuctionCarDetails(req)
        .catch((e) => res.send({ success: false, errors: [{ msg: e.message }], status: status.InternalServerError }));
      return res.send(response);
    });

    router.post('/getAuctionDetails' ,authjwt,async (req, res, next) => { 
      // console.log(req.body.id);
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.send({ errors: errors.array(), success: false, status: status.BadRequest });
        }
        const response = await vehicle.getAuctionDetails(req)
          .catch((e) => res.send({ success: false, errors: [{ msg: e.message }], status: status.InternalServerError }));
        return res.send(response);
      });

      router.post('/getBidList' ,authjwt,async (req, res, next) => { 
        // console.log(req.body.id);
          const errors = validationResult(req);
          if (!errors.isEmpty()) {
            return res.send({ errors: errors.array(), success: false, status: status.BadRequest });
          }
          const response = await vehicle.getBidList(req)
            .catch((e) => res.send({ success: false, errors: [{ msg: e.message }], status: status.InternalServerError }));
          return res.send(response);
        });

      

      router.post('/deleteAuctionVehicle' ,authjwt,async (req, res, next) => { 
        // console.log("docID "+req.body.id);
          const errors = validationResult(req);
          if (!errors.isEmpty()) {
            return res.send({ errors: errors.array(), success: false, status: status.BadRequest });
          }
          const response = await vehicle.deleteAuctionVehicle(req)
            .catch((e) => res.send({ success: false, errors: [{ msg: e.message }], status: status.InternalServerError }));
          return res.send(response);
        });

router.post('/uploadAuctionImage',upload.single('file') ,authjwt,async (req, res, next) => {

  // const ThumbnailPhotos = req.file;
  // console.log(ThumbnailPhotos);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.send({ errors: errors.array(), success: false, status: status.BadRequest });
    }
    const response = await vehicle.uploadAuctionImage(req)
      .catch((e) => res.send({ success: false, errors: [{ msg: e.message }], status: status.InternalServerError }));
    return res.send(response);
  });

  router.post('/uploadAuctionImage2',upload.single('file') ,authjwt,async (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.send({ errors: errors.array(), success: false, status: status.BadRequest });
      }
      const response = await vehicle.uploadAuctionImage2(req)
        .catch((e) => res.send({ success: false, errors: [{ msg: e.message }], status: status.InternalServerError }));
      return res.send(response);
    });

    router.post('/uploadAuctionImage3',upload.single('file') ,authjwt,async (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.send({ errors: errors.array(), success: false, status: status.BadRequest });
      }
      const response = await vehicle.uploadAuctionImage3(req)
        .catch((e) => res.send({ success: false, errors: [{ msg: e.message }], status: status.InternalServerError }));
      return res.send(response);
    });

    router.post('/uploadAuctionImage4',upload.single('file') ,authjwt,async (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.send({ errors: errors.array(), success: false, status: status.BadRequest });
      }
      const response = await vehicle.uploadAuctionImage4(req)
        .catch((e) => res.send({ success: false, errors: [{ msg: e.message }], status: status.InternalServerError }));
      return res.send(response);
    });

    router.post('/uploadAuctionImage5',upload.single('file') ,authjwt,async (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.send({ errors: errors.array(), success: false, status: status.BadRequest });
      }
      const response = await vehicle.uploadAuctionImage5(req)
        .catch((e) => res.send({ success: false, errors: [{ msg: e.message }], status: status.InternalServerError }));
      return res.send(response);
    });

    router.post('/uploadAuctionImage6',upload.single('file') ,authjwt,async (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.send({ errors: errors.array(), success: false, status: status.BadRequest });
      }
      const response = await vehicle.uploadAuctionImage6(req)
        .catch((e) => res.send({ success: false, errors: [{ msg: e.message }], status: status.InternalServerError }));
      return res.send(response);
    });

// vehicle enquiry start here
router.get('/getVehicleEnquiry',authjwt, async (req, res, next) => {
  // return res.send("hello ok");
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.send({ errors: errors.array(), success: false, status: status.BadRequest });
  }
  const response = await vehicle.getVehicleEnquiry(req.body)
    .catch((e) => res.send({ success: false, errors: [{ msg: e.message }], status: status.InternalServerError }));
  return res.send(response);
});

router.post('/deleteVehicleEnquiry' ,authjwt,async (req, res, next) => { 
  // console.log("docID "+req.body.id);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.send({ errors: errors.array(), success: false, status: status.BadRequest });
    }
    const response = await vehicle.deleteVehicleEnquiry(req)
      .catch((e) => res.send({ success: false, errors: [{ msg: e.message }], status: status.InternalServerError }));
    return res.send(response);
  });


  // Brand start here
  
  router.get('/getBrand',authjwt, async (req, res, next) => {
    // return res.send("hello ok");
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.send({ errors: errors.array(), success: false, status: status.BadRequest });
    }
    const response = await vehicle.getBrand(req.body)
      .catch((e) => res.send({ success: false, errors: [{ msg: e.message }], status: status.InternalServerError }));
    return res.send(response);
  });
  router.post('/addBrand' ,authjwt,async (req, res, next) => { 
    // console.log("docID "+req.body.id);
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.send({ errors: errors.array(), success: false, status: status.BadRequest });
      }
      const response = await vehicle.addBrand(req)
        .catch((e) => res.send({ success: false, errors: [{ msg: e.message }], status: status.InternalServerError }));
      return res.send(response);
    });
    router.post('/updateBrand' ,authjwt,async (req, res, next) => { 
      // console.log("docID "+req.body.id);
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.send({ errors: errors.array(), success: false, status: status.BadRequest });
        }
        const response = await vehicle.updateBrand(req)
          .catch((e) => res.send({ success: false, errors: [{ msg: e.message }], status: status.InternalServerError }));
        return res.send(response);
      });
  router.post('/deleteBrand' ,authjwt,async (req, res, next) => { 
      // console.log("docID "+req.body.id);
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.send({ errors: errors.array(), success: false, status: status.BadRequest });
        }
        const response = await vehicle.deleteBrand(req)
          .catch((e) => res.send({ success: false, errors: [{ msg: e.message }], status: status.InternalServerError }));
        return res.send(response);
  });
    
// Model start here
router.post('/getBrandwithID' ,authjwt,async (req, res, next) => { 
  // console.log("docID "+req.body.id);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.send({ errors: errors.array(), success: false, status: status.BadRequest });
    }
    const response = await vehicle.getBrandwithID(req)
      .catch((e) => res.send({ success: false, errors: [{ msg: e.message }], status: status.InternalServerError }));
    return res.send(response);
  });
  router.post('/addModel' ,authjwt,async (req, res, next) => { 
    // console.log("docID "+req.body.id);
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.send({ errors: errors.array(), success: false, status: status.BadRequest });
      }
      const response = await vehicle.addModel(req)
        .catch((e) => res.send({ success: false, errors: [{ msg: e.message }], status: status.InternalServerError }));
      return res.send(response);
    });
    router.post('/updateModel' ,authjwt,async (req, res, next) => { 
      // console.log("docID "+req.body.id);
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.send({ errors: errors.array(), success: false, status: status.BadRequest });
        }
        const response = await vehicle.updateModel(req)
          .catch((e) => res.send({ success: false, errors: [{ msg: e.message }], status: status.InternalServerError }));
        return res.send(response);
      });

      router.post('/deleteModel' ,authjwt,async (req, res, next) => { 
        // console.log("docID "+req.body.id);
          const errors = validationResult(req);
          if (!errors.isEmpty()) {
            return res.send({ errors: errors.array(), success: false, status: status.BadRequest });
          }
          const response = await vehicle.deleteModel(req)
            .catch((e) => res.send({ success: false, errors: [{ msg: e.message }], status: status.InternalServerError }));
          return res.send(response);
        });

// user start here
router.get('/getUsers',authjwt, async (req, res, next) => {
  // return res.send("hello ok");
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.send({ errors: errors.array(), success: false, status: status.BadRequest });
  }
  const response = await vehicle.getUsers(req.body)
    .catch((e) => res.send({ success: false, errors: [{ msg: e.message }], status: status.InternalServerError }));
  return res.send(response);
});
router.post('/getUserbyId',authjwt, async (req, res, next) => {
  // return res.send("hello ok");
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.send({ errors: errors.array(), success: false, status: status.BadRequest });
  }
  const response = await vehicle.getUserbyId(req)
    .catch((e) => res.send({ success: false, errors: [{ msg: e.message }], status: status.InternalServerError }));
  return res.send(response);
});

router.post('/updateUserType',authjwt, async (req, res, next) => {
  // return res.send("hello ok");
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.send({ errors: errors.array(), success: false, status: status.BadRequest });
  }
  const response = await vehicle.updateUserType(req)
    .catch((e) => res.send({ success: false, errors: [{ msg: e.message }], status: status.InternalServerError }));
  return res.send(response);
});
router.post('/updateUser',authjwt, async (req, res, next) => {
  // return res.send("hello ok");
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.send({ errors: errors.array(), success: false, status: status.BadRequest });
  }
  const response = await vehicle.updateUser(req)
    .catch((e) => res.send({ success: false, errors: [{ msg: e.message }], status: status.InternalServerError }));
  return res.send(response);
});
router.post('/deleteUser',authjwt, async (req, res, next) => {
  // return res.send("hello ok");
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.send({ errors: errors.array(), success: false, status: status.BadRequest });
  }
  const response = await vehicle.deleteUser(req)
    .catch((e) => res.send({ success: false, errors: [{ msg: e.message }], status: status.InternalServerError }));
  return res.send(response);
});
router.post('/uploadDealerDocumentImage',upload.single('file') ,authjwt,async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.send({ errors: errors.array(), success: false, status: status.BadRequest });
  }
  const response = await vehicle.uploadDealerDocumentImage(req)
    .catch((e) => res.send({ success: false, errors: [{ msg: e.message }], status: status.InternalServerError }));
  return res.send(response);
});








      
    

  

  






module.exports = router;
