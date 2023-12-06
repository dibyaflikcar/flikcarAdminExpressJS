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

  exports.carfeature = (req,res) =>
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




exports.addAuctionVehicle = (req,res) =>
  new Promise(async (resolve, reject) => {
 
    try {

          const randomId= new Date().getTime();
          const insertedId =String(randomId);
          const uploadedAt =randomId;

          const auctionStartTime=new Date(req.body.auctionStartTime).getTime();
          const auctionEndTime=new Date(req.body.auctionEndTime).getTime();

          
          
          
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
            city: "Kolkata",
            transmission: req.body.transmission,
            kmsDriven: Number(req.body.kmsDriven),
            registrationYear: Number(req.body.regYear),
            imagePath: req.body.thumbImage[0].path,
          };

          // console.log(carDetails);
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
            city: "Kolkata",
            kmsDriven: Number(req.body.kmsDriven),
            registrationYear: Number(req.body.regYear),
            transmission: req.body.transmission,
            engineCC: Number(req.body.engine),
            maxPower: Number(req.body.maxPower),
            mileage: Number(req.body.mileage),
            maxTorque: Number(req.body.maxTorque),
            noc: req.body.noc,
            manufacturingYear: Number(req.body.mfgYear),
            rtoLocation: req.body.rto,
            inspectionReport: req.body.inspectionReport,
            insuranceValidity: new Date(req.body.insuranceValidity).getTime(),
            roadTaxValidity: new Date(req.body.roadTaxValidity).getTime(),
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
            status: "INACTIVE",
            properties: properties,
            uploadedBy: "admin",
            uploadedAt: uploadedAt,
          });

          await db.firestore().collection(collectionName.auction).doc(insertedId).set({
        id: insertedId,
        carDetails: carDetails,
        startPrice: Number(req.body.carPrice),
        isSoldOut: false,
        latestBid: null,
        startTime:auctionStartTime,
        endTime:auctionEndTime
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










