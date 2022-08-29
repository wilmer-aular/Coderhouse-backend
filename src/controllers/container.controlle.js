const Container = require('../services/Container.js');
const container = new Container('products.txt');


const productController = {
    getProducts: async (req, res) => {
       return res.json(await container.getAll())
    },
    getProductRandom: async (req, res) => {
       return res.json(await container.getByRandom())
    }
}

module.exports = productController;