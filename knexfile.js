import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const config = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: `${__dirname}/DB/ecommerce.db3`
    }
  },
  useNullAsDefault: true,
  pool: { min: 2, max: 8 },
};
