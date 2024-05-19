const express = require('express');
const cors = require('cors');
const port = 5000;
const mongoose = require('mongoose');
const userRouter  = require('./routes/user_rou.js');
const app = express();
require('dotenv').config();

app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri);
const connection = mongoose.connection;

connection.once('open',()=>{
    console.log("Mongoose Connection Successfully Completed");
})

app.use('/users',userRouter);


app.listen(port,()=>{
    console.log("App is Running Port is :",port);
});