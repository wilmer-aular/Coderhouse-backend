let router = require("express-promise-router")();
const productController = require('../../controllers/product.controller')


router.get("/", productController.getAll);
router.get("/:id", productController.getById);
router.post("/", productController.create);
router.put("/:id", productController.update);
router.delete("/:id", productController.deleteById);


module.exports = router;