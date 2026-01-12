// arrays y precios//
//const productos = ["remera", "camisa", "pantalón"];
const precios = [15000, 30000, 70000];

//funcion mostrar productos//

function mostrar_productos() {
  let lista = "Productos disponibles:\n";
  for (let i = 0; i < productos.length; i++) {
    lista += i + 1 + ". " + productos[i] + " - $" + precios[i] + "\n";
  }
  alert(lista);
}

//funcion calcular total//
/*function calcularCompra() {
  mostrar_productos();
  let opcion = parseInt(prompt("Elegí un producto (1-3):"));
  console.log("opción elegida:", opcion);

  if (opcion >= 1 && opcion <= 3) {
    let cantidad = parseInt(
      prompt("¿Cuántas unidades de " + productos[opcion - 1] + " querés?")
    );
    console.log("cantidad elegida", cantidad);

    let total = precios[opcion - 1] * cantidad;
    alert(
      "Elegiste " +
        cantidad +
        " " +
        productos[opcion - 1] +
        "(s).\nTotal: $" +
        total
    );
  } else {
    alert("Opción no válida. Intentá de nuevo.");
  }
}*/

//funcion principal//

function iniciar_simulador() {
  let continuar = true;
  while (continuar) {
    calcularCompra();
    continuar = confirm("¿Querés hacer otra compra?");
  }
  console.log("El usuario quiere continuar?");
  alert("¡Gracias por visitar nuestra tienda online!");
}

//invocacion inicial//
iniciar_simulador();

// Productos
const productos = [
  { nombre: "Remera", precio: 15000 },
  { nombre: "Camisa", precio: 30000 },
  { nombre: "Pantalón", precio: 70000 },
];

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// DOM
const productoSelect = document.getElementById("productoSelect");
const cantidadInput = document.getElementById("cantidadInput");
const agregarBtn = document.getElementById("agregarBtn");
const vaciarBtn = document.getElementById("vaciarBtn");
const carritoLista = document.getElementById("carritoLista");
const totalTexto = document.getElementById("total");

// Cargar productos en el select
function cargarProductos() {
  productos.forEach((prod, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = `${prod.nombre} - $${prod.precio}`;
    productoSelect.appendChild(option);
  });
}

// Mostrar carrito
function mostrarCarrito() {
  carritoLista.innerHTML = "";
  let total = 0;

  carrito.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.nombre} x ${item.cantidad} = $${
      item.precio * item.cantidad
    }`;
    carritoLista.appendChild(li);
    total += item.precio * item.cantidad;
  });

  totalTexto.textContent = "Total: $" + total;
}

// Guardar en localStorage
function guardarCarrito() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

// Evento agregar
agregarBtn.addEventListener("click", () => {
  const productoIndex = productoSelect.value;
  const cantidad = parseInt(cantidadInput.value);

  if (!cantidad || cantidad <= 0) {
    alert("Ingresá una cantidad válida");
    return;
  }

  const producto = productos[productoIndex];

  carrito.push({
    nombre: producto.nombre,
    precio: producto.precio,
    cantidad: cantidad,
  });

  guardarCarrito();
  mostrarCarrito();
  cantidadInput.value = "";
});

// Evento vaciar
vaciarBtn.addEventListener("click", () => {
  carrito = [];
  guardarCarrito();
  mostrarCarrito();
});

// Inicializar
cargarProductos();
mostrarCarrito();
