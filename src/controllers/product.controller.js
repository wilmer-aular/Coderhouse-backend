const Product = require('../services/product.service.js');
const product = new Product();

const productController = {
    getAll: async (req, res) => {
        return res.json(await product.getAll())
    },
    getById: async (req, res) => {
        return res.json(await product.getById(req.params.id))
    },
    create: async (req, res) => {
        const body = req.body;
        return res.json(await product.create(body))
    },
    update: async (req, res) => {
        const body = req.body;
        return res.json(await product.update(req.params.id, body))
    },
    deleteById: async (req, res) => {
        return res.json(await product.deleteById(req.params.id))
    },
}

module.exports = productController;