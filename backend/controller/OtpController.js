let routes = require("express").Router();
let User = require("../models/User")
routes.get("/:id", async (req,res)=> {
    let id = req.params.id;
    let random = Math.floor(Math.random() * 1000000);
    await User.updateMany({_id : id}, {otp : random});
    res.send({status : 200, success : true})
})

routes.post("/checkotp", async (req,res)=> {
    let otp = req.body.otp;
   try {
    let result = await User.find({otp : otp})
if(result.length == 1) {
    res.send({status : 200, success : true})
}else {
    res.send({status : 401, success : false})
}
   }catch (error) {
    console.log(error)
}
})

routes.get("/otpverified/:id", async (req,res)=> {
    let id = req.params.id;
try {
    let result = await User.updateMany({_id : id}, {isVerified : true})
    console.log(result)
res.send({status : 200, success : true})
}catch (error) {
    console.log(error)
}
})


module.exports = routes;