import fs from 'fs';
import {fromStringList, fromListString} from './util.js'

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

    async save (object) {
        // en el create debo buscar la lista y crear un un id aleatorio y devolverlo
        //siempre el ultimo de la lista
        try{
          await this.fsAsync.appendFile(`./${this.filName}`, `${JSON.stringify(object)}, `);
          return object.id;
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
     async deleteById(id){
        try{
            const data = await this.fsAsync.readFile(`./${this.filName}`, 'utf-8');
            const newData = fromStringList(data).filter(i => i.id !== id);
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
