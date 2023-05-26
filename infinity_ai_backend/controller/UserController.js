require("../config/database");
const routes = require("express").Router();
const sha1 = require("sha1")
const User = require("../models/User");
const jwt = require("jsonwebtoken")

routes.post('/', async (req, res) => {
        delete req.body.conf_pass;
    req.body.password = sha1(req.body.password)
    let email = req.body.email;
    const check = await User.find({email : email})
    if(check.length == 1) {
      res.send({status : 409, success : false})
    } else {
      const result = await User.create(req.body);
      res.send(result);
    }
});

routes.post("/loginauth", async (req, res)=> {
    let email = req.body.email;
    let password = sha1(req.body.password);
    try {
        const verify = await User.find({email : email})
        // if(verify[0] ? (verify[0].isVerified == true) : "hello") {
        const result = await User.find({email : email})
        if(result.length == 1) {
            if(result[0].password == password) {
                let obj = {_id : result[0]._id, email : result[0].email};
                let token = jwt.sign(obj , "Aliasger web");
                res.send({success : true, status : 200, token : token});
            }else {
                res.send({success : false, status : 401, errType : 2});
            }
        }else {
            res.send({success : false, status : 401, errType : 1});
        }
        // } else {
        //     res.send({success : false, status : 401, errType : 3});
        // }
    }catch(error) {
        console.log(error)
    }
})
routes.get("/signin",async (req, res) => {
    if(req.headers.token) {
        let token = req.headers.token;
        let obj = jwt.decode(token, "Aliasger web");
        try {
            let result = await User.find({_id : obj._id})
            res.send(result)
        }catch (error) {
            res.send({success : false, status : 401, err : error});
        }
    
}});

module.exports = routes;