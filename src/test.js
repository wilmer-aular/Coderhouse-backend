import Container from './Container.js'

const newObject = {
    id : 1,
    title: 'Arroz',
    price: 500,
    thumbnail: 'wwww.arroz.com',

}

const handlerProducts = async () => {
    const container = new Container('products.txt');
    await container.createFile()
    const id = await container.save(newObject);

    const product = await container.getById(id);
    
    await container.deleteById(product.id);
    const list = await container.getAll();
    console.log(list);
    //await container.deleteAll();
}

handlerProducts();
