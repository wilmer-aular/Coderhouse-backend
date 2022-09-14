let router = require("express-promise-router")();
const Product = require('../../services/product.service.js');
const product = new Product();

router.get("/views/ejs", async (req, res, next) => {
    const products = await product.getAll();

    //render es para que muestre una vista en ejs
    return res.render("ejs/index.ejs", { products });
});
router.get("/views/pug", async (req, res, next) => {
    const products = await product.getAll();

    //render es para que muestre una vista en pug
    return res.render("pug/index.pug", { products });
});
router.get("/views/hbs", async (req, res, next) => {
    const products = await product.getAll();

    //render es para que muestre una vista en handlebars
    return res.render("hbs/index.hbs", { products });
});

router.get("/", (req, res, next) => {
    //render es para que muestre una vista en lugar de un json
    return res.render("index.hbs");
});

module.exports = router;