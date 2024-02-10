require('dotenv').config();
const mongoose = require('mongoose');

async function DBConnectionHandler() {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("DB Connected Successfully!");
    } 
    catch (error) {
        console.log(`There is an error: ${error.message}`)
        
    }
}

module.exports = DBConnectionHandler;