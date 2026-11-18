import {createPool} from 'mysql2/promise';
import {config} from 'dotenv'
config()

// Creamos el pool UNA sola vez y lo exportamos directamente
export const bdd = createPool({
    host: process.env.DBHOST,
    database: process.env.DBNAME,
    user: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    port: process.env.DBPORT ? Number(process.env.DBPORT) : 3306
});

