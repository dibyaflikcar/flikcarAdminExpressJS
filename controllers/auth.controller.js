/* eslint-disable linebreak-style */
/* eslint-disable no-async-promise-executor */
/* eslint-disable no-unused-vars */
// const db = require('../../models');
const axios = require('axios');
const status = require('../utils/status.utils');
const jwtService = require('../service/jwt.service');
const jwt = require('jsonwebtoken');
const multer = require("multer");
// const admin = require('firebase-admin');
// const serviceAccount = require('../FirebaseKey.json');

const db=require('../config/db');
const collectionName=require('../models');
// admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//   //   databaseURL: 'https://your-project-id.firebaseio.com'
//   });


exports.test = (req,res) =>
  new Promise(async (resolve, reject) => {
    try {
        const snapshot = await db.firestore().collection(collectionName.test).get();
        const result = snapshot.docs.map(doc => doc.data());
        resolve({ success: true, status: status.Ok, msg: 'success' ,data : result});
      
    } catch (error) {
      reject(error);
    }
  });

exports.addUser = (req) =>
  new Promise(async (resolve, reject) => {
    try {
        db.user
        .findOne({
          where: {
            email: {
              [Op.eq]: req.email
            }
          }
        })
        .then(async (user) => {
          if (user) {
            resolve({ success: false, status: status.Ok, msg: 'User already exist!' });
          } else {
            db.user
                .create({
                    username: req.username,
                    email: req.email,
                    password: req.password,
                    created_at: new Date().getTime(),
                    updated_at: new Date().getTime()
                })
                .then(async (result) => {
                    resolve({ success: true, status: status.Ok, msg: `Create successfully!` });
                })
                .catch((e) => {
                    resolve({
                    success: false,
                    extra: e,
                    status: status.BadRequest,
                    errors: [{ msg: 'Something went wrong. Please try again .' }]
                    });
                });
          }
        })
        .catch((e) => {
          resolve({
            success: false,
            extra: e,
            status: status.BadRequest,
            errors: [{ msg: 'Something went wrong. Please try again .' }]
          });
        });
        
      
    } catch (error) {
      reject(error);
    }
  });

exports.loginUser = (req) =>
  new Promise(async (resolve, reject) => {
    try {
        db.user
        .findOne({
          where: {
            username: {
              [Op.eq]: req.username
            },
            password: {
                [Op.eq]: req.password
              }
          }
        })
        .then(async (user) => {
          if (user) {
                await jwtService
                      .generateAccessToken({
                        username: req.username,
                        id: user.id
                        // type: 'customer',
                        // name: `${result.fname} ${result.lname}`
                      })
                      .then((token) => {
                        if (token.status === 200) {
                          resolve({
                            success: true,
                            status: status.Ok,
                            data: { access_token: token.token, userId: user.id }
                          });
                        } else {
                          resolve(token);
                        }
                      })
                      .catch((e) => {
                        resolve({
                          success: false,
                          extra: e,
                          status: status.BadRequest,
                          errors: [{ msg: 'Something went wrong. Please try again .' }]
                        });
                      });
            resolve({ success: true, status: status.Ok, msg: 'Login Success!' });
          } else {
            resolve({ success: false, status: status.BadRequest, msg: 'Invalid Credentials!' });
          }
        })
        .catch((e) => {
          resolve({
            success: false,
            extra: e,
            status: status.BadRequest,
            errors: [{ msg: 'Something went wrong. Please try again .' }]
          });
        });
        
      
    } catch (error) {
      reject(error);
    }
  });

exports.getUser = (req,res) =>
  new Promise(async (resolve, reject) => {
    try {
        const userId= req.auth.id;
        // console.log(req.auth.id);
        db.user
        .findOne({
          where: {
            id: {
              [Op.eq]: userId
            }
          }
        })
        .then(async (user) => {
          if (user) {
                const result = user.dataValues;
                // console.log(result);
            resolve({ success: true, status: status.Ok, msg: 'success' ,data : result});
          } else {
            resolve({ success: false, status: status.BadRequest, msg: 'No data found!' });
          }
        })
        .catch((e) => {
          resolve({
            success: false,
            extra: e,
            status: status.BadRequest,
            errors: [{ msg: 'Something went wrong. Please try again .' }]
          });
        });
        // resolve({ success: true, status: status.Ok, msg: 'Success' });
      
    } catch (error) {
      reject(error);
    }
  });

exports.uploadImage = (req,res) =>
  new Promise(async (resolve, reject) => {
    try {
        
      const storage = multer.diskStorage({
        destination: function (req, file, cb) {
          return cb(null, '/uploads')
        },
        filename: function (req, file, cb) {
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
         return  cb(null, file.fieldname + '-' + uniqueSuffix)
        }
      })
      
      const upload = multer({ storage: storage })
      resolve({ success: true, status: status.Ok, msg: 'success'});
      
    } catch (error) {
      reject(error);
    }
  });

