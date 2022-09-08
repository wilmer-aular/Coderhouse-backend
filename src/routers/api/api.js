let router = require("express-promise-router")();
const containerRouter = require("./container.router");
const productRouter = require("./product.router");


router.use("/container", containerRouter);
router.use("/products", productRouter);

module.exports = router;
