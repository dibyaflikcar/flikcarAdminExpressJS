/* eslint-disable linebreak-style */
/* eslint-disable no-async-promise-executor */
/* eslint-disable no-unused-vars */
const axios = require('axios');
const status = require('../utils/status.utils');
const jwtService = require('../service/jwt.service');
const jwt = require('jsonwebtoken');
const multer = require("multer");

const db=require('../config/db');
const collectionName=require('../models');

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





