const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
        },
        email: {
            type: String,
        },
        password: {
            type: String,
        },
        location: {
            type: String
        },
        gender: {
            type: String,
        },
        role: {
            type: String,
            enum:["admin","recruiter","user"],
            default:"user",
        },
        resume: {
            type: String,
        },

    },
    {
        timestamps:true
    }
)

const usermodel = mongoose.model("User",UserSchema);
module.exports = usermodel;