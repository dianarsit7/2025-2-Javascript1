
const { ask } = require('../../../helpers/input.js');

async function main() {
  const total = Number(await ask("Indica la cantidad de edades a ingresar:"));
  let puedenVotar = 0;

  for (let i = 0; i < total; i++) {
    const edad = Number(await ask(`Edad #${i + 1}: `));
    if (edad >= 18) puedenVotar++;
  }

  console.log(`\nTotal de personas que pueden votar: ${puedenVotar}`);
}

  main();