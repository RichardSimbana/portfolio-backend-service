require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const profileRouter = require('./api/routes/ProfileRouter');
const AboutRouter = require('./api/routes/AboutRouter');
const ContactRouter = require('./api/routes/ContactRouter');
const HomeRouter = require('./api/routes/HomeRouter');
const PortfolioRouter = require('./api/routes/PortfolioRouter');

const app = express();

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true
});

app.use(profileRouter);
app.use(AboutRouter);
app.use(ContactRouter);
app.use(HomeRouter);
app.use(PortfolioRouter);

module.exports = app;
