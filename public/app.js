"use strict";
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const employeeRoutes = require('./routes/emoloyeeRoutes');
const app = express();
const source = process.env.DATABASE_URL;
//text 
app.get('/', (req, res) => {
    //res.send('<p> Udało się </p>');
    console.log('dupa');
});
//add mongoose
mongoose.connect(source, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => app.listen(3001))
    .catch((err) => console.log(err));
//text mongoose
app.get('/home', (res, req) => {
    console.log("jesteśmy w domu");
});
