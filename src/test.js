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
    console.info({createList})

    const id = await container.save(newObject);
    console.info({id})

    const product = await container.getById(id);
    console.info({product})

    await container.deleteById(product.id);
    console.info("product removed successfully")

    const list = await container.getAll();
    console.info({list: list.length})
    
    await container.deleteAll();
    console.info("All records were deleted successfully")
}

handlerProducts();
