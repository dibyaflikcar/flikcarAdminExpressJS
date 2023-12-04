var multer = require('multer');
const path = require('path');

exports.auctionCarFileStorage = () => {
  return multer.diskStorage({
    // Destination to store image
    destination: (req, file, cb) => {
      if (file.fieldname === 'ThumbnailPhotos') {
        // console.log("image received");
        cb(null, './public/uploads/car/');
      }
    //   if (file.fieldname === 'panCardImage') {
    //     cb(null, './public/uploads/dealer/panCard/');
    //   }
    //   if (file.fieldname === 'addressProofFrontImage') {
    //     cb(null, './public/uploads/dealer/addressProofImage/');
    //   }
    //   if (file.fieldname === 'addressProofBackImage') {
    //     cb(null, './public/uploads/dealer/addressProofImage/');
    //   }
    },
    filename: (req, file, cb) => {
      if (file.fieldname === 'ThumbnailPhotos') {
        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
      }
    //   if (file.fieldname === 'panCardImage') {
    //     cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
    //   }
    //   if (file.fieldname === 'addressProofFrontImage') {
    //     cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
    //   }
    //   if (file.fieldname === 'addressProofBackImage') {
    //     cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
    //   }
    }
  });
};

// exports.dealerVehicleFileStorage = () => {
//   return multer.diskStorage({
//     destination: './public/uploads/dealer/vehicleImage/',
//     filename: (req, file, cb) => {
//       cb(
//         null,
//         file.fieldname + '_' + Math.random().toString(16).slice(2) + Date.now() + path.extname(file.originalname)
//       );
//     }
//   });
// };

// exports.customerImageFileStorage = () => {
//   return multer.diskStorage({
//     destination: './public/uploads/customerImage/',
//     filename: (req, file, cb) => {
//       cb(
//         null,
//         file.fieldname + '_' + Math.random().toString(16).slice(2) + Date.now() + path.extname(file.originalname)
//       );
//     }
//   });
// };

// exports.dealerShopFileStorage = () => {
//   return multer.diskStorage({
//     destination: './public/uploads/dealer/shopImage/',
//     filename: (req, file, cb) => {
//       cb(
//         null,
//         file.fieldname + '_' + Math.random().toString(16).slice(2) + Date.now() + path.extname(file.originalname)
//       );
//     }
//   });
// };
