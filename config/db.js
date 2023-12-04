const admin = require('firebase-admin');
const serviceAccount = require('../FirebaseKey.json');


const db = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: 'flikcar-bac6e.appspot.com',
  //   databaseURL: 'https://your-project-id.firebaseio.com'
  });

module.exports = db;