require("../config/database");
const routes = require("express").Router();
const sha1 = require("sha1")
const User = require("../models/User");
const jwt = require("jsonwebtoken")
const randstr = require("random-string");
const path = require("path");

routes.post('/', async (req, res) => {
        delete req.body.conf_pass;
    req.body.password = sha1(req.body.password)
    let email = req.body.email;
    const check = await User.find({email : email})
    if(check.length == 1) {
      res.send({status : 409, success : false})
    } else {
        let split_char = req.body.name.split("");
        let Char_0 = split_char[0]
        switch(Char_0) {
            case 'a': 
            req.body.profile_photo = "http://localhost:4000/name_logo/a.jpg"
                break;
            case 'b':
                req.body.profile_photo = "http://localhost:4000/name_logo/b.jpg"
                break;
            case 'c': 
            req.body.profile_photo = "http://localhost:4000/name_logo/c.jpg"
                break;
            case 'd':
                req.body.profile_photo = "http://localhost:4000/name_logo/d.jpg"
                break;
            case 'e': 
            req.body.profile_photo = "http://localhost:4000/name_logo/e.jpg"
                break;
            case 'f':
                req.body.profile_photo = "http://localhost:4000/name_logo/f.jpg"
                break;
            case 'g': 
            req.body.profile_photo = "http://localhost:4000/name_logo/g.jpg"
                break;
            case 'h':
                req.body.profile_photo = "http://localhost:4000/name_logo/h.jpg"
                break;
            case 'i': 
            req.body.profile_photo = "http://localhost:4000/name_logo/i.jpg"
                break;
            case 'j':
                req.body.profile_photo = "http://localhost:4000/name_logo/j.jpg"
                break;
            case 'k': 
            req.body.profile_photo = "http://localhost:4000/name_logo/k.jpg"
                break;
            case 'l':
                req.body.profile_photo = "http://localhost:4000/name_logo/l.jpg"
                break;
            case 'm': 
            req.body.profile_photo = "http://localhost:4000/name_logo/m.jpg"
                break;
            case 'n':
                req.body.profile_photo = "http://localhost:4000/name_logo/n.jpg"
                break;
            case 'o': 
            req.body.profile_photo = "http://localhost:4000/name_logo/o.jpg"
                break;
            case 'p':
                req.body.profile_photo = "http://localhost:4000/name_logo/p.jpg"
                break;
            case 'q': 
            req.body.profile_photo = "http://localhost:4000/name_logo/q.jpg"
                break;
            case 'r':
                req.body.profile_photo = "http://localhost:4000/name_logo/r.jpg"
                break;
            case 's': 
            req.body.profile_photo = "http://localhost:4000/name_logo/s.jpg"
                break;
            case 't':
                req.body.profile_photo = "http://localhost:4000/name_logo/t.jpg"
                break;
            case 'u': 
            req.body.profile_photo = "http://localhost:4000/name_logo/u.jpg"
                break;
            case 'v':
                req.body.profile_photo = "http://localhost:4000/name_logo/v.jpg"
                break;
            case 'w': 
            req.body.profile_photo = "http://localhost:4000/name_logo/w.jpg"
                break;
            case 'x':
                req.body.profile_photo = "http://localhost:4000/name_logo/x.jpg"
                break;
            case 'y': 
            req.body.profile_photo = "http://localhost:4000/name_logo/y.jpg"
                break;
            case 'z':
                req.body.profile_photo = "http://localhost:4000/name_logo/z.jpg"
                break;
            case 'A': 
            req.body.profile_photo = "http://localhost:4000/name_logo/a.jpg"
                break;
            case 'B':
                req.body.profile_photo = "http://localhost:4000/name_logo/b.jpg"
                break;
            case 'C': 
            req.body.profile_photo = "http://localhost:4000/name_logo/c.jpg"
                break;
            case 'D':
                req.body.profile_photo = "http://localhost:4000/name_logo/d.jpg"
                break;
            case 'E': 
            req.body.profile_photo = "http://localhost:4000/name_logo/e.jpg"
                break;
            case 'F':
                req.body.profile_photo = "http://localhost:4000/name_logo/f.jpg"
                break;
            case 'G': 
            req.body.profile_photo = "http://localhost:4000/name_logo/g.jpg"
                break;
            case 'H':
                req.body.profile_photo = "http://localhost:4000/name_logo/h.jpg"
                break;
            case 'I': 
            req.body.profile_photo = "http://localhost:4000/name_logo/i.jpg"
                break;
            case 'J':
                req.body.profile_photo = "http://localhost:4000/name_logo/j.jpg"
                break;
            case 'K': 
            req.body.profile_photo = "http://localhost:4000/name_logo/k.jpg"
                break;
            case 'L':
                req.body.profile_photo = "http://localhost:4000/name_logo/l.jpg"
                break;
            case 'M': 
            req.body.profile_photo = "http://localhost:4000/name_logo/m.jpg"
                break;
            case 'N':
                req.body.profile_photo = "http://localhost:4000/name_logo/n.jpg"
                break;
            case 'O': 
            req.body.profile_photo = "http://localhost:4000/name_logo/o.jpg"
                break;
            case 'P':
                req.body.profile_photo = "http://localhost:4000/name_logo/p.jpg"
                break;
            case 'Q': 
            req.body.profile_photo = "http://localhost:4000/name_logo/q.jpg"
                break;
            case 'R':
                req.body.profile_photo = "http://localhost:4000/name_logo/r.jpg"
                break;
            case 'S': 
            req.body.profile_photo = "http://localhost:4000/name_logo/s.jpg"
                break;
            case 'T':
                req.body.profile_photo = "http://localhost:4000/name_logo/t.jpg"
                break;
            case 'U': 
            req.body.profile_photo = "http://localhost:4000/name_logo/u.jpg"
                break;
            case 'V':
                req.body.profile_photo = "http://localhost:4000/name_logo/v.jpg"
                break;
            case 'W': 
            req.body.profile_photo = "http://localhost:4000/name_logo/w.jpg"
                break;
            case 'X':
                req.body.profile_photo = "http://localhost:4000/name_logo/x.jpg"
                break;
            case 'Y': 
            req.body.profile_photo = "http://localhost:4000/name_logo/y.jpg"
                break;
            case 'Z':
                req.body.profile_photo = "http://localhost:4000/name_logo/z.jpg"
                break;
        }
        const result = await User.create(req.body);
      res.send(result);
    }
});

routes.post("/loginauth", async (req, res)=> {
    let email = req.body.email;
    let password = sha1(req.body.password);
    try {
        const verify = await User.find({email : email})
        if(verify[0].is_verified == true) {
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
        } else {
            const result2 = await User.find({email : email})
            res.send({success : false, status : 401, errType : 3, value : result2[0].email});
        }
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