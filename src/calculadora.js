class Calculadora {
  sumar(a, b) {
    return a + b;
  }

  restar(a, b) {
    // TODO: Implementar resta
  }

  multiplicar(a, b) {
    return a * b;
  }

  dividir(a, b) {
    if (b === 0) {
      return "Error";
    }
    return parseFloat((a / b).toFixed(3));
  }

  potencia(base, exponente) {
    // TODO: Implementar potencia
  }

  raizCuadrada(numero) {
    if (numero<0){
      return "Error numero negativo: no es posible sacar raiz cuadrada"
    }
    return parseFloat (Math.sqrt(numero).toFixed(3))
  }
}

// Exportar para usar en tests
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Calculadora;
}

// Para usar en consola de Node.js
const calc = new Calculadora();

console.log('=== Calculadora Simple ===');
console.log('Ejemplo de uso:');
console.log('calc.sumar(5, 3):', calc.sumar(5, 3));
console.log('\nFunciones disponibles:');
console.log('- calc.sumar(a, b)');
console.log('- calc.restar(a, b)');
console.log('- calc.multiplicar(5, 3)', calc.multiplicar(5, 3));
console.log('- calc.dividir(10, 0)', calc.dividir(4, 3));
console.log('- calc.potencia(base, exponente)');
console.log('- calc.raizCuadrada(numero)');