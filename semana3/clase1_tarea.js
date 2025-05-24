
const { ask } = require('../helpers/input');

async function main(){

let alumnos = [];    

console.log("Bienvenido al registro de alumnos");
console.log("Vas a ingresar nombre, edad y calificación de cada alumno.");

let seguir = true;

while (seguir) {
    let nombre = await ask("Nombre del glumno:");
    let edad = await ask(`¿Qué edad tiene ${nombre}?`);
    let calificacion = await ask(`¿Qué calificación obtuvo ${nombre}?`);

 }
}
main();