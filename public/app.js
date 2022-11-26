"use strict";
//import express from 'express';
//import mongoose from 'mongoose';
const dbURI = require('../MongooseKey');
const express = require('express');
//import {Server} from 'http';
const app = express();
app.listen(3002);
app.get('/', (req, res) => {
    //res.send('<p> Udało się </p>');
    console.log('dupa');
});
//add mongoose
/*
mongoose.connect(dbURI)
.then((result) => app.listen(3001))
.catch((err) => console.log(err));

app.get('/home', (res : Response, req : Request) => {
//res.send('<p>To musi się udać </p>');
console.log('to jest mój kod');
});
*/
//add dbURI key
//mongoose.connect()
//conect mongoose to server
