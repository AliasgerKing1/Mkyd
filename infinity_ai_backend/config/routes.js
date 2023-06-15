const routes = require("express").Router();

routes.use("/api/user", require("../controller/UserController"));
routes.use("/api/design", require("../controller/DesignController"));
routes.use("/api/social", require("../controller/SocialController"));
routes.use("/api/otp", require("../controller/OtpController"));
// routes.use("/api/content", require("../controller/ContentWritingController"));
module.exports = routes;