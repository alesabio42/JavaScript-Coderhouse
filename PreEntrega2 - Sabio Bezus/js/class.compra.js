class Compra {
    constructor(carrito) {
        this.carrito = carrito;
    }

    obtenerSubtotal() {
        if (this.carrito.length > 0) {
            return this.carrito.reduce((acc, prenda) => acc + (prenda.precio * prenda.cantidad), 0);
        } else {
            return 0;
        }
    }
}

// La clase Compra contiene la lógica relacionada con la obtención del subtotal de una compra basada en el contenido del carrito.
