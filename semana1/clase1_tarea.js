const { ask } = require('../helpers/input.js');



async function main() {
    console.log(`Calculadora.`);
    let numero1 = Number(await ask('¿Cual es tu primer numero?'));
    let operacion = await ask('¿Que operacion quieres realizar?');
    let numero2 = Number(await ask('¿Cual es tu segundo numero?'));
    let resultado;
    let nombreOperacion;
    if (operacion === "+") {
        resultado = numero1 + numero2;  
        nombreOperacion = "suma"
    } else if (operacion === "-") {
        resultado =numero1 - numero2;
        nombreOperacion = "resta"
    } else if (operacion === "*") {
        resultado = numero1 * numero2; 
        nombreOperacion = "multiplicacion"
    } else if (operacion === "/") {
        resultado = numero1 / numero2;
        nombreOperacion = "división"}
      
    console.log(`La ${nombreOperacion} ${operacion} de ${numero1} y ${numero2} es de ${resultado}`)

}

main();