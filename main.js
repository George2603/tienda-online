// arrays y precios//
const productos = ["remera", "camisa", "pantalón"];
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
function calcularCompra() {
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
}

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
