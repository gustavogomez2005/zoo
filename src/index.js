import express from 'express';
import colors from 'colors';
import path from 'path';
import { fileURLToPath } from 'url';


const PORT = process.env.PORT || 3000;
const app = express();


// setear motor de vistas
app.set('view engine', 'ejs')

// setear la ruta views
const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.set('views', path.join(__dirname, 'views'))

// para poder tomar los datos de los formularios
app.use(express.urlencoded({extended: true}))

// ruta
import {rutas} from './rutas/rutaInicio.js';
app.use(rutas)

// servidor
app.listen(PORT, ()=>{
    console.log(`servidor iniciando en el puerto ${PORT}`);
})