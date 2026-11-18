//import {conectado} from '../database/conexion.js'
import {bdd} from '../database/conexion.js';

//const bdd = await conectado();


export function mostrarMenuZoo(pet, resp){
    resp.render('menuZoo')
}

// alta
export function nuevoZoo(pet, resp){
    resp.render('zoonuevo')
}

export async function altazoo(pet, resp){
    let nom, ciu, pais, tam, presu;
    nom = pet.body.nom;
    ciu = pet.body.ciu;
    pais = pet.body.pais;
    tam = parseInt( pet.body.tam);
    presu = parseFloat(pet.body.presu);

    let altasql = "INSERT INTO zoologico (nom,ciudad,pais,tamanio,presupuesto) VALUES ('"+ nom +"','"+ ciu +"','"+ pais +"','"+ tam +"','"+ presu +"');";

    try {
        const registro = await bdd.query(altasql);
        console.log(`zoologico agregado correctamente`);
        resp.redirect('/zoo')
    } catch (error) {
        console.log(`no se pudo ingresar el zoologico\n${error}`);
    }
}


// consulta por id
export function buscaId(pet, resp){
    resp.render('zooConsultaId')
}

export async function buscaTomaId(pet, resp){
    let id = pet.params.id;
    let buscaIdSql = "select nom, ciudad, pais, tamanio, presupuesto from zoologico where idZoologico = '"+ id +"';";
    try {
        let [registro, campos] = await bdd.query(buscaIdSql);
        if (registro.length > 0) {
            console.log(registro);
            console.log(`Nombre: ${registro[0].nom} Ciudad: ${registro[0].ciudad} País: ${registro[0].pais} Tamaño: ${registro[0].tamanio} Presupuesto: ${registro[0].presupuesto}`);    
        } else {
            console.log(`no encontró al zoológico ${id}`);
        }
    } catch (error) {
        console.log(`Error, no pudo hacer la busqueda\n ${error}`);
    }
};



// mostrar todo
export async function mostrar(pet, resp){
    let mostrarsql = "SELECT idZoologico, nom, ciudad, pais, tamanio, presupuesto FROM zoo.zoologico;";
    try {
             const filas = await bdd.query(mostrarsql)
             console.log(filas);
    } catch (error) {
        console.log(`Error, no puede mostrar los datos\n ${error}`);
    }/*finally{
        console.log('tres');
        bdd.end();
    }*/

    resp.render('ZooMostrar')
};
