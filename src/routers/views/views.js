import { Router } from 'express';
import Product from '../../services/product.service.js';
const product = new Product();

const router = Router();

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
    //render es para que muestre una vista en handlebars
    return res.render("hbs/index.hbs");
});

router.get("/", (req, res, next) => {
    //render es para que muestre una vista del desafio anterior
    return res.render("index");
});

export default router;