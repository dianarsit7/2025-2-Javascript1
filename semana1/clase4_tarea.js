// Ejercicio: Pedir al usuario su fecha de nacimiento
//
// Instrucciones:
// 1. Mostrar en pantalla los días equivalentes a la edad actual del usuario
// 2. Mostrar en pantalla los meses equivalentes a la edad actual del usuario
// 3. Mostrar los años que tiene el usuario.

const { ask } = require('../helpers/input');

function diffDays(actualDate, birthDate){
    const diff = actualDate - birthDate;
    const edadEnDias = Math.floor(diff / (1000*60*60*24));

    return edadEnDias;
    }

async function main() {
    const actualDate = new Date ();
    const birthDateDay = await ask("¿Cual es tu fecha de nacimiento?");
    const birthDateMonth = await ask("¿Cual es el mes de tu fecha de nacimiento?");
    const birthDateYear = await ask("¿Cual es el año de fecha de nacimiento?");

    const birthDate = new Date(`${birthDateYear}-${birthDateMonth}-${birthDateDay}`);

    let years = actualDate.getFullYear() - birthDate.getFullYear();
    let months = actualDate.getMonth() - birthDate.getMonth();
    let days = actualDate.getDate() - birthDate.getDate();
  
    if (days < 0) {
      months--;
      days += new Date(actualDate.getFullYear(), actualDate.getMonth(), 0).getDate();
    }
  
    if (months < 0) {
      years--;
      months += 12;
    }
  
    console.log(`Has vivido aproximadamente: ${years} años, ${months} meses y ${days} días.`);
    console.log(`Tu cumpleaños es: ${birthDateDay}/${birthDateMonth}/${birthDateYear}`);

  }


main();