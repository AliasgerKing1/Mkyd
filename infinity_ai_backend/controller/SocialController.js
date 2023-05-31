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

routes.get('/', async (req, res) => {
    // let token = req.headers.header;
    let limit = req.query.limit;
    let skip = req.query.page;
let result = await User.find({}).skip(skip).limit(limit);
// let obj = jwt.decode(token, "Aliasger web");
// result.push(obj);
res.send(result);
});
routes.get('/first', async (req,res)=> {
    let result =await User.find({}).limit(2);
    res.send(result);
})
module.exports = routes;