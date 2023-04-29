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
    isVerified : Boolean,
    times_otp : {
        type : Number,
        default: 0
    },
   coins : {
        type : Number,
        default: 10000
    },
   league : {
        type : String,
        default: "Bronze"
    },
   game_point : {
        type : Number,
        default: 0
    },
   rank : {
        type : Number,
        default: null
    },
   likes : {
        type : Number,
        default: 0
    },
   comments : {
        type : String,
        default: null
    },
})
module.exports = mongoose.model("user", User);