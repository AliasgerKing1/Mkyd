require("../config/database");
const routes = require("express").Router();
const User = require("../models/User");
const randstr = require("random-string");
const path = require("path");

routes.put("/", (req, res) => {
    // let id = req.params.id;
    // console.log(req.body)
    // if(req.body.length > 0) {
    //     let body = JSON.parse(req.body.data);
    // }
    try {
        // let image = req.files.photo;

    // randorm_string = randstr({length : 50 });
    // let original_name = image.name;
    // let arr = original_name.split(".");
    // let ext = arr[arr.length-1];
    // let new_name = randorm_string + "." + ext;
    // body.image = new_name;
    // image.mv(path.resolve() + "/assets/website_logo/" + new_name, (error)=> {
    //     Photo.create(body, (error)=> {
    //         let obj = {image : "http://localhost:4000/admin_image/" + new_name, username : body.username};
    //      res.send(obj);
    //  })
    // })
    } catch (error) {
        res.send({ status: 500, err: error, success: false })
    }

})
module.exports = routes;