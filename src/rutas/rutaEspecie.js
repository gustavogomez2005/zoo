import express from 'express';
import {mostrarMenuEspecie, alta, baja, consultaid, modificar, mostrarTodo, nuevo} from '../Controller/EspecieController.js'
const especie = express.Router();

especie.get('/especie', mostrarMenuEspecie);

especie.get('/especie/altas', alta);

especie.post('/especie/nuevo', nuevo);

especie.get('/especie/mostrartodo', mostrarTodo);

especie.get('/especie/consultaxid', consultaid);

especie.get('/especie/baja', baja);

especie.get('/especie/modificar', modificar);

export {especie}
