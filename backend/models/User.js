const mongoose = require("mongoose");

const User = mongoose.Schema({
    name : String,
    email : String,
    password : String,
    status : String,
    otp : {
        type : String,
        default: null
    },
    isVerified : Boolean
})
module.exports = mongoose.model("user", User);