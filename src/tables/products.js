import knex from 'knex';
import { config } from '../../knexfile.js';

const Knex = knex(config.development);

export const createTableProducts = async () => {
    try {
        await Knex.schema.createTableIfNotExists('products', table => {
            table.increments('id');
            table.string('title');
            table.integer('price');
            table.string('thumbnail');
            table.date('date');
        });
    } catch (err) {
        console.error(err)
    } finally {
        Knex.destroy()
    }
};


