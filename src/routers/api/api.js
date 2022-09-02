let router = require("express-promise-router")();
const containerRouter = require("./container.router");


router.use("/container", containerRouter);

module.exports = router;
