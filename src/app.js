require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const profileRouter = require('./api/routes/ProfileRouter');

const app = express();

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true
});

app.use(profileRouter);

module.exports = app;
