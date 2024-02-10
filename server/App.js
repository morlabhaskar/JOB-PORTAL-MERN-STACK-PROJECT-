const express = require('express');
const app = express();
const cors = require('cors');

//Middlewares
app.use(express.json());
app.use(
    cors({
        origin:["http://localhost:5000"],
        methods:["GET,POST,DELETE,PUT,PATCH"]
    })
)

module.exports = app;