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

exports.city = (req,res) =>
  new Promise(async (resolve, reject) => {
    try {
        const snapshot = await db.firestore().collection(collectionName.city).get();
        const result = snapshot.docs.map(doc => doc.data());
        resolve({ success: true, status: status.Ok, msg: 'success' ,data : result});
      
    } catch (error) {
      reject(error);
    }
  });
  exports.blog = (req,res) =>
  new Promise(async (resolve, reject) => {
    try {
        const snapshot = await db.firestore().collection(collectionName.blog).get();
        const result = snapshot.docs.map(doc => doc.data());
        resolve({ success: true, status: status.Ok, msg: 'success' ,data : result});
      
    } catch (error) {
      reject(error);
    }
  });
  exports.getBlogWithId = (req,res) =>
  new Promise(async (resolve, reject) => {
    try {
      const insertedId= req.body.id;
        const snapshot = await db.firestore().collection(collectionName.blog).doc(insertedId).get();
        const result = snapshot.data();
        resolve({ success: true, status: status.Ok, msg: 'success' ,data : result});
      
    } catch (error) {
      reject(error);
    }
  });
  
  exports.addBlog = (req,res) =>
  new Promise(async (resolve, reject) => {
    try {
        const randomId= new Date().getTime();
        const insertedId =String(randomId);
        const createdAt=randomId;

        const data={
          id: insertedId,
          title: req.body.title,
          shortDesc: req.body.shortDesc,
          fullDesc: req.body.fullDesc,
          imagePath: req.body.ThumbnailPhotos,
          status: req.body.status,
          metaTitle: req.body.metaTitle,
          metaKeyword: req.body.metaKeyword,
          metaDesc: req.body.metaDesc,
          createdAt: createdAt,
        };

        // console.log(data);
      await db.firestore().collection(collectionName.blog).doc(insertedId).set(data);

      resolve({ success: true, status: status.Ok, msg: 'success'});
      
    } catch (error) {
      reject(error);
    }
  });

  exports.updateBlog = (req,res) =>
  new Promise(async (resolve, reject) => {
    try {

        const insertedId =String(req.body.docId);
        

        const data={
          id: insertedId,
          title: req.body.title,
          shortDesc: req.body.shortDesc,
          fullDesc: req.body.fullDesc,
          imagePath: req.body.ThumbnailPhotos,
          status: req.body.status,
          metaTitle: req.body.metaTitle,
          metaKeyword: req.body.metaKeyword,
          metaDesc: req.body.metaDesc,
        };

        // console.log(data);
      await db.firestore().collection(collectionName.blog).doc(insertedId).update(data);

      resolve({ success: true, status: status.Ok, msg: 'success'});
      
    } catch (error) {
      reject(error);
    }
  });

  
  
  exports.deleteBlog = (req,res) =>
  new Promise(async (resolve, reject) => {
    
    try {
        const id=String(req.body.id);
        await db.firestore().collection(collectionName.blog).doc(id).delete();
        resolve({ success: true, status: status.Ok, msg: 'success'});
      
    } catch (error) {
      reject(error);
    }
});
  



