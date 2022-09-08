const { createId } = require('../util/util.js');

let products = [
    { id: 1, title: "Papa", price: 400, thumbnail: "wwww.papa.com" },
    { id: 2, title: "Pasta", price: 350, thumbnail: "wwww.pasta.com" },
]

const error = { error: 'product not found' }
class Product {

    async getAll() {
        return products;
    };

    async getById(id) {

        const product = products.find(i => i.id == id);
        if (!product) return error;

        return product
    };

    async create(object) {

        const id = createId(products);
        products.push({ ...object, id });

        return `<h1>New product creado, ID N° ${id}</h1>`;
    };

    async update(id, object) {

        const product = products.find(i => i.id == id);
        if (!product) return error;

        products = products.map(i => {
            if (i.id == id) {
                i = { ...i, ...object };
            }
            return i
        })
        return { success: true, update: id }
    };

    async deleteById(id) {

        const product = products.find(i => i.id == id);
        if (!product) return error;

        products = products.filter(i => i.id != id);

        return { succes: true, delete: id };
    };

}

module.exports = Product
