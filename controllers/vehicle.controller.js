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

exports.makeAndModel = (req,res) =>
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


exports.addAuctionVehicle = (req,res) =>
  new Promise(async (resolve, reject) => {
    // const email=req.email;
    // const password=req.password;
 
    try {

      // const data = JSON.parse(req.body.data);
      // const images = req.files;
      // const data = req.body;
      // const frontImage = req.files['frontImage'][0].buffer.toString('base64');
      // const backImage = req.files['backImage'][0].buffer.toString('base64');
      // const sideImage = req.files['sideImage'][0].buffer.toString('base64');

      // console.log(req.brand);
      // resolve({ success: true, status: status.Ok, msg: 'Data added successfully'});
      
      const properties ={
        brand: req.body.brand,
        model: req.body.model,
        variant: req.body.variant,
        fuelType: req.body.fuelType,
        bodyType: req.body.bodyType,
        color: req.body.color,
        seat: req.body.seat,
        ownerType: req.body.ownerType,
        city: "Kolkata",
        kmsDriven: Number(req.body.kmsDriven),
        registerationYear: Number(req.body.regYear),
        transmission: req.body.transmission,
        engineCC: Number(req.body.engine),
        maxPower: Number(req.body.maxPower),
        mileage: Number(req.body.mileage),
        maxTorque: Number(req.body.maxTorque),
        noc: req.body.noc,
        manufacturingYear: Number(req.body.mfgYear),
        rtoLocation: req.body.rto,
        inspectionReport: req.body.inspectionReport,
        insuranceValidity: req.body.insuranceValidity,
        roadTaxValidity: req.body.roadTaxValidity,
        inspectionScore: Number(req.body.inspectionScore),
        comfort: req.body.comforts.split(','),
        entertainment: req.body.entertainment.split(','),
        exterior: req.body.exterior.split(','),
        safety: req.body.safety.split(','),
        interior: req.body.interior.split(','),
      };

      const randomId= new Date().getTime();

      const insertedId =randomId;
      const uploadedAt =randomId;

      // console.log(uploadedAt);
      // resolve({ success: true, status: status.Ok, msg: testId});

      await db.firestore().collection(collectionName.test).add({
        id: insertedId,
        carPrice: Number(req.body.carPrice),
        status: "INACTIVE",
        properties: properties,
        uploadedBy: "admin",
        uploadedAt: uploadedAt,
        // frontImage: frontImage,
        // backImage: backImage,
        // sideImage: sideImage,
      });

      
      const carDetails ={
        brand: req.body.brand,
        model: req.body.model,
        variant: req.body.variant,
        fuelType: req.body.fuelType,
        bodyType: req.body.bodyType,
        color: req.body.color,
        seat: req.body.seat,
        ownerType: req.body.ownerType,
        city: "Kolkata",
        transmission: req.body.transmission,
        kmsDriven: req.body.kmsDriven,
        registerationYear: req.body.regYear,
        // imagePath: imagePath,
      };

      // await db.firestore().collection(collectionName.auction).add({
      //   id: insertedId,
      //   carDetails: carDetails,
      //   startPrice: req.startPrice,
      //   isSoldOut: false,
      //   latestBid: null,
      // });

      resolve({ success: true, status: status.Ok, msg: 'Data added successfully'});

        // const snapshot = await db.firestore().collection(collectionName.AuctionVehicle).get();
        // const result = snapshot.docs.map(doc => doc.data());
        // resolve({ success: true, status: status.Ok, msg: 'success' ,data : result});
      
    } catch (error) {
      reject(error);
    }
});








