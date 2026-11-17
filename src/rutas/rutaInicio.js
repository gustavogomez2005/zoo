import express from 'express';
const rutas = express.Router();

import {menu} from './rutaMenu.js';
import {animal} from './rutaAnimal.js';
import {especie} from './rutaEspecie.js';
import {zoo} from './rutaZoo.js';


rutas.use(menu);
rutas.use(animal);
rutas.use(especie);
rutas.use(zoo);

export {rutas}

