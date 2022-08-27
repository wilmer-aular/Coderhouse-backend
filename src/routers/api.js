let router = require("express-promise-router")();
const productController = require('../controllers/container.controlle')

router.get("/products", productController.getProducts);
router.get("/productRandom", productController.getProductRandom);

module.exports =  router;
