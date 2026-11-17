import express from 'express';
import {mostrarMenuZoo, altazoo, nuevoZoo, buscaId, buscaTomaId, mostrar} from '../Controller/ZooController.js';

const zoo = express.Router();

zoo.get('/zoo', mostrarMenuZoo);

// alta
zoo.get('/zoo/alta', nuevoZoo)
zoo.post('/zoo/alta', altazoo)

// consulta por id
zoo.get('/zoo/buscaid', buscaId)
zoo.get('/zoo/buscaid/:id', buscaTomaId)

// eliminar
zoo.get('/zoo/eliminar/id', (pet, resp)=>{
    
})

// modificar
zoo.get('/zoo/cambiar', (pet, resp)=>{
    
})

// mostrar todo
zoo.get('/zoo/mostrar', mostrar)



export {zoo}
