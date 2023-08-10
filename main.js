/*=============================================
=            Entrega numero 2 JS            =
=============================================*/

let vehiculoAleman = {
  marca: "Audi",
  modelo: "A3",
  tipo: "Deportivo",
  precio: 20000,
};

let vehiculoFrances = {
  marca: "Peugueot",
  modelo: "308",
  tipo: "Deportivo",
  precio: 10000,
};

let vehiculoItaliano = {
  marca: "Fiat",
  modelo: "Punto",
  tipo: "Deportivo",
  precio: 5000,
};

function compraDeVehiculo(nombreCliente, plataDisponible) {
  nombreCliente = prompt("Ingrese su nombre por favor");
  plataDisponible = prompt(
    "Ingrese el dinero que tiene disponible para la compra"
  );

  if (plataDisponible >= 5000) {
    if (plataDisponible >= vehiculoAleman.precio) {
      alert(
        `${nombreCliente} Tiene disponible la compra de Auto ${
          vehiculoAleman.marca + vehiculoAleman.modelo
        }  y le sobra ${plataDisponible - vehiculoAleman.precio} pesos`
      );
    } else {
      alert(
        `${nombreCliente} Lamentablemente no tiene acceso a la flota de autos ${
          vehiculoAleman.marca + vehiculoAleman.modelo
        }`
      );
    }

    if (plataDisponible >= vehiculoFrances.precio) {
      alert(
        `${nombreCliente} Tiene disponible la compra de Auto ${
          vehiculoFrances.marca + vehiculoFrances.modelo
        }  y le sobra ${plataDisponible - vehiculoFrances.precio} pesos`
      );
    } else {
      alert(
        `${nombreCliente} Lamentablemente tampoco tiene acceso a la flota de autos ${
          vehiculoFrances.marca - vehiculoFrances.modelo
        }`
      );
    }

    if (plataDisponible >= vehiculoItaliano.precio) {
      alert(
        `${nombreCliente} Tiene disponible la compra de Auto ${
          vehiculoItaliano.marca + vehiculoItaliano.modelo
        }  y le sobra ${plataDisponible - vehiculoItaliano.precio} pesos`
      );
    } else {
      alert(
        `${nombreCliente} Lamentablemente no tiene acceso a la flota de autos ${
          vehiculoItaliano.marca + vehiculoItaliano.modelo
        } `
      );
    }
  } else {
    alert(
      `${nombreCliente} Lamentablemente no tiene el dinero suficiente para la compra de uno de nuestros vehiculos`
    );
  }
}

compraDeVehiculo();
