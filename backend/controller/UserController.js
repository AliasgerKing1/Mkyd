require("../config/database");
const routes = require("express").Router();
const sha1 = require("sha1")
const User = require("../models/User");
const jwt = require("jsonwebtoken")

routes.post('/', async (req, res) => {
        delete req.body.conf_pass;
    req.body.password = sha1(req.body.password)
    const result = await User.create(req.body);
    res.send(result);
});

routes.post("/loginauth", async (req, res)=> {
    let email = req.body.email;
    let password = sha1(req.body.password);
    try {
        const verify = await User.find({email : email})
        if(verify[0] ? (verify[0].isVerified == true) : "hello") {
        const result = await User.find({email : email})
        if(result.length == 1) {
            if(result[0].password == password) {
                let obj = {id : result[0]._id, email : result[0].email};
                let token = jwt.sign(obj , "Aliasger web");
                res.send({success : true, status : 200, token : token});
            }else {
                res.send({success : false, status : 401, errType : 2});
            }
        }else {
            res.send({success : false, status : 401, errType : 1});
        }
        } else {
            res.send({success : false, status : 401, errType : 3});
        }
    }catch(error) {
        console.log(error)
    }
})

routes.get('/', async (req, res) => {
    // let token = req.headers.header;
const result = await User.find({});
// let obj = jwt.decode(token, "Aliasger web");
// result.push(obj);
res.send(result);
});

routes.get('/:token', async (req, res) => {
    let token = req.params.token;
    let obj = jwt.decode(token, "Aliasger web");
    let result;
    if(obj) {
     result = await User.find({_id : obj.id});
    }
res.send(result); 
});
routes.get('/otpid/:id', async (req, res) => {
    let id = req.params.id;
let result = await User.find({_id : id});
res.send(result); 
});

routes.post("/checkuser", async (req,res) => {
    let email = req.body.email;
    try {
        const result = await User.find({email : email})
        if(result.length == 0) {
            res.send({success : true, status : 200});
        }else {
            res.send({success : false, status : 401});
        }
}catch(error) {
    console.log(error)
}
})
module.exports = routes;