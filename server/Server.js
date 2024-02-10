const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const app = require('./App');

//db connection
const DBConnectionHandler = require('./connects/DBconnect');
DBConnectionHandler();

const port = process.env.port || 5001;

//server running message
app.get('/',(req,res) => {
  res.send("JOB Server is Running!")
})

//404 Error
app.use('*',(req,res) => {
  res.status(404).json({message:"Not Found"});
})

//port listen
app.listen(port, () => {
  console.log(`Server is Running on port http://localhost:${port}`)
})