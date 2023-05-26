const routes = require("express").Router();

routes.use("/api/user", require("../controller/UserController"));
routes.use("/api/design", require("../controller/DesignController"));
module.exports = routes;