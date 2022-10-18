import knex from "knex";
import { config } from '../../knexfile.js';
import moment from 'moment';

class Conector {
    constructor(model) {
        this.db = knex(config.development);
        this.model = model
    }
    //Busca datos por id
    async getById(id) {
        try {
            await this.db.from(this.model).where({ id });
        } catch (error) {
            throw { message: '', status: 404, error }
        }
    };
    //Busca todos lod registros
    async getAll() {
        try {
            return await this.db.from(this.model).orderBy('id', 'desc');
        } catch (err) {
            console.error(err);
            throw { message: '', status: 404, error }
        }
    }
    //Busca por un filtro de criterios
    async filter(filter) {
        try {
            return await this.db.from(this.model).where(filter).orderBy('id', 'desc');
        } catch (err) {
            console.error(err);
            throw { message: '', status: 404, error }
        }
    }
    //Inserta un registro
    async create(data) {
        try {
            data.date = moment(new Date()).format("DD/MM/YYY HH:MM:SS");
            await this.db(this.model).insert(data);
            return { success: true, message: 'Registro insertado con exito' };
        } catch (err) {
            console.error(err);
            throw { message: '', status: 404, error }
        }
    }
    //Actualiza un registro
    async update(id, data) {
        try {
            await this.db(this.model).where({ id }).update(data);
            return { success: true, message: 'Registro actualizado con exito' };
        } catch (err) {
            console.error(err);
            throw { message: '', status: 404, error }
        }
    }
    //Elimina un registro
    async deleteById(id) {
        try {

            await this.db(this.model).where({ id }).del();
            return { success: true, message: 'Registro eliminado con exito', id };
        } catch (err) {
            console.error(err);
            throw { message: '', status: 404, error }
        }
    }

}


export default Conector;