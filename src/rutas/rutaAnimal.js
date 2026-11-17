import express from 'express';
import {mostrarMenuAnimal} from '../Controller/AnimalController.js';
const animal = express.Router();

animal.get('/animal', mostrarMenuAnimal);

export {animal}
