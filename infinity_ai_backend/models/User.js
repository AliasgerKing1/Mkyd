require("../config/database")
const mongoose = require("mongoose");

const User = mongoose.Schema({
    name : String,
    email : String,
    password : String,
    website : Array,
    profile_photo : String,
    social : Array
})
module.exports = mongoose.model("user", User);