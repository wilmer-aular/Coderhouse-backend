import Container from './Container.js'
import { listProducts } from './util.js';

const newObject = {
    title: 'Tomates',
    price: 100,
    thumbnail: 'wwww.tomates.com',

}

const handlerProducts = async () => {
    const container = new Container('products.txt');
    await container.createFile();
    const createList =await container.createList(listProducts);
    console.info({method_createList: createList})

    const id = await container.save(newObject);
    console.info({method_save: id})

    const product = await container.getById(id);
    console.info({method_getById: product})

    await container.deleteById(product.id);
    console.info({method_deleteById: 'product removed successfully'})

    const list = await container.getAll();
    console.info({method_getAll: list})
    
    await container.deleteAll();
    console.info({method_deleteAll:"All records were deleted successfully"})
}

handlerProducts();
