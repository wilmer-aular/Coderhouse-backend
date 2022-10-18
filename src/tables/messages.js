import knex from 'knex';
import { config } from '../../knexfile.js';

const Knex = knex(config.development);

export const createTableMessages = async () => {
    try {
        await Knex.schema.createTableIfNotExists('messages', table => {
            table.increments('id');
            table.string('email');
            table.date('date');
            table.string('message');
        });
    } catch (err) {
        console.error(err)
    } finally {
        Knex.destroy()
    }
};
