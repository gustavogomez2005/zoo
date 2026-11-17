import {conectado} from '../database/conexion.js';
const bdd = await conectado();

export function mostrarMenuEspecie(pet, resp){
    resp.render('menuEspecie')
};

export function alta(pet, resp) {
    resp.render('EspecieNuevo');
}

export async function nuevo(pet, resp) {
    let id, nom, fam, ext;
    id = pet.body.id;
    nom = pet.body.nom;
    fam = pet.body.fam;
    if (pet.body.ext == undefined) {
        ext = 0;
    } else {
        ext = 1;
    }
    try {
        let altasql = "INSERT INTO especie (idEspecie,nomCientifico,familia,enExtinsion) VALUES ('"+id+"','"+nom+"','"+fam+"','"+ext+"');";
        const [registro] = await bdd.query(altasql);
        if (registro.affectedRows == 1) {
            resp.render('menuEspecie')
        } else {
            console.log(`error al ingresar la especie\n${error}`);
        }
    } catch (error) {
        console.log(`error, no puede dar de alta la especie\n${error}`);
    }
}

export async function mostrarTodo(pet, resp) {
    try {
        let mostrarsql = "select idEspecie, nomCientifico, familia, enExtinsion from especie order by idEspecie;";
        const [registros] = await bdd.query(mostrarsql)
        resp.render('EspecieMostrarTodo', {registros});    
    } catch (error) {
        console.log(`error al mostrar las especies\n${error}`);
    }
    
}


export function baja(pet, resp) {
    resp.render('EspecieBaja');
}

export function consultaid(pet, resp) {
    resp.render('EspecieConsultaId');
}

export function modificar(pet, resp) {
    resp.render('EspecieModifica');
}