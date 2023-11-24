/* eslint-disable linebreak-style */
const express = require('express');

const app = express();
const userAuth = require('./api/userAuth.router');
const vehicle = require('./api/vehicle.router');
const global = require('./api/global.router');
app.use('/admin', userAuth);
app.use('/vehicle', vehicle);
app.use('/global', global);

module.exports = app;
