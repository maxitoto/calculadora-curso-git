const readline = require("readline");
const Calculadora = require("./calculadora");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const calc = new Calculadora();

function mostrarMenu() {
  console.log("\n=================================");
  console.log("     CALCULADORA INTERACTIVA     ");
  console.log("=================================");
  console.log("1. Sumar");
  console.log("2. Restar");
  console.log("3. Multiplicar");
  console.log("4. Dividir");
  console.log("5. Potencia");
  console.log("6. Raíz Cuadrada");
  console.log("7. Resto");
  console.log("8. Logaritmo Natural");
  console.log("9. Logaritmo base 10");
  console.log("10. Porcentaje de A sobre B");
  console.log("11. Valor máximo de varios números");
  console.log("12. Promedio de varios números");
  console.log("0. Salir");
  console.log("=================================");
}

function pedirNumero(mensaje) {
  return new Promise((resolve) => {
    rl.question(mensaje, (respuesta) => {
      const numero = parseFloat(respuesta);
      resolve(numero);
    });
  });
}

function pedirVariosNumeros(mensaje) {
  return new Promise((resolve) => {
    rl.question(mensaje, (respuesta) => {
      const numeros = respuesta.split(" ").map((num) => parseFloat(num));
      resolve(numeros);
    });
  });
}

async function operacionDosNumeros(operacion, nombreOperacion) {
  const num1 = await pedirNumero("Ingrese el primer número: ");
  const num2 = await pedirNumero("Ingrese el segundo número: ");

  const resultado = operacion(num1, num2);

  if (resultado === undefined) {
    console.log(`\n⚠️  La función ${nombreOperacion} aún no está implementada`);
  } else {
    console.log(
      `\n✓ Resultado: ${num1} ${getSimboloOperacion(
        nombreOperacion
      )} ${num2} = ${resultado}`
    );
  }
}

async function operacionVariosNumeros(operacion, nombreOperacion) {
  const numeros = await pedirVariosNumeros("Ingrese los números separados por espacios: ");

  const resultado = operacion(numeros);

  if (resultado === undefined) {
    console.log(`\n⚠️  La función ${nombreOperacion} aun no esta implementada`);
  } else if (isNaN(resultado)) {
    console.log(`\n⚠️  Error: Operación inválida (resultado: NaN)`);
  } else {
    console.log(
      `\n✓ Resultado: [${numeros.join(" ")}] ${getSimboloOperacion(nombreOperacion)} = ${resultado}`
    );
  }
}

async function operacionUnNumero(operacion, nombreOperacion) {
  const num = await pedirNumero("Ingrese el número: ");

  const resultado = operacion(num);

  if (resultado === undefined) {
    console.log(`\n⚠️  La función ${nombreOperacion} aún no está implementada`);
  } else if (isNaN(resultado)) {
    console.log(`\n⚠️  Error: Operación inválida (resultado: NaN)`);
  } else {
    console.log(`\n✓ Resultado: ${getSimboloOperacion(nombreOperacion)} ${num} = ${resultado}`);
  }
}

function getSimboloOperacion(nombre) {
  const simbolos = {
    suma: "+",
    resta: "-",
    multiplicación: "×",
    división: "÷",
    potencia: "^",
    raizCuadrada: "√",
    resto: "mod",
    logaritmoNatural: "ln",
    logaritmoBase10: "log[10]",
    porcentaje: "%",
    maximo: "max",
    promedio: "avg",
  };
  return simbolos[nombre] || "";
}

async function ejecutarOpcion(opcion) {
  switch (opcion) {
    case "1":
      await operacionDosNumeros((a, b) => calc.sumar(a, b), "suma");
      break;

    case "2":
      await operacionDosNumeros((a, b) => calc.restar(a, b), "resta");
      break;

    case "3":
      await operacionDosNumeros(
        (a, b) => calc.multiplicar(a, b), "multiplicación");
      break;

    case "4":
      await operacionDosNumeros((a, b) => calc.dividir(a, b), "división");
      break;

    case "5":
      // const base = await pedirNumero("Ingrese la base: ");
      // const exponente = await pedirNumero("Ingrese el exponente: ");
      // const resultadoPot = calc.potencia(base, exponente);

      // if (resultadoPot === undefined) {
      //   console.log("\n⚠️  La función potencia aún no está implementada");
      // } else {
      //   console.log(`\n✓ Resultado: ${base}^${exponente} = ${resultadoPot}`);
      // }
      // break;

      await operacionDosNumeros((base, exponente) => calc.potencia(base, exponente), "potencia");
      break;

    case "6":
      await operacionUnNumero((num) => calc.raizCuadrada(num), "raízCuadrada");
      break;

    case "7":
      await operacionDosNumeros((a, b) => calc.resto(a, b), "resto");
      break;

    case "8":
      await operacionUnNumero((num) => calc.logaritmoNatural(num),"logaritmoNatural");
      break;

    case "9":
      await operacionUnNumero((num) => calc.logaritmoBase10(num),"logaritmoBase10");
      break;

    case "10":
      await operacionDosNumeros((a, b) => calc.porcentaje(a, b), "porcentaje");
      break;

    case "11":
      // const numeros = await pedirVariosNumeros();
      // if (numeros.length === 0) {
      //   console.log("No ingresaste números válidos.");
      //   break;
      // }
      // const resultadoMax = calc.maximo(numeros);
      // if (resultadoMax === undefined) {
      //   console.log("La función máximo aún no está implementada");
      // } else {
      //   console.log(`Resultado: El número máximo es ${resultadoMax}`);
      // }
      // break;
      await operacionVariosNumeros((numeros) => calc.maximo(numeros), "maximo");
      break;

    case "12":
      await operacionVariosNumeros((numeros) => calc.promedio(numeros), "promedio");
      break;

    case "0":
      console.log("\n¡Hasta luego! 👋");
      rl.close();
      return false;

    default:
      console.log("\n⚠️  Opción inválida. Por favor intente nuevamente.");
  }

  return true;
}

async function iniciar() {
  let continuar = true;

  while (continuar) {
    mostrarMenu();

    const opcion = await new Promise((resolve) => {
      rl.question("\nSeleccione una opción: ", resolve);
    });

    continuar = await ejecutarOpcion(opcion);
  }
}

// Iniciar el cliente
console.log("Bienvenido a la Calculadora Interactiva");
iniciar();
