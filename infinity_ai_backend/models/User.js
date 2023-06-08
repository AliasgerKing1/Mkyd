require("../config/database")
const mongoose = require("mongoose");

const User = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    otp: {
        type: String,
        default: null
    },
    is_verified: {
        type: Boolean,
        default: false
    },
    website: Array,
    website_react: Array,
    profile_photo: String,
    social: Array
})
module.exports = mongoose.model("user", User);