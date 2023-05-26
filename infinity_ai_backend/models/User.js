require("../config/database")
const mongoose = require("mongoose");

const User = mongoose.Schema({
    email : String,
    password : String,
    website : Array
})
module.exports = mongoose.model("user", User);