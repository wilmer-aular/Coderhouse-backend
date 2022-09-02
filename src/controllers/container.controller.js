const Container = require('../services/container.service.js');
const container = new Container('products.txt');

const containerController = {
   getProducts: async (req, res) => {
      return res.json(await container.getAll())
   },
   getProductRandom: async (req, res) => {
      return res.json(await container.getByRandom())
   }
}

module.exports = containerController;