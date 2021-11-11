let gastoTotal = 0;
let precioProducto = 0;
let contador = 0;

alert("Vamos a sumar el total de productos hasta que ingrese un valor igual a cero, menor que cero o que no sea un valor numérico no válido");

ingresarPrecio();
mostrarTotal();

function ingresarPrecio() {
    precioProducto = Number(prompt("Ingrese el precio del producto" + (contador + 1) + ":"));
    while (precioProducto > 0) {
        gastoTotal = calcularTotal(precioProducto);
        contador++;
        precioProducto = Number(prompt("Ingrese el precio del producto" + (contador + 1) + ":"));
    }

    if (precioProducto <= 0) {
        console.log("Ha terminado de introducir los precios de los productos")
    }
}

function calcularTotal(precioProducto) {
    return gastoTotal + precioProducto;
}

function mostrarTotal() {
    console.log("Cantidad de productos: " + contador);
    console.log("El precio total es " + gastoTotal);
}