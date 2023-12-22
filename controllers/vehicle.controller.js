/* eslint-disable linebreak-style */
/* eslint-disable no-async-promise-executor */
/* eslint-disable no-unused-vars */
const axios = require('axios');
const status = require('../utils/status.utils');
const jwtService = require('../service/jwt.service');
const jwt = require('jsonwebtoken');
const multer = require("multer");
const moment = require('moment');

const db=require('../config/db');
const collectionName=require('../models');

// Configure multer for handling image uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const bucket = db.storage().bucket();


exports.getInspectorList = (req,res) =>
  new Promise(async (resolve, reject) => {
    try {
        const snapshot = await db.firestore().collection(collectionName.admin).where('type','=','inspector').get();
        const result = snapshot.docs.map(doc => doc.data());
        resolve({ success: true, status: status.Ok, msg: 'success' ,data : result});
    } catch (error) {
      reject(error);
    }
  });

exports.makeAndModel = (req,res) =>
  new Promise(async (resolve, reject) => {
    try {
        const snapshot = await db.firestore().collection(collectionName.makeAndModel).get();

        // const result = [];
        // snapshot.forEach((doc) => {
        //   result.push({
        //     // id: doc.id,
        //     data: doc.data(),
        //   });
        // });

        const result = snapshot.docs.map(doc => doc.data());
        resolve({ success: true, status: status.Ok, msg: 'success' ,data : result});

      
      
    } catch (error) {
      reject(error);
    }
  });

  exports.getModel = (req,res) =>
  new Promise(async (resolve, reject) => {
    // console.log(req.brandId);
    try {

        const docRef = db.firestore().collection(collectionName.makeAndModel).doc("Audi");
        const snapshot = await docRef.get();

        const result = snapshot.docs.map(doc => doc.data());
        resolve({ success: true, status: status.Ok, msg: 'success' ,data : result});
      
    } catch (error) {
      reject(error);
    }
  });

  
  exports.seat = (req,res) =>
  new Promise(async (resolve, reject) => {
    try {
        const snapshot = await db.firestore().collection(collectionName.seat).get();
        const result = snapshot.docs.map(doc => doc.data());
        resolve({ success: true, status: status.Ok, msg: 'success' ,data : result});
      
    } catch (error) {
      reject(error);
    }
  });


  exports.ownerType = (req,res) =>
  new Promise(async (resolve, reject) => {
    try {
        const snapshot = await db.firestore().collection(collectionName.ownerType).get();
        const result = snapshot.docs.map(doc => doc.data());
        resolve({ success: true, status: status.Ok, msg: 'success' ,data : result});
      
    } catch (error) {
      reject(error);
    }
  });

exports.bodytype = (req,res) =>
  new Promise(async (resolve, reject) => {
    try {
        const snapshot = await db.firestore().collection(collectionName.bodytype).get();
        const result = snapshot.docs.map(doc => doc.data());
        resolve({ success: true, status: status.Ok, msg: 'success' ,data : result});
      
    } catch (error) {
      reject(error);
    }
  });

  exports.carFeature = (req,res) =>
  new Promise(async (resolve, reject) => {
    try {
        const snapshot = await db.firestore().collection(collectionName.carFeature).get();
        const result = snapshot.docs.map(doc => doc.data());
        resolve({ success: true, status: status.Ok, msg: 'success' ,data : result});
      
    } catch (error) {
      reject(error);
    }
  });

  

exports.color = (req,res) =>
  new Promise(async (resolve, reject) => {
    try {
        const snapshot = await db.firestore().collection(collectionName.color).get();
        const result = snapshot.docs.map(doc => doc.data());
        resolve({ success: true, status: status.Ok, msg: 'success' ,data : result});
      
    } catch (error) {
      reject(error);
    }
});

exports.getRto = (req,res) =>
  new Promise(async (resolve, reject) => {
    try {
        const snapshot = await db.firestore().collection(collectionName.rtoLocation).get();
        const result = snapshot.docs.map(doc => doc.data());
        resolve({ success: true, status: status.Ok, msg: 'success' ,data : result});
      
    } catch (error) {
      reject(error);
    }
});



exports.fueltype = (req,res) =>
  new Promise(async (resolve, reject) => {
    try {
        const snapshot = await db.firestore().collection(collectionName.fueltype).get();
        const result = snapshot.docs.map(doc => doc.data());
        resolve({ success: true, status: status.Ok, msg: 'success' ,data : result});
      
    } catch (error) {
      reject(error);
    }
});


exports.getAuction = (req,res) =>
  new Promise(async (resolve, reject) => {
    try {
        const snapshot = await db.firestore().collection(collectionName.auction).get();
        const result = snapshot.docs.map(doc => doc.data());
        resolve({ success: true, status: status.Ok, msg: 'success' ,data : result});
      
    } catch (error) {
      reject(error);
    }
});


exports.getAuctionVehicle = (req,res) =>
  new Promise(async (resolve, reject) => {
    try {
        const snapshot = await db.firestore().collection(collectionName.AuctionVehicle).get();
        const result = snapshot.docs.map(doc => doc.data());
        resolve({ success: true, status: status.Ok, msg: 'success' ,data : result});
      
    } catch (error) {
      reject(error);
    }
});

exports.getAuctionCarDetails = (req,res) =>
  new Promise(async (resolve, reject) => {
    const id=String(req.body.id);
    try {
        const snapshot = await db.firestore().collection(collectionName.AuctionVehicle).doc(id).get();
        const result = snapshot.data();
        resolve({ success: true, status: status.Ok, msg: 'success' ,data : result});
      
    } catch (error) {
      reject(error);
    }
});

exports.getAuctionDetails = (req,res) =>
  new Promise(async (resolve, reject) => {
    const id=String(req.body.id);
    try {
        const snapshot = await db.firestore().collection(collectionName.auction).doc(id).get();
        const result = snapshot.data();
        resolve({ success: true, status: status.Ok, msg: 'success' ,data : result});
      
    } catch (error) {
      reject(error);
    }
});

exports.getBidList = (req,res) =>
  new Promise(async (resolve, reject) => {
    const id=String(req.body.id);
    try {
        const auctionData = await db.firestore().collection(collectionName.auction).doc(id).get();
        const auctionResult = auctionData.data();

        const snapshot = await db.firestore().collection(collectionName.bidsHistory).where('auctionId', '=', id).get();
        const result = snapshot.docs.map(doc => doc.data());
        resolve({ success: true, status: status.Ok, msg: 'success' ,data : result, auction:auctionResult});
      
    } catch (error) {
      reject(error);
    }
});



exports.deleteAuctionVehicle = (req,res) =>
  new Promise(async (resolve, reject) => {
    const id=String(req.body.id);
    try {
        const delete1 = await db.firestore().collection(collectionName.auction).doc(id).delete();
        const delete2 = await db.firestore().collection(collectionName.AuctionVehicle).doc(id).delete();
        resolve({ success: true, status: status.Ok, msg: 'success'});
      
    } catch (error) {
      reject(error);
    }
});

exports.addAuctionVehicle = (req,res) =>
  new Promise(async (resolve, reject) => {
 
    try {


          const randomId= new Date().getTime();
          const insertedId =String(randomId);
          const uploadedAt =randomId;

          const auctionStartTime=new Date(req.body.auctionStartTime).getTime();
          const auctionEndTime=new Date(req.body.auctionEndTime).getTime();
          let insuranceValidity;
          if(req.body.insuranceValidity!=null)
          {
            insuranceValidity= new Date(req.body.insuranceValidity).getTime();
          }
          else
          {
            insuranceValidity=null;
          }

          let roadTaxValidity;
          if(req.body.roadTaxValidity!=null)
          {
            roadTaxValidity= new Date(req.body.roadTaxValidity).getTime();
          }
          else
          {
            roadTaxValidity=null;
          }
          
          // console.log(insuranceValidity +" "+roadTaxValidity);
          
          const carDetails ={
            id: insertedId,
            brand: req.body.brand,
            model: req.body.model,
            variant: req.body.variant,
            fuelType: req.body.fuelType,
            bodyType: req.body.bodyType,
            color: req.body.color,
            seat: Number(req.body.seat),
            ownerType: req.body.ownerType,
            city: req.body.city,
            transmission: req.body.transmission,
            kmsDriven: Number(req.body.kmsDriven),
            registrationYear: Number(req.body.regYear),
            imagePath: req.body.thumbImage[0].path,
          };

          // // console.log(carDetails);
          const properties ={
            brand: req.body.brand,
            model: req.body.model,
            variant: req.body.variant,
            fuelType: req.body.fuelType,
            bodyType: req.body.bodyType,
            color: req.body.color,
            seat: Number(req.body.seat),
            ownerType: req.body.ownerType,
            carDescription: req.body.description,
            city: req.body.city,
            kmsDriven: Number(req.body.kmsDriven),
            registrationYear: Number(req.body.regYear),
            transmission: req.body.transmission,
            engineCC: Number(req.body.engine),
            maxPower: req.body.maxPower,
            mileage: req.body.mileage,
            maxTorque: req.body.maxTorque,
            noc: req.body.noc,
            manufacturingYear: Number(req.body.mfgYear),
            rtoLocation: req.body.rto,
            inspectionReport: req.body.inspectionReport,
            insuranceValidity: insuranceValidity,
            roadTaxValidity: roadTaxValidity,
            inspectionScore: Number(req.body.inspectionScore),
            comfort: req.body.comforts,
            entertainment: req.body.entertainment,
            exterior: req.body.exterior,
            safety: req.body.safety,
            interior: req.body.interior,
          };

          // console.log(properties);

          // await db.firestore().collection(collectionName.test).doc(insertedId).set({


          await db.firestore().collection(collectionName.AuctionVehicle).doc(insertedId).set({
            id: insertedId,
            carPrice: Number(req.body.carPrice),
            images: req.body.allCarImage,
            videos:req.body.allCarVideo,
            status: "INACTIVE",
            properties: properties,
            uploadedBy: "admin",
            uploadedAt: uploadedAt,
          });

          await db.firestore().collection(collectionName.auction).doc(insertedId).set({
        id: insertedId,
        carDetails: carDetails,
        startPrice: 0,
        isSoldOut: false,
        latestBid: null,
        startTime:auctionStartTime,
        endTime:auctionEndTime,
        oneClickBuyPrice:req.body.oneClickBuyPrice
          });

      resolve({ success: true, status: status.Ok, msg: 'Data added successfully'});

      

      // console.log(uploadedAt);
      // resolve({ success: true, status: status.Ok, msg: testId});

      // let images = [];
      // for (let index = 0; index < req.files.length; index++) {
      //   images.push({
      //     path: `uploads/dealer/vehicleImage/${req.files[index].filename}`,
      //     type:"Thumb"
      //   });
      // }

      // await db.firestore().collection(collectionName.auction).add({
      //   id: insertedId,
      //   carDetails: carDetails,
      //   startPrice: req.startPrice,
      //   isSoldOut: false,
      //   latestBid: null,
      // });

      
        // const snapshot = await db.firestore().collection(collectionName.AuctionVehicle).get();
        // const result = snapshot.docs.map(doc => doc.data());
        // resolve({ success: true, status: status.Ok, msg: 'success' ,data : result});
      
    } catch (error) {
      reject(error);
    }
});

exports.updateAuctionVehicle = (req,res) =>
  new Promise(async (resolve, reject) => {
 
    try {

        const docId =req.body.docId;

        // const insuranceValidity =  new Date(req.body.insuranceValidity).getTime();
        // const roadTaxValidity = new Date(req.body.roadTaxValidity).getTime(); 
        const auctionStartTime=new Date(req.body.auctionStartTime).getTime(); 
        const auctionEndTime = new Date(req.body.auctionEndTime).getTime(); 

        let insuranceValidity;
          if(req.body.insuranceValidity!=null)
          {
            insuranceValidity= new Date(req.body.insuranceValidity).getTime();
          }
          else
          {
            insuranceValidity=null;
          }

          let roadTaxValidity;
          if(req.body.roadTaxValidity!=null)
          {
            roadTaxValidity= new Date(req.body.roadTaxValidity).getTime();
          }
          else
          {
            roadTaxValidity=null;
          }

          const carDetails ={
            id: docId,
            brand: req.body.brand,
            model: req.body.model,
            variant: req.body.variant,
            fuelType: req.body.fuelType,
            bodyType: req.body.bodyType,
            color: req.body.color,
            seat: req.body.seat,
            ownerType: req.body.ownerType,
            city: req.body.city,
            transmission: req.body.transmission,
            kmsDriven: req.body.kmsDriven,
            registrationYear: req.body.regYear,
            imagePath: req.body.thumbImage,
          };

          // console.log(carDetails);
          
          const properties ={
            brand: req.body.brand,
            model: req.body.model,
            variant: req.body.variant,
            fuelType: req.body.fuelType,
            bodyType: req.body.bodyType,
            color: req.body.color,
            seat: req.body.seat,
            ownerType: req.body.ownerType,
            carDescription: req.body.description,
            city: req.body.city,
            kmsDriven: req.body.kmsDriven,
            registrationYear: req.body.regYear,
            transmission: req.body.transmission,
            engineCC: req.body.engine,
            maxPower: req.body.maxPower,
            mileage: req.body.mileage,
            maxTorque: req.body.maxTorque,
            noc: req.body.noc,
            manufacturingYear: req.body.mfgYear,
            rtoLocation: req.body.rto,
            inspectionReport: req.body.inspectionReport,
            insuranceValidity: insuranceValidity,
            roadTaxValidity: roadTaxValidity,
            inspectionScore: req.body.inspectionScore,
            comfort: req.body.comforts,
            entertainment: req.body.entertainment,
            exterior: req.body.exterior,
            safety: req.body.safety,
            interior: req.body.interior,
          };

          // console.log(properties);

          await db.firestore().collection(collectionName.AuctionVehicle).doc(docId).update({
            carPrice: Number(req.body.carPrice),
            images: req.body.allCarImage,
            videos:req.body.allCarVideo,
            // status: "INACTIVE",
            properties: properties,
          });

          await db.firestore().collection(collectionName.auction).doc(docId).update({
            carDetails: carDetails,
            // startPrice: Number(req.body.carPrice),
            isSoldOut: req.body.carsoldStatus,
            startTime:auctionStartTime,
            endTime:auctionEndTime,
            oneClickBuyPrice:req.body.oneClickBuyPrice
          });
         

      resolve({ success: true, status: status.Ok, msg: 'Data updated successfully'});

        // const snapshot = await db.firestore().collection(collectionName.AuctionVehicle).get();
        // const result = snapshot.docs.map(doc => doc.data());
        // resolve({ success: true, status: status.Ok, msg: 'success' ,data : result});
      
    } catch (error) {
      reject(error);
    }
});


exports.uploadInspectionImage = (req,res) =>
  new Promise(async (resolve, reject) => {
    try {
          const randomId= new Date().getTime();
          const image = req.file;
          // console.log(image);

        // Upload image to Firebase Cloud Storage
        const storageRef = bucket.file(randomId+"_"+image.originalname);
        const blobStream = storageRef.createWriteStream();
        blobStream.on('finish', async () => {
          // Generate download URL
          const downloadUrl = await storageRef.getSignedUrl({
            action: 'read',
            expires: '01-01-2100', // Adjust the expiration date as needed
          });
          const fileUrl=downloadUrl[0];

          let images = {
              path: fileUrl,
            };
            resolve({ success: true, status: status.Ok, msg: 'success', data:images});
        });

        blobStream.end(image.buffer);
      
    } catch (error) {
      reject(error);
    }
});

exports.uploadAuctionImage = (req,res) =>
  new Promise(async (resolve, reject) => {

    try {

          const randomId= new Date().getTime();
          const image = req.file;
          // console.log(image);

        // Upload image to Firebase Cloud Storage
        const storageRef = bucket.file(randomId+"_"+image.originalname);
        const blobStream = storageRef.createWriteStream();
        blobStream.on('finish', async () => {
          // Generate download URL
          const downloadUrl = await storageRef.getSignedUrl({
            action: 'read',
            expires: '01-01-2100', // Adjust the expiration date as needed
          });
          // console.log(downloadUrl[0]);
          const fileUrl=downloadUrl[0];
          // let images = [];
          //   images.push({
          //     path: fileUrl,
          //     type:"THUMB"
          //   });

          let images = {
              path: fileUrl,
              type:"THUMB"
            };
            resolve({ success: true, status: status.Ok, msg: 'success', data:images});
        });

        blobStream.end(image.buffer);
      
    } catch (error) {
      reject(error);
    }
});

exports.uploadAuctionImage2 = (req,res) =>
  new Promise(async (resolve, reject) => {

    try {

          const randomId= new Date().getTime();
          const image = req.file;
          // console.log(image);

        // Upload image to Firebase Cloud Storage
        const storageRef = bucket.file(randomId+"_"+image.originalname);
        const blobStream = storageRef.createWriteStream();
        blobStream.on('finish', async () => {
          // Generate download URL
          const downloadUrl = await storageRef.getSignedUrl({
            action: 'read',
            expires: '01-01-2100', // Adjust the expiration date as needed
          });
          // console.log(downloadUrl[0]);
          const fileUrl=downloadUrl[0];
          // let images = [];
          //   images.push({
          //     path: fileUrl,
          //     type:"EXT"
          //   });

            let images = {
              path: fileUrl,
              type:"EXT"
            };
            resolve({ success: true, status: status.Ok, msg: 'success', data:images});
        });

        blobStream.end(image.buffer);
      
    } catch (error) {
      reject(error);
    }
});

exports.uploadAuctionImage3 = (req,res) =>
  new Promise(async (resolve, reject) => {

    try {

          const randomId= new Date().getTime();
          const image = req.file;
          // console.log(image);

        // Upload image to Firebase Cloud Storage
        const storageRef = bucket.file(randomId+"_"+image.originalname);
        const blobStream = storageRef.createWriteStream();
        blobStream.on('finish', async () => {
          // Generate download URL
          const downloadUrl = await storageRef.getSignedUrl({
            action: 'read',
            expires: '01-01-2100', // Adjust the expiration date as needed
          });
          // console.log(downloadUrl[0]);
          const fileUrl=downloadUrl[0];
          // let images = [];
          //   images.push({
          //     path: fileUrl,
          //     type:"EXT"
          //   });

            let images = {
              path: fileUrl,
              type:"INT"
            };
            resolve({ success: true, status: status.Ok, msg: 'success', data:images});
        });

        blobStream.end(image.buffer);
      
    } catch (error) {
      reject(error);
    }
});

exports.uploadAuctionImage4 = (req,res) =>
  new Promise(async (resolve, reject) => {

    try {

          const randomId= new Date().getTime();
          const image = req.file;
          // console.log(image);

        // Upload image to Firebase Cloud Storage
        const storageRef = bucket.file(randomId+"_"+image.originalname);
        const blobStream = storageRef.createWriteStream();
        blobStream.on('finish', async () => {
          // Generate download URL
          const downloadUrl = await storageRef.getSignedUrl({
            action: 'read',
            expires: '01-01-2100', // Adjust the expiration date as needed
          });
          // console.log(downloadUrl[0]);
          const fileUrl=downloadUrl[0];
          // let images = [];
          //   images.push({
          //     path: fileUrl,
          //     type:"EXT"
          //   });

            let images = {
              path: fileUrl,
              type:"ENGINE"
            };
            resolve({ success: true, status: status.Ok, msg: 'success', data:images});
        });

        blobStream.end(image.buffer);
      
    } catch (error) {
      reject(error);
    }
});

exports.uploadAuctionImage5 = (req,res) =>
  new Promise(async (resolve, reject) => {

    try {

          const randomId= new Date().getTime();
          const image = req.file;
          // console.log(image);

        // Upload image to Firebase Cloud Storage
        const storageRef = bucket.file(randomId+"_"+image.originalname);
        const blobStream = storageRef.createWriteStream();
        blobStream.on('finish', async () => {
          // Generate download URL
          const downloadUrl = await storageRef.getSignedUrl({
            action: 'read',
            expires: '01-01-2100', // Adjust the expiration date as needed
          });
          // console.log(downloadUrl[0]);
          const fileUrl=downloadUrl[0];
          // let images = [];
          //   images.push({
          //     path: fileUrl,
          //     type:"EXT"
          //   });

            let images = {
              path: fileUrl,
              type:"TYRE"
            };
            resolve({ success: true, status: status.Ok, msg: 'success', data:images});
        });

        blobStream.end(image.buffer);
      
    } catch (error) {
      reject(error);
    }
});

exports.uploadAuctionImage6 = (req,res) =>
  new Promise(async (resolve, reject) => {

    try {

          const randomId= new Date().getTime();
          const image = req.file;
          // console.log(image);

        // Upload image to Firebase Cloud Storage
        const storageRef = bucket.file(randomId+"_"+image.originalname);
        const blobStream = storageRef.createWriteStream();
        blobStream.on('finish', async () => {
          // Generate download URL
          const downloadUrl = await storageRef.getSignedUrl({
            action: 'read',
            expires: '01-01-2100', // Adjust the expiration date as needed
          });
          // console.log(downloadUrl[0]);
          const fileUrl=downloadUrl[0];
          // let images = [];
          //   images.push({
          //     path: fileUrl,
          //     type:"EXT"
          //   });

            let images = {
              path: fileUrl,
              type:"DENT"
            };
            resolve({ success: true, status: status.Ok, msg: 'success', data:images});
        });

        blobStream.end(image.buffer);
      
    } catch (error) {
      reject(error);
    }
});

exports.uploadAuctionImage7 = (req,res) =>
  new Promise(async (resolve, reject) => {

    try {

          const randomId= new Date().getTime();
          const image = req.file;
          // console.log(image);

        // Upload image to Firebase Cloud Storage
        const storageRef = bucket.file(randomId+"_"+image.originalname);
        const blobStream = storageRef.createWriteStream();
        blobStream.on('finish', async () => {
          // Generate download URL
          const downloadUrl = await storageRef.getSignedUrl({
            action: 'read',
            expires: '01-01-2100', // Adjust the expiration date as needed
          });
          // console.log(downloadUrl[0]);
          const fileUrl=downloadUrl[0];

            let images = {
              path: fileUrl,
              type:"OTHER"
            };
            resolve({ success: true, status: status.Ok, msg: 'success', data:images});
        });

        blobStream.end(image.buffer);
      
    } catch (error) {
      reject(error);
    }
});

exports.uploadAuctionImage8 = (req,res) =>
  new Promise(async (resolve, reject) => {

    try {

          const randomId= new Date().getTime();
          const image = req.file;
          // console.log(image);

        // Upload image to Firebase Cloud Storage
        const storageRef = bucket.file(randomId+"_"+image.originalname);
        const blobStream = storageRef.createWriteStream();
        blobStream.on('finish', async () => {
          // Generate download URL
          const downloadUrl = await storageRef.getSignedUrl({
            action: 'read',
            expires: '01-01-2100', // Adjust the expiration date as needed
          });
          // console.log(downloadUrl[0]);
          const fileUrl=downloadUrl[0];

            let images = {
              path: fileUrl,
              type:"OTHER"
            };
            resolve({ success: true, status: status.Ok, msg: 'success', data:images});
        });

        blobStream.end(image.buffer);
      
    } catch (error) {
      reject(error);
    }
});



exports.uploadAuctionVideo1 = (req,res) =>
  new Promise(async (resolve, reject) => {

    try {

          const randomId= new Date().getTime();
          const image = req.file;
  

        // Upload image to Firebase Cloud Storage
        const storageRef = bucket.file(randomId+"_"+image.originalname);
        const blobStream = storageRef.createWriteStream();
        blobStream.on('finish', async () => {
          // Generate download URL
          const downloadUrl = await storageRef.getSignedUrl({
            action: 'read',
            expires: '01-01-2100', // Adjust the expiration date as needed
          });
          // console.log(downloadUrl[0]);
          const fileUrl=downloadUrl[0];
          // let images = [];
          //   images.push({
          //     path: fileUrl,
          //     type:"EXT"
          //   });

            let videos = {
              path: fileUrl,
              type:"ENGINE",
              thumb:'https://firebasestorage.googleapis.com/v0/b/flikcar-bac6e.appspot.com/o/001.jpg?alt=media&token=58caa43d-3141-4969-a8ed-d10c51ea8cac',
            };
            resolve({ success: true, status: status.Ok, msg: 'success', data:videos});
        });

        blobStream.end(image.buffer);
      
    } catch (error) {
      reject(error);
    }
});
exports.uploadAuctionVideo2 = (req,res) =>
  new Promise(async (resolve, reject) => {

    try {

          const randomId= new Date().getTime();
          const image = req.file;
  

        // Upload image to Firebase Cloud Storage
        const storageRef = bucket.file(randomId+"_"+image.originalname);
        const blobStream = storageRef.createWriteStream();
        blobStream.on('finish', async () => {
          // Generate download URL
          const downloadUrl = await storageRef.getSignedUrl({
            action: 'read',
            expires: '01-01-2100', // Adjust the expiration date as needed
          });
          // console.log(downloadUrl[0]);
          const fileUrl=downloadUrl[0];

            let videos = {
              path: fileUrl,
              type:"SILENCER",
              thumb:'https://firebasestorage.googleapis.com/v0/b/flikcar-bac6e.appspot.com/o/002.jpg?alt=media&token=d47b010c-7b7f-4b9b-ab25-e99e1c31db53',
            };
            resolve({ success: true, status: status.Ok, msg: 'success', data:videos});
        });

        blobStream.end(image.buffer);
      
    } catch (error) {
      reject(error);
    }
});



// vehicle enquiry start here
exports.getVehicleEnquiry = (req,res) =>
  new Promise(async (resolve, reject) => {
    try {
        const snapshot = await db.firestore().collection(collectionName.vehicleEnquiry).get();
        const result = snapshot.docs.map(doc => doc.data());
        resolve({ success: true, status: status.Ok, msg: 'success' ,data : result});
      
    } catch (error) {
      reject(error);
    }
});

exports.deleteVehicleEnquiry = (req,res) =>
  new Promise(async (resolve, reject) => {
    const id=String(req.body.id);
    try {
        const delete1 = await db.firestore().collection(collectionName.vehicleEnquiry).doc(id).delete();
        resolve({ success: true, status: status.Ok, msg: 'success'});
      
    } catch (error) {
      reject(error);
    }
});

// Brand start here

exports.getBrand = (req,res) =>
  new Promise(async (resolve, reject) => {
    try {
        const snapshot = await db.firestore().collection(collectionName.makeAndModel).get();
        const result = [];
        snapshot.forEach((doc) => {
          result.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        // const result = snapshot.docs.map(doc => doc.data());
        resolve({ success: true, status: status.Ok, msg: 'success' ,data : result});
    } catch (error) {
      reject(error);
    }
  });
exports.addBrand = (req,res) =>
  new Promise(async (resolve, reject) => {
    const insertedId=String(req.body.brand);
    try {
      await db.firestore().collection(collectionName.makeAndModel).doc(insertedId).set({
        name: req.body.brand,
        models:null,
      });
        resolve({ success: true, status: status.Ok, msg: 'success'});
      
    } catch (error) {
      reject(error);
    }
});
exports.updateBrand = (req,res) =>
  new Promise(async (resolve, reject) => {
    const insertedId=String(req.body.docId);
    try {
      await db.firestore().collection(collectionName.makeAndModel).doc(insertedId).update({
        name: req.body.brand
      });
        resolve({ success: true, status: status.Ok, msg: 'success'});
      
    } catch (error) {
      reject(error);
    }
});

exports.deleteBrand = (req,res) =>
  new Promise(async (resolve, reject) => {
    const id=String(req.body.id);
    try {
        const delete1 = await db.firestore().collection(collectionName.makeAndModel).doc(id).delete();
        resolve({ success: true, status: status.Ok, msg: 'success'});
      
    } catch (error) {
      reject(error);
    }
});

// Model start here
exports.getBrandwithID = (req,res) =>
  new Promise(async (resolve, reject) => {
    const docId=String(req.body.id);
    // console.log(docId);
    try {
        const snapshot = await db.firestore().collection(collectionName.makeAndModel).doc(docId).get();
        // console.log(snapshot.data());
        // const result = [];
        // snapshot.forEach((doc) => {
        //   result.push({
        //     id: doc.id,
        //     data: doc.data(),
        //   });
        // });
        const result = snapshot.data();
        resolve({ success: true, status: status.Ok, msg: 'success' ,data : result});
    } catch (error) {
      reject(error);
    }
  });

  exports.addModel = (req,res) =>
  new Promise(async (resolve, reject) => {
    const docId=String(req.body.docId);
    try {
      
      // console.log(docId);
      const snapshot=await db.firestore().collection(collectionName.makeAndModel).doc(docId).get();
      const result = snapshot.data();
      console.log(result.models);
      let myArray = result.models;

      if(myArray!=null)
      {
          const valueToCheck = req.body.model;
          const exists = myArray.some(obj => Object.values(obj).includes(valueToCheck));
          if(exists==true)
          {
            resolve({ success: false, status: status.Found, msg: 'error'});
          }
          else
          {
              const newItem = {
                name:req.body.model,
                variants:null,
              }; 
              myArray.push(newItem);

              await db.firestore().collection(collectionName.makeAndModel).doc(docId).update({
                models: myArray,
              });
          
              resolve({ success: true, status: status.Ok, msg: 'success'});
          }
      }
      else
      {
        const newItem = {
          name:req.body.model,
          variants:null,
        }; 
        myArray.push(newItem);

        await db.firestore().collection(collectionName.makeAndModel).doc(docId).update({
          models: myArray,
        });
    
        resolve({ success: true, status: status.Ok, msg: 'success'});
      }
      
      
     
      
      
    } catch (error) {
      reject(error);
    }
});

exports.updateModel = (req,res) =>
  new Promise(async (resolve, reject) => {
    const docId=String(req.body.docId);
    const model=req.body.model;
    const indexId=parseInt(req.body.indexId, 10);
    try {
      
      const snapshot=await db.firestore().collection(collectionName.makeAndModel).doc(docId).get();
      const result = snapshot.data();
      // console.log(result.models);
      let myArray = result.models;
      // console.log(myArray);

      if (indexId >= 0 && indexId < myArray.length) {
        // Update the value in the specific object at the given index
        myArray[indexId].name = model;
      }

          await db.firestore().collection(collectionName.makeAndModel).doc(docId).update({
            models: myArray,
          });
      
          resolve({ success: true, status: status.Ok, msg: 'success'});  
      
    } catch (error) {
      reject(error);
    }
});

exports.deleteModel = (req,res) =>
  new Promise(async (resolve, reject) => {
    const docId=String(req.body.docId);
    const indexId=parseInt(req.body.indexId, 10);
    try {
      
      const snapshot=await db.firestore().collection(collectionName.makeAndModel).doc(docId).get();
      const result = snapshot.data();
      // console.log(result.models);
      let myArray = result.models;

      if (indexId >= 0 && indexId < myArray.length) {
        myArray.splice(indexId, 1);
      }
      // console.log(myArray);

        await db.firestore().collection(collectionName.makeAndModel).doc(docId).update({
          models: myArray,
        });
    
        resolve({ success: true, status: status.Ok, msg: 'success'});  
      
    } catch (error) {
      reject(error);
    }
});

// variant start here
exports.addVariant = (req,res) =>
  new Promise(async (resolve, reject) => {
    const docId=String(req.body.docId);
    const modelKey=req.body.modelKey;
    const variant=String(req.body.variant);
    // const indexId=0;
    try {
      
      // console.log(docId+" "+modelKey+" "+variant);
      const snapshot=await db.firestore().collection(collectionName.makeAndModel).doc(docId).get();
      const result = snapshot.data();
      console.log(result.models[modelKey].variants);
      if(result.models[modelKey].variants!=null)
      {
        let modelArray = result.models;
        let variantArray = result.models[modelKey].variants;
        variantArray.push(variant);

        if (modelKey >= 0 && modelKey < modelArray.length) {
          // Update the value in the specific object at the given index
          modelArray[modelKey].variants = variantArray;
        }

        // console.log(modelArray);
          await db.firestore().collection(collectionName.makeAndModel).doc(docId).update({
            models: modelArray,
          });
      }
      else
      {
        let modelArray = result.models;
        let variantArray = [variant];
        

        if (modelKey >= 0 && modelKey < modelArray.length) {
          // Update the value in the specific object at the given index
          modelArray[modelKey].variants = variantArray;
        }

        // console.log(modelArray);
          await db.firestore().collection(collectionName.makeAndModel).doc(docId).update({
            models: modelArray,
          });
      }
      
    
        resolve({ success: true, status: status.Ok, msg: 'success'});
      
      
    } catch (error) {
      reject(error);
    }
});

exports.deleteVariant = (req,res) =>
  new Promise(async (resolve, reject) => {
    const docId=String(req.body.docId);
    const modelKey=req.body.modelKey;
    const variantKey=String(req.body.variantKey);
    // const indexId=0;
    try {
      
      // console.log(docId);
      const snapshot=await db.firestore().collection(collectionName.makeAndModel).doc(docId).get();
      const result = snapshot.data();
      // console.log(result.models[modelKey].variants);
      let modelArray = result.models;
      let variantArray = result.models[modelKey].variants;
      // variantArray.push(variant);

      

      if (variantKey >= 0 && variantKey < variantArray.length) {
        variantArray.splice(variantKey, 1);
      }

      if (modelKey >= 0 && modelKey < modelArray.length) {
        modelArray[modelKey].variants = variantArray;
      }

      // console.log(modelArray);
        await db.firestore().collection(collectionName.makeAndModel).doc(docId).update({
          models: modelArray,
        });
    
        resolve({ success: true, status: status.Ok, msg: 'success'});
      
      
    } catch (error) {
      reject(error);
    }
});



// user start here
exports.getUsers = (req,res) =>
  new Promise(async (resolve, reject) => {
    try {
        const snapshot = await db.firestore().collection(collectionName.users).get();
        const result = snapshot.docs.map(doc => doc.data());
        resolve({ success: true, status: status.Ok, msg: 'success' ,data : result});
      
    } catch (error) {
      reject(error);
    }
});

exports.getUserbyId = (req,res) =>
  new Promise(async (resolve, reject) => {
    const docId=String(req.body.docId);
    const userType=req.body.userType;
    try {
      
          const snapshot = await db.firestore().collection(collectionName.users).doc(docId).get();
          const result = snapshot.data();
          resolve({ success: true, status: status.Ok, msg: 'success',data : result});  
      
    } catch (error) {
      reject(error);
    }
});
exports.updateUserType = (req,res) =>
  new Promise(async (resolve, reject) => {
    const docId=String(req.body.docId);
    const userType=req.body.userType;
    try {
      
          await db.firestore().collection(collectionName.users).doc(docId).update({
            userTypeStatus: userType,
          });
      
          resolve({ success: true, status: status.Ok, msg: 'success'});  
      
    } catch (error) {
      reject(error);
    }
});

exports.updateUser = (req,res) =>
  new Promise(async (resolve, reject) => {
    const docId=String(req.body.docId);

    let IAddress;
    if(req.body.addressLine1==null && req.body.addressLine2==null && req.body.addressLine3==null && req.body.city==null && req.body.state==null)
    {
      IAddress=null;
    }
    else
    {
      IAddress=[
        {
          addressLine1: req.body.addressLine1,
          addressLine2: req.body.addressLine2,
          addressLine3: req.body.addressLine3,
          city: req.body.city,
          state: req.body.state,
          country: "India",
          postalCode: req.body.postalCode,
        }
      ];
    }
    
    const profile={
      phone: req.body.phone,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
    };

    

    const IDealerOnboardForm={
      name: req.body.name,
      email: req.body.email,
      shopName: req.body.shopName,
      shopAddress: req.body.shopAddress,
      selectedState: req.body.selectedState,
      selectedCity: req.body.selectedCity,
      pinCode: req.body.pinCode,
      panCardNumber: req.body.panCardNumber,
      addressProofNumber: req.body.addressProofNumber,
      tradeLicenseNumber: req.body.tradeLicenseNumber,
      cancelledChequeNumber: req.body.cancelledChequeNumber,
      docsImagePaths: req.body.allImage,
    };

    // console.log(IDealerOnboardForm);
    // resolve({ success: true, status: status.Ok, msg: 'success'});

    const IShop={
      name: req.body.shopName,
      phone: req.body.shopPhone,
      addresses: IAddress,
      gstNumber: req.body.gstNumber,
      // shopImages: string[],
    };

    try {
      
      // console.log(IDealerOnboardForm);
          await db.firestore().collection(collectionName.users).doc(docId).update({
            userTypeStatus: req.body.userType,
            profile:profile,
            dealerOnboardFormData:IDealerOnboardForm,
            shop:IShop,
          });
      
          resolve({ success: true, status: status.Ok, msg: 'success'});  
      
    } catch (error) {
      reject(error);
    }
});
exports.deleteUser = (req,res) =>
  new Promise(async (resolve, reject) => {
    const docId=String(req.body.id);
  

    try {
      
      // console.log(profile);
          await db.firestore().collection(collectionName.users).doc(docId).update({
            userTypeStatus: 'DELETED',
          });
      
          resolve({ success: true, status: status.Ok, msg: 'success'});  
      
    } catch (error) {
      reject(error);
    }
});
exports.uploadDealerDocumentImage = (req,res) =>
  new Promise(async (resolve, reject) => {

    try {

          const randomId= new Date().getTime();
          const image = req.file;
          // console.log(image);

        // Upload image to Firebase Cloud Storage
        const storageRef = bucket.file(randomId+"_"+image.originalname);
        const blobStream = storageRef.createWriteStream();
        blobStream.on('finish', async () => {
          // Generate download URL
          const downloadUrl = await storageRef.getSignedUrl({
            action: 'read',
            expires: '01-01-2100', // Adjust the expiration date as needed
          });
          // console.log(downloadUrl[0]);
          const fileUrl=downloadUrl[0];
          // let images = [];
          //   images.push({
          //     path: fileUrl,
          //     type:"EXT"
          //   });

            let images = {
              type:req.body.type,
              path: fileUrl
            };
            resolve({ success: true, status: status.Ok, msg: 'success', data:images});
        });

        blobStream.end(image.buffer);
      
    } catch (error) {
      reject(error);
    }
});


// color start here
exports.getColorList = (req,res) =>
  new Promise(async (resolve, reject) => {
    try {
        const snapshot = await db.firestore().collection(collectionName.color).get();
        // const result = snapshot.docs.map(doc => doc.data());
        const result = [];
        snapshot.forEach((doc) => {
          result.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        resolve({ success: true, status: status.Ok, msg: 'success' ,data : result});
      
    } catch (error) {
      reject(error);
    }
});
exports.addColor = (req,res) =>
  new Promise(async (resolve, reject) => {
    
    try {
        const randomId= new Date().getTime();
        const insertedId =String(randomId);
        const createdAt =randomId;
        const updatedAt =randomId;

      await db.firestore().collection(collectionName.color).doc(insertedId).set({
        id: insertedId,
        name: req.body.newColorName,
        code: req.body.newColorCode,
        createdAt:createdAt,
        updatedAt:updatedAt,
        status:"ACTIVE",
      });
        resolve({ success: true, status: status.Ok, msg: 'success'});
      
    } catch (error) {
      reject(error);
    }
});

exports.updateColor = (req,res) =>
  new Promise(async (resolve, reject) => {
    
    try {
        const updatedAt= new Date().getTime();
        const id=String(req.body.id);
        // console.log(req.body.id+ " "+req.body.newColorName+" "+);

        // console.log(req.body.id +" "+req.body.editColorName+" "+req.body.editColorCode);
      await db.firestore().collection(collectionName.color).doc(id).update({
        name: req.body.editColorName,
        code: req.body.editColorCode,
        updatedAt:updatedAt,
      });
        resolve({ success: true, status: status.Ok, msg: 'success'});
      
    } catch (error) {
      reject(error);
    }
});

exports.deleteColor = (req,res) =>
  new Promise(async (resolve, reject) => {
    
    try {
        const id=String(req.body.id);
        await db.firestore().collection(collectionName.color).doc(id).delete();
        resolve({ success: true, status: status.Ok, msg: 'success'});
      
    } catch (error) {
      reject(error);
    }
});

// RTO start here
exports.getRtoList = (req,res) =>
  new Promise(async (resolve, reject) => {
    try {
        const snapshot = await db.firestore().collection(collectionName.rtoLocation).get();
        // const result = snapshot.docs.map(doc => doc.data());
        const result = [];
        snapshot.forEach((doc) => {
          result.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        resolve({ success: true, status: status.Ok, msg: 'success' ,data : result});
      
    } catch (error) {
      reject(error);
    }
});
exports.addRto = (req,res) =>
  new Promise(async (resolve, reject) => {
    
    try {
        const randomId= new Date().getTime();
        const insertedId =String(randomId);
        

      await db.firestore().collection(collectionName.rtoLocation).doc(insertedId).set({
        id: insertedId,
        rtoName: req.body.newRtoName,
        rtoCode: req.body.newRtoCode,
      });
        resolve({ success: true, status: status.Ok, msg: 'success'});
      
    } catch (error) {
      reject(error);
    }
});
exports.updateRto = (req,res) =>
  new Promise(async (resolve, reject) => {
    
    try {
        const updatedAt= new Date().getTime();
        const id=String(req.body.id);
      await db.firestore().collection(collectionName.rtoLocation).doc(id).update({
        rtoName: req.body.editRtoName,
        rtoCode: req.body.editRtoCode,
      });
        resolve({ success: true, status: status.Ok, msg: 'success'});
      
    } catch (error) {
      reject(error);
    }
});
exports.deleteRto = (req,res) =>
  new Promise(async (resolve, reject) => {
    
    try {
        const id=String(req.body.id);
        await db.firestore().collection(collectionName.rtoLocation).doc(id).delete();
        resolve({ success: true, status: status.Ok, msg: 'success'});
      
    } catch (error) {
      reject(error);
    }
});

// blog part
exports.uploadBlogImage = (req,res) =>
  new Promise(async (resolve, reject) => {

    try {

          const randomId= new Date().getTime();
          const image = req.file;
          // console.log(image);

        // Upload image to Firebase Cloud Storage
        const storageRef = bucket.file(randomId+"_"+image.originalname);
        const blobStream = storageRef.createWriteStream();
        blobStream.on('finish', async () => {
          // Generate download URL
          const downloadUrl = await storageRef.getSignedUrl({
            action: 'read',
            expires: '01-01-2100', // Adjust the expiration date as needed
          });
          // console.log(downloadUrl[0]);
          const fileUrl=downloadUrl[0];
          // let images = [];
          //   images.push({
          //     path: fileUrl,
          //     type:"THUMB"
          //   });

          let images = {
              path: fileUrl,
              type:"THUMB"
            };
            resolve({ success: true, status: status.Ok, msg: 'success', data:images});
        });

        blobStream.end(image.buffer);
      
    } catch (error) {
      reject(error);
    }
});

// inspection car
exports.addInspectionVehicle = (req,res) =>
  new Promise(async (resolve, reject) => {
 
    try {

          const randomId= new Date().getTime();
          const insertedId =String(randomId);
          const uploadedAt =randomId;

         
          let insuranceValidity;
          if(req.body.insuranceValidity!=null)
          {
            insuranceValidity= new Date(req.body.insuranceValidity).getTime();
          }
          else
          {
            insuranceValidity=null;
          }

          let roadTaxValidity;
          if(req.body.roadTaxValidUpto!=null)
          {
            roadTaxValidity= new Date(req.body.roadTaxValidUpto).getTime();
          }
          else
          {
            roadTaxValidity=null;
          }

        

          let regDate;
          if(req.body.regDate!=null)
          {
            regDate= new Date(req.body.regDate).getTime();
          }
          else
          {
            regDate=null;
          }

          let fitnessUpto;
          if(req.body.fitnessUpto!=null)
          {
            fitnessUpto= new Date(req.body.fitnessUpto).getTime();
          }
          else
          {
            fitnessUpto=null;
          }

          let rtoNocIssueDate;
          if(req.body.rtoNocIssueDate!=null)
          {
            rtoNocIssueDate= new Date(req.body.rtoNocIssueDate).getTime();
          }
          else
          {
            rtoNocIssueDate=null;
          }
          
        
          
         const basicDocuments = {
            appointmentId: insertedId,
            custContactNo: req.body.custContactNo,
            city: req.body.city,
            regType: req.body.regType,
            regNo: req.body.regNo,
            rcAvailablilty: req.body.rcAvailability,
            rcAvailabilityImages: req.body.rcAvailabilityImages,
            rcCondition: req.body.rcCondition,
            regDate: regDate,
            fittnessUpto: fitnessUpto,
            tobeScraped: req.body.tobeScraped,
            regState: req.body.regState,
            rtoLocation: req.body.rto,
            ownerSerialNo: req.body.ownerSerialNo,
            brand: req.body.brand,
            model: req.body.model,
            variant: req.body.variant,
            engineNo: req.body.engineNo,
            chassisNo: req.body.chassisNo,
            chassisImages:req.body.chassisImages,
            regOwnerName: req.body.regOwnerName,
            mfgMonth: req.body.mfgMonth,
            manufacturingYear: req.body.mfgYear,
            fuelType: req.body.fuelType,
            cc: Number(req.body.cc),
            hypoDetails: req.body.hypoDetails,
            hypoImages: req.body.hypoImages,
            seat: req.body.seat,
            missmatchRC: req.body.missmatchRC,
            roadTaxValidity: roadTaxValidity,
            roadTaxValidityImages: req.body.roadTaxValidityImages,
            roadTax: req.body.roadTax,
            insurance: req.body.insurance,
            insuranceImages: req.body.insuranceImages,
            insuranceValidity: insuranceValidity,
            noClaimBonus: req.body.noClaimBonus,
            missmatchInsurance: req.body.missmatchInsurance,
            duplicateKey: req.body.duplicateKey,
            duplicateKeyImages: req.body.duplicateKeyImages,
            rtoNoc: req.body.rtoNoc,
            rtoNocImages: req.body.rtoNocImages,
            rtoNocIssueDate: rtoNocIssueDate,
            commentsOnBasic: req.body.commentsOnBasic,
            registrationYear: req.body.regYear,
            bodyType: req.body.bodyType,
            transmission: req.body.transmission,
            ownerType: req.body.ownerType,
            color: req.body.color,
            kmsDriven: req.body.kmsDriven,
            carDescription: req.body.description,
            mileage: req.body.mileage,
            maxPower: req.body.maxPower,
            maxTorque: req.body.maxTorque,
            inspectionReport: req.body.inspectionReport,
            inspectionScore: Number(req.body.inspectionScore),
            comfort: req.body.comforts,
            safety: req.body.safety,
            interior: req.body.interior,
            exterior: req.body.exterior,
            entertainment: req.body.entertainment,
            imagePath: req.body.thumbImage[0].path
          };

          
          const exteriorDetails = {
            bonnet: req.body.bonnet,
            upperCrossMember: req.body.upperCrossMember,
            lowerCrossMember: req.body.lowerCrossMember,
            radiatorSupport: req.body.radiatorSupport,
            headlightSupport: req.body.headlightSupport,
            lhsApron: req.body.lhsApron,
            rhsApron: req.body.rhsApron,
            frontWindshield: req.body.frontWindshield,
            firewall: req.body.firewall,
            cowlTop: req.body.cowlTop,
            roof: req.body.roof,
            frontBumper: req.body.frontBumper,
            lhsHeadLamp: req.body.lhsHeadlamp,
            rhsHeadLamp: req.body.rhsHeadlamp,
            lhsFogLamp: req.body.lhsFoglamp,
            rhsFogLamp: req.body.rhsFoglamp,
            lhsFender: req.body.lhsFender,
            lhsFrontAlloy: req.body.lhsFrontAlloy,
            lhsFrontTyre: req.body.lhsFrontTyre,
            lhsOrvm: req.body.lhsOrvm,
            lhsAPillar: req.body.lhsAPillar,
            lhsFrontDoor: req.body.lhsFrontDoor,
            lhsBPillar: req.body.lhsBPillar,
            lhsRearDoor: req.body.lhsRearDoor,
            lhsCPillar: req.body.lhsCPillar,
            lhsRunningBoard: req.body.lhsRunningBoard,
            lhsRearAlloy: req.body.lhsRearAlloy,
            lhsRearTyre: req.body.lhsRearTyre,
            lhsQuarterPanel: req.body.lhsQuarterPanel,
            rearBumper: req.body.rearBumper,
            lhsTailLamp: req.body.lhsTailLamp,
            rhsTailLamp: req.body.rhsTailLamp,
            rearWindshield: req.body.rearWindshield,
            bootDoor: req.body.bootDoor,
            spareTyre: req.body.spareTyre,
            bootFloor: req.body.bootFloor,
            rhsQuarterPanel: req.body.rhsQuarterPanel,
            rhsRearAlloy: req.body.rhsRearAlloy,
            rhsRearTyre: req.body.rhsRearTyre,
            rhsCPillar: req.body.rhsCPillar,
            rhsRearDoor: req.body.rhsRearDoor,
            rhsBPillar: req.body.rhsBPillar,
            rhsFrontDoor: req.body.rhsFrontDoor,
            rhsAPillar: req.body.rhsAPillar,
            rhsRunningBoard: req.body.rhsRunningBoard,
            rhsFrontAlloy: req.body.rhsFrontAlloy,
            rhsFrontTyre: req.body.rhsFrontTyre,
            rhsOrvm: req.body.rhsOrvm,
            rhsFender: req.body.rhsFender,
            commentsOnExterior: req.body.commentsOnExterior,
            exteriorImages: req.body.exteriorImages,
            dentImages: req.body.dentImages,
            tyreImages: req.body.tyreImages,
          };

          const comfortDetails = {
            manualAC: req.body.manualAC,
            climateControl: req.body.climateAC,
            musicSystem: req.body.musicSystem,
            stereo: req.body.stereo,
            inbuiltSpeaker: req.body.inbuiltSpeaker,
            externalSpeaker: req.body.externalSpeaker,
            steeringMountedAudioControl: req.body.stearingMountedAudio,
            sunroof: req.body.sunroof,
            commentsOnComfort: req.body.commentsOnComfort,
            comfortImages: req.body.comfortImages, //type OTHER
          };

         const electicalInteriorDetails = {
            odometerReading: req.body.odometerReading,
            fuelLevel: req.body.fuelLevel,
            electricals: req.body.electrical,
            rearWiper: req.body.rearWiper,
            rearDefogger: req.body.rearDefogger,
            powerWindow: req.body.powerWindow,
            rhsFrontPowerWindow: req.body.rhsFrontPW,
            lhsFrontPowerWindow: req.body.lhsFrontPW,
            lhsRearPowerWindow: req.body.lhsRearPW,
            rhsRearPowerWindow: req.body.rhsRearPW,
            leatherSeats: req.body.leatherSeats,
            fabricSeats: req.body.fabricSeats,
            commentsOnElectrical: req.body.commentsOnElectrical,
            commentsOnInterior: req.body.commentsOnInterior,
            interiorImages: req.body.interiorImages, // type: INT
          };
      
          const engineAndTransmissionDetails = {
            engine: req.body.engine,
            battery: req.body.battery,
            coolant: req.body.coolant,
            engineOilDipstick: req.body.engineOilDipstick,
            engineOil: req.body.engineOil,
            engineMount: req.body.engineMount,
            engineBlow: req.body.engineBlowbyStatus,
            exhaustSmoke: req.body.exhaustSmoke,
            radiator: req.body.radiator,
            engineVideo: req.body.engineVideo,
            exhaustSmokeVideo: req.body.silencerVideo,
            engineImages: req.body.engineImages,
            commentsOnEngine: req.body.commentsOnEngine,
            clutch: req.body.clutch,
            gear: req.body.gear,
            steering: req.body.steering,
            brake: req.body.brake,
            suspension: req.body.suspension,
            commentsOnTransmission: req.body.commentsOnTransmission
          };
        

         
      
        // console.log(exteriorDetails);

        await db.firestore().collection(collectionName.test_auctionVehicle).doc(insertedId).collection(collectionName.inspection).add({
          inspectorId:req.body.inspector,
          vehicleId:insertedId,
          basicDocuments:basicDocuments,
          exteriorDetails:exteriorDetails,
          comfortDetails:comfortDetails,
          electicalInteriorDetails:electicalInteriorDetails,
          engineAndTransmissionDetails:engineAndTransmissionDetails,
        });

          const carDetails ={
            id: insertedId,
            brand: req.body.brand,
            model: req.body.model,
            variant: req.body.variant,
            fuelType: req.body.fuelType,
            bodyType: req.body.bodyType,
            color: req.body.color,
            seat: Number(req.body.seat),
            ownerType: req.body.ownerType,
            city: req.body.city,
            transmission: req.body.transmission,
            kmsDriven: Number(req.body.kmsDriven),
            registrationYear: Number(req.body.regYear),
            imagePath: req.body.thumbImage[0].path,
          };

          const properties ={
            brand: req.body.brand,
            model: req.body.model,
            variant: req.body.variant,
            fuelType: req.body.fuelType,
            bodyType: req.body.bodyType,
            color: req.body.color,
            seat: Number(req.body.seat),
            ownerType: req.body.ownerType,
            carDescription: req.body.description,
            city: req.body.city,
            kmsDriven: Number(req.body.kmsDriven),
            registrationYear: Number(req.body.regYear),
            transmission: req.body.transmission,
            engineCC: Number(req.body.cc),
            maxPower: req.body.maxPower,
            mileage: req.body.mileage,
            maxTorque: req.body.maxTorque,
            noc: req.body.noc,
            manufacturingYear: Number(req.body.mfgYear),
            rtoLocation: req.body.rto,
            inspectionReport: req.body.inspectionReport,
            insuranceValidity: insuranceValidity,
            roadTaxValidity: roadTaxValidity,
            inspectionScore: Number(req.body.inspectionScore),
            comfort: req.body.comforts,
            entertainment: req.body.entertainment,
            exterior: req.body.exterior,
            safety: req.body.safety,
            interior: req.body.interior,
          };


          await db.firestore().collection(collectionName.test_auctionVehicle).doc(insertedId).set({
            id: insertedId,
            carPrice: 0,
            images: req.body.allCarImage,
            videos:req.body.allCarVideo,
            status: "INACTIVE",
            properties: properties,
            uploadedBy: "admin",
            uploadedAt: uploadedAt,
          });

          await db.firestore().collection(collectionName.test_auction).doc(insertedId).set({
        id: insertedId,
        carDetails: carDetails,
        startPrice: 0,
        isSoldOut: false,
        latestBid: null,
        startTime:null,
        endTime:null,
        oneClickBuyPrice:null
          });

      resolve({ success: true, status: status.Ok, msg: 'Data added successfully'});

     
      
    } catch (error) {
      reject(error);
    }
});















  













