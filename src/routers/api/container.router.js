import { Router } from 'express';
import containerController from '../../controllers/container.controller.js';

const router = Router();

router.get("/", (req, res) => {
    return res.json(
        [{ metod: 'get', uri: '/products' },
        { metod: 'get', uri: '/productRandom' }], 200
    )
});
router.get("/products", containerController.getProducts);
router.get("/product/:id", containerController.getProductRandom);

export default router;
