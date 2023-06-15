require("../config/database");
const routes = require("express").Router();
const User = require("../models/User");
const randstr = require("random-string");
const path = require("path");

routes.put("/:id", (req, res) => {
    let id = req.params.id;
    console.log(id)
})
module.exports = routes;