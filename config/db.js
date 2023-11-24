const admin = require('firebase-admin');
const serviceAccount = require('../FirebaseKey.json');


const db = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  //   databaseURL: 'https://your-project-id.firebaseio.com'
  });

module.exports = db;