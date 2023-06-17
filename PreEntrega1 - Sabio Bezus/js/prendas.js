function mostrarOpciones(opciones) {
  let opcionesTexto = '';
  for (let i = 0; i < opciones.length; i++) {
    opcionesTexto += `${i + 1}. ${opciones[i]}\n`;
  }
  alert(opcionesTexto);
}

// Precios de las prendas y el envío
const preciosPrendas = {
  vestido: 50,
  remera: 20,
  bermuda: 30,
  pantalon: 40
};

const precioEnvio = 5;

// MOSTRAR OPCIONES DE PRENDAS
alert("Elige una prenda:");
const prendas = ["vestido", "remera", "bermuda", "pantalon"];
mostrarOpciones(prendas);



// PREGUNTAR QUE PRENDA QUIERE
let prendaSeleccionada;
do {
  prendaSeleccionada = parseInt(prompt("Ingrese el número de la prenda:"));
  if (isNaN(prendaSeleccionada) || prendaSeleccionada < 1 || prendaSeleccionada > prendas.length) {
    alert("Ingreso no válido, vuelva a ingresar el código");
  }
} while (isNaN(prendaSeleccionada) || prendaSeleccionada < 1 || prendaSeleccionada > prendas.length);
const prendaElegida = prendas[prendaSeleccionada - 1];




// MOSTRAR OPCIONES DE COLORES
alert("Elige un color:");
const colores = ["rojo", "verde", "azul", "amarillo", "blanco", "negro"];
mostrarOpciones(colores);

// PREGUNTAR QUE COLOR QUIERE
let colorSeleccionado;
do {
  colorSeleccionado = parseInt(prompt("Ingrese el número del color:"));
  if (isNaN(colorSeleccionado) || colorSeleccionado < 1 || colorSeleccionado > colores.length) {
    alert("Ingreso no válido, vuelva a ingresar el código");
  }
} while (isNaN(colorSeleccionado) || colorSeleccionado < 1 || colorSeleccionado > colores.length);
const colorElegido = colores[colorSeleccionado - 1];



// PREGUNTAR SI DESEA ENVIOS
let envio;
do {
  envio = prompt("¿Desea envío? (S/N)").toLowerCase();
  if (envio !== "s" && envio !== "n") {
    alert("Ingreso no válido, vuelva a ingresar el código");
  }
} while (envio !== "s" && envio !== "n");




// PREGUNTAR SI DESEA PAGAR EN CUOTAS
let cuotas;
do {
  cuotas = prompt("¿Desea pagar en cuotas? (S/N)").toLowerCase();
  if (cuotas !== "s" && cuotas !== "n") {
    alert("Ingreso no válido, vuelva a ingresar el código");
  }
} while (cuotas !== "s" && cuotas !== "n");

let total = preciosPrendas[prendaElegida];
if (envio === "s") {
  total += precioEnvio;
}

if (cuotas === "s") {
  alert("Elige la cantidad de cuotas:");
  const cantCuotas = [3, 6, 12];
  mostrarOpciones(cantCuotas);



  // OBTENER LA CANTIDAD DE CUOTAS
  let cuotasSeleccionadas;
  do {
    cuotasSeleccionadas = parseInt(prompt("Ingrese el número de cuotas:"));
    if (isNaN(cuotasSeleccionadas) || !cantCuotas.includes(cuotasSeleccionadas)) {
      alert("Ingreso no válido, vuelva a ingresar el código");
    }
  } while (isNaN(cuotasSeleccionadas) || !cantCuotas.includes(cuotasSeleccionadas));

  const interes = cuotasSeleccionadas === 3 ? 0.1 : (cuotasSeleccionadas === 6 ? 0.2 : 0.3);
  total += total * interes;
}

alert(`Tu  ${prendaElegida} ${colorElegido} cuesta $${total.toFixed(2)}`);

