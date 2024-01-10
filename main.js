class productos {
  constructor(nombre, descripcion, precio) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
  }
}
const prendas = [
  new productos(
    "Short Mom Soho",
    "Short confeccionado en denim.",
     10500
  ),
  new productos(
    "Vestido Helena",
    "Vestido escote pico confeccionado en seda estampada.",
    15500
  ),
  new productos(
    "Blusa Tina",
    "Blusa cuello solapa confeccionada en lino rústico.",
    19500
  ),
  new productos(
    "Jean Bath",
    "Jeans tiro alto confeccionado en denim elastizado.",
    16900
  ),
];

const precioMaximo = Number(prompt("Ingrese el precio máximo:"));

if (!isNaN(precioMaximo)) {

  const productosFiltrados = prendas.filter(
    (producto) => producto.precio <= precioMaximo
  );

  alert(`Productos con precio igual o inferior a ${precioMaximo}:`);

  productosFiltrados.forEach((producto) => {
    alert(`
    Nombre: ${producto.nombre}
    Descripcion: ${producto.descripcion}
    Precio: ${producto.precio}
  `);

    if (producto.precio < 20000 && producto.precio >= 15000) {
      alert("¡Este producto tiene un descuento del 15% abonando en efectivo!");
    } else if (producto.precio < 15000 && producto.precio >= 10500) {
      alert("¡Este producto tiene un descuento del 10% abonando en efectivo!");
    }
  });
} else {
  alert("Por favor, ingrese un valor numérico válido.");
}



