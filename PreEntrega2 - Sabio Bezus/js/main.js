const carrito = [];

const prendas = [
    { imagen: '👚', codigo: 1, tipo: 'Remera Clasica', precio: 3000 },
    { imagen: '🩳', codigo: 2, tipo: 'Bermuda', precio: 3800 },
    { imagen: '👕', codigo: 3, tipo: 'Remera Slim', precio: 4000 },
    { imagen: '👖', codigo: 4, tipo: 'Pantalón de vestir', precio: 8000 },
    { imagen: '👔', codigo: 5, tipo: 'Camisa', precio: 10000 },
    { imagen: '🧥', codigo: 6, tipo: 'Abrigo', precio: 12000 },
    { imagen: '🎽', codigo: 7, tipo: 'Musculosa', precio: 2000 },
    { imagen: '🩱', codigo: 8, tipo: 'Traje de baño', precio: 2000 },
];

//....................................................................................BUSCAMOS LA PRENDA SEGUN SU CODIGO....................................................................................
function buscarPrendas(codigo) {
    let resultado = prendas.find((prenda) => prenda.codigo === codigo);
    return resultado;
}


//............................................................FINALIZAMOS LA COMPRA Y SELECCIONAMOS SI QUEREMOS O NO CON ENVIO Y SI QUEREMOS O NO CON CUOTAS................................................
function finalizarCompra() {
    let shopping = new Compra(carrito);
    let totalCarrito = shopping.obtenerSubtotal();
  
    let resumen = 'Resumen de la compra:\n\n';
    carrito.forEach((prenda) => {
      resumen += prenda.tipo + ' - ' + prenda.cantidad + ' - $' + prenda.precio + '\n';
    });
  
    resumen += '\nSub total: $' + totalCarrito;
  
    const opcionEnvio = confirm('¿Desea agregar envío por $1000?');
    if (opcionEnvio) {
      agregarEnvio(resumen, totalCarrito);
    } else {
      const opcionCuotas = confirm('¿Desea pagar en cuotas?');
      if (opcionCuotas) {
        agregarCuotas(resumen, totalCarrito);
      } else {
        resumen += '\n\nFORMA DE PAGO\nContado';
        resumen += '\n\nTOTAL A PAGAR\n$' + totalCarrito;
        alert(resumen);
        reiniciarCompra();
      }
    }
  }
  
  function agregarEnvio(resumen, totalCarrito) {
    resumen += '\n\nENVIO\n$1000';
    totalCarrito += 1000;
    
    const opcionCuotas = confirm('¿Desea pagar en cuotas?');
    if (opcionCuotas) {
      agregarCuotas(resumen, totalCarrito);
    } else {
      resumen += '\n\nFORMA DE PAGO\nContado';
      resumen += '\n\nTOTAL A PAGAR\n$' + totalCarrito;
      alert(resumen);
      reiniciarCompra();
    }
  }
  

  function agregarCuotas(resumen, totalCarrito) {
    const cuotas = parseInt(prompt('Ingrese la cantidad de cuotas (3, 6 o 12):'));
    let interes = 0;
    if (cuotas === 3) {
      interes = 0.1;
    } else if (cuotas === 6) {
      interes = 0.2;
    } else if (cuotas === 12) {
      interes = 0.3;
    } else {
      alert('Cantidad de cuotas inválida. Se realizará el pago al contado.');
    }
    if (interes > 0) {
      const intereses = totalCarrito * interes;
      totalCarrito += intereses;
      resumen += '\n\nFORMA DE PAGO\n' + cuotas + ' cuotas de interés: ' + (interes * 100) + '% (' + intereses + ')';
    }
  
    resumen += '\n\nTOTAL A PAGAR\n$' + totalCarrito;
    alert(resumen);
    reiniciarCompra();
  }
  
// USAMOS PARA RECARGAR LA PAGINA, ASI SE PUEDE VOLVER A EJECUTAR Y EL CARRITO ESTA VACIO
  function reiniciarCompra() {
    // Recargar la página
    location.reload();
  }

  
//..........................................................FUNCION PARA MOSTRAR EL CONTENIDO DEL CORRITO Y PERMITIRLE AL CLIENTE SABER QUE SELECCIONO..........................................................
function mostrarCarrito() {
    let mensajeCarrito = 'Su carrito tiene los siguientes productos:\n\n';
    carrito.forEach((prenda) => {
        mensajeCarrito += 'Tipo: ' + prenda.tipo + '\n';
        mensajeCarrito += 'Cantidad: ' + prenda.cantidad + '\n';
        mensajeCarrito += 'Precio: $' + prenda.precio + '\n';
        mensajeCarrito += 'Subtotal por prenda: $' + (prenda.precio * prenda.cantidad) + '\n\n';
    });
    mensajeCarrito += 'Subtotal del carrito: $' + new Compra(carrito).obtenerSubtotal();
    alert(mensajeCarrito);
}


//....................................................................................FUNCION PARA AGREGAR PRENDAS AL CARRITO....................................................................................
function agregarAlCarrito(prenda) {
    let prendaExistente = carrito.find((p) => p.codigo === prenda.codigo);
    if (prendaExistente) {
        prendaExistente.cantidad += 1;
    } else {
        prenda.cantidad = 1;
        carrito.push(prenda);
    }
}


//.............................................................................FUNCION PARA SELECCIONAR LA PRENDA QUE QUEREMOS COMPRAR............................................................................
function comprar() {
    let respuesta = true;
    while (respuesta) {
        let id = prompt('Ingresa el código de tu prenda a comprar:');
        let prendaElegida = buscarPrendas(parseInt(id));
        if (prendaElegida) {
            agregarAlCarrito(prendaElegida);
            mostrarCarrito();
            respuesta = confirm('¿Deseas elegir otra prenda?');
        } else {
            alert('⛔️ Error en el código ingresado.');
        }
    }

    let mensajeResumen = 'Resumen de la compra:\n\n';
    carrito.forEach((prenda) => {
        mensajeResumen += 'Tipo: ' + prenda.tipo + '\n';
        mensajeResumen += 'Cantidad: ' + prenda.cantidad + '\n';
        mensajeResumen += 'Precio: $' + prenda.precio + '\n\n';
    });
    
    
    let totalCarrito = new Compra(carrito).obtenerSubtotal();

    mensajeResumen += 'Total: $' + totalCarrito;

    alert(mensajeResumen);
    finalizarCompra();
}

