import fs from 'fs';
import path from 'path';


interface IProduct {
    id: number;
    title? : string;
    price?: number;
    thumbnail?: string;
}

class Container<IProduct>  {
    filName : string;

    constructor (fileName: string) {
        this.filName = fileName;
    }

    public async save (object : IProduct): Promise<void> {
       await fs.writeFile(path.join(__dirname, `/${this.filName}`), JSON.stringify(object), null);
    }
    // public async getById(id: number) : Promise<IProduct> {
    //     return {id}
    // }

    // public async getAll() : Promise<IProduct[]> {
    //     return [{id:1}];
    // } 
    public async deleteById(id): Promise<void> {

    }
    public async deleteAll(): Promise<void>{

    }

}
const newObject: IProduct = {
    id : 1,
    title: 'Arroz',
    price: 400,
    thumbnail: 'wwww.arroz.com',

}
const container = new Container('products.txt');

container.save(newObject);