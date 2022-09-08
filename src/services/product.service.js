const { createId } = require('../util/util.js');

let products = [
    { id: 1, title: "Papa", price: 400, thumbnail: "wwww.papa.com" },
    { id: 2, title: "Pasta", price: 350, thumbnail: "wwww.pasta.com" },
]

const error = { error: 'product not found' }
class Product {

    async getAll() {
        try {
            return products;
        } catch (error) {
            throw { message: '', status: 404, error }
        }
    };

    async getById(id) {
        try {
            const product = products.find(i => i.id == id);
            if (!product) return error;

            return product
        } catch (error) {
            throw { message: '', status: 404, error }
        }
    };

    async create(object) {
        try {
            const id = createId(products);
            products.push({ ...object, id });

            return `<h1>New product creado, ID N° ${id}</h1>`;
        } catch (error) {
            throw { message: '', status: 404, error }
        }
    };

    async update(id, object) {
        try {
            const product = products.find(i => i.id == id);
            if (!product) return error;

            products = products.map(i => {
                if (i.id == id) {
                    i = { ...i, ...object };
                }
                return i
            })
            return { success: true, update: id }
        } catch (error) {
            throw { message: '', status: 404, error }
        }
    };

    async deleteById(id) {
        try {
            const product = products.find(i => i.id == id);
            if (!product) return error;
            products = products.filter(i => i.id != id);

            return { succes: true, delete: id };
        } catch (error) {
            throw { message: '', status: 404, error }
        }
    };

}

module.exports = Product
