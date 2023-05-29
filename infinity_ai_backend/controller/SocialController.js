require("../config/database");
const routes = require("express").Router();
const User = require("../models/User");
routes.put("/id", async (req,res)=> {
    let id = req.params.id;
try {
let result = await User.updateOne({_id : id}, )
} catch (error) {
res.send({status : 400, success : false, err : error})
}
})
module.exports = routes;