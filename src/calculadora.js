class Calculadora {
  sumar(a, b) {
    return a + b;
  }

  restar(a, b) {
    return a - b;
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
    return parseFloat((base ** exponente).toFixed(3));
  }

  raizCuadrada(numero) {
    if (numero < 0) {
      return "Error numero negativo: no es posible sacar raiz cuadrada";
    }
    return parseFloat(Math.sqrt(numero).toFixed(3));
  }

  resto(a, b) {
    if (b === 0) return "Error";
    return a % b;
  }

  logaritmoNatural(numero) {
    if (numero <= 0) return "Error";

    return parseFloat(Math.log(numero).toFixed(3));
  }

  logaritmoBase10(numero) {
    if (numero <= 0) return "Error";

    return parseFloat(Math.log10(numero).toFixed(3));
  }

  porcentaje(a, b) {
    if (b === 0) return "Error";
    return (a / b) * 100;
  }

  maximo(arr) {
    if (!Array.isArray(arr) || arr.length === 0) return "Error";
    return Math.max(...arr);
  }
}

// Exportar para usar en tests
if (typeof module !== "undefined" && module.exports) {
  module.exports = Calculadora;
}

// Para usar en consola de Node.js
const calc = new Calculadora();

console.log("=== Calculadora Simple ===");
console.log("Ejemplo de uso:");
console.log("calc.sumar(5, 3):", calc.sumar(5, 3));
console.log("\nFunciones disponibles:");
console.log("- calc.sumar(a, b)");
console.log("- calc.restar(a, b)");
console.log("- calc.multiplicar(a, b)");
console.log("- calc.dividir(a, b)");
console.log("- calc.potencia(base, exponente)");
console.log("- calc.raizCuadrada(numero)");
console.log("- calc.resto(a, b)");
console.log("- calc.logaritmoNatural(numero)");
console.log("- calc.logaritmoBase10(numero)");
console.log("- calc.porcentaje(a, b)");


