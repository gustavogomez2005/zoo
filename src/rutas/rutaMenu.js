import express from 'express';
import {mostrarMenu} from '../Controller/MenuController.js'
const menu = express.Router();

menu.get('/', mostrarMenu);

export {menu}
