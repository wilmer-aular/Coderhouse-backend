import Product from '../services/product.service.js';
const product = new Product();

const productController = {
    getAll: async (req, res) => {
        return res.send(await product.getAll())
    },
    getById: async (req, res) => {
        return res.send(await product.getById(req.params.id))
    },
    create: async (req, res) => {
        const body = req.body;
        if (body.page) {
            await product.create(body);
            res.status(301).redirect(`/views/${body.page}`);
            return;
        }
        return res.send(await product.create(body))
    },
    update: async (req, res) => {
        const body = req.body;
        return res.send(await product.update(req.params.id, body))
    },
    deleteById: async (req, res) => {
        return res.send(await product.deleteById(req.params.id))
    },
}

export default productController;