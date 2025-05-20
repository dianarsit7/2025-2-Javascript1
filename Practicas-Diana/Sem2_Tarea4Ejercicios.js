const { ask } = require('../helpers/input');

function analizarCalificaciones(notas) {
    let aprobados = 0;
    let suma = 0;
    let mayor = notas[0];
    let menor = notas[0];
  
    for (let nota of notas) {
      if (nota >= 70) {
        aprobados++;
      }
      suma += nota;
  
      if (nota > mayor) mayor = nota;
      if (nota < menor) menor = nota;
    }
  
    const total = notas.length;
    const reprobados = total - aprobados;
    const promedio = suma / total;
  
    return {
      aprobados,
      reprobados,
      promedio,
      mayor,
      menor
    };
  }
  