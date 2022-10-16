import { Router } from 'express';
import containerRouter from "./container.router.js";
import productRouter from "./product.router.js";

const router = Router();

router.use("/container", containerRouter);
router.use("/products", productRouter);

export default router;
