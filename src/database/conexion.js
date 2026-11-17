import {createPool} from 'mysql2/promise';
import {config} from 'dotenv'
config()

export async function conectado() {
    try {
        const bdd = createPool({
            host: process.env.DBHOST,
            database: process.env.DBNAME,
            user: process.env.DBUSER,
            password: process.env.DBPASSWORD,
        });
        console.log("conectado");
        return bdd;
    } catch (error) {
        console.log(`error, no se pudo conectar a la bdd\n ${error}`);
    }
}


