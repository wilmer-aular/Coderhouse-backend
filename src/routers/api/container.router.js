let router = require("express-promise-router")();
const containerController = require('../../controllers/container.controller')

router.get("/", (req, res) => {
    return res.json(
        [{ metod: 'get', uri: '/products' },
        { metod: 'get', uri: '/productRandom' }], 200
    )
});
router.get("/products", containerController.getProducts);
router.get("/product/:id", containerController.getProductRandom);

module.exports = router;
