import fs from 'fs';
import {fromStringList, fromListString, createId} from './util.js'

class Container {
fsAsync = fs.promises;

    constructor (fileName) {
        this.filName = fileName;
    }

    async createFile () {
        try{
            await this.fsAsync.writeFile(`./${this.filName}`,'');
          }catch(err) {
              console.error({err})
          }
    }
    async createList (list) {
        if(!list.length) return "The list is empty";
           const object = list.shift();
           await this.save(object);
        if(list.length) await this.createList(list);
       return "List created successfully" 
    }

    async save (object) {
        const id = createId( await this.getAll());
        try{
          await this.fsAsync.appendFile(`./${this.filName}`, `${id === 1 ? '' : ', '}${JSON.stringify({...object, id})}`);
          return id;
        }catch(err) {
            console.error({err})
        }
    }
    async getById(id) {
        try{
            const data = await this.fsAsync.readFile(`./${this.filName}`, 'utf-8');
            const newData = fromStringList(data);
            return newData.find(i => i.id === id);
          }catch(err) {
              console.error({err})
          }
    }
     async deleteById(id) {
        try{
            const data = await this.fsAsync.readFile(`./${this.filName}`, 'utf-8');
            const list = fromStringList(data);
            const verifyExist = list.find(i => i.id === id);
            if(!verifyExist) return `id ${id} invalid`
            const newData = list.filter(i => i.id !== id);
            const dataSave = fromListString(newData);
            await this.fsAsync.writeFile(`./${this.filName}`,dataSave); 
        }catch(err) {
            console.error({err})
        }
    }
    async getAll() {
        try{
            const data = await this.fsAsync.readFile(`./${this.filName}`, 'utf-8');
            return fromStringList(data);
        }catch(err) {
            console.error({err})
        }
    } 
     async deleteAll(){
        try{
            await this.fsAsync.writeFile(`./${this.filName}`,''); 
        }catch(err) {
            console.error({err})
        }
    }
}

export default Container
