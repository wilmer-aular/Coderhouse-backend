let router = require("express-promise-router")();
const productController = require('../controllers/container.controlle')

router.get("/", (req, res) => {
   return res.json(
     [   {metod : 'get', uri: '/products'},
        {metod : 'get', uri: '/productRandom'}], 200
    )
});
router.get("/products", productController.getProducts);
router.get("/productRandom", productController.getProductRandom);

module.exports =  router;
