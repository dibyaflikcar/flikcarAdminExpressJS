const express = require('express');
require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require("multer");
const apiRouter = require('./src/routes/index');

const app = express();
const PORT = process.env.PORT;
app.use(cors());

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));


app.use('/api/', apiRouter);

app.get('/', async (req, res) => {
    res.status(500).send('Hello');
  });

app.get('/getdata', async (req, res) => {
  try {
    const snapshot = await admin.firestore().collection('cities').get();
    const data = snapshot.docs.map(doc => doc.data());
    res.json(data);
  } catch (error) {
    console.error('Error getting data from Firestore:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/storedata', async (req, res) => {
    try {
    //   const data = req.body;
    const data={
    "name": "Prasenjie Chaterjee",
    "age": 30,
    "email": "prasenjit@gmail.com"
    };
  
      // Add the data to a Firestore collection
      const docRef = await admin.firestore().collection('test').add(data);
  
      console.log('Document written with ID:', docRef.id);
  
      res.status(201).json({ message: 'Data stored successfully' });
    } catch (error) {
      console.error('Error storing data in Firestore:', error);
      res.status(500).send('Internal Server Error');
    }
  });

  app.put('/updatedata/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const updatedData = req.body;
  
      // Update the document in the Firestore collection
      const docRef = admin.firestore().collection('your-collection').doc(id);
      await docRef.update(updatedData);
  
      console.log('Document updated successfully');
  
      res.status(200).json({ message: 'Data updated successfully' });
    } catch (error) {
      console.error('Error updating data in Firestore:', error);
      res.status(500).send('Internal Server Error');
    }
  });

// Add more routes as needed

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
