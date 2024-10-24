function inicioJuego() {
  alert(
    "Pre-entrega 1, Alumno Federico Furgiuele. Javascript en Coderhouse\n\n" +
      "Bienvenido, este es el alfa del juego, todavía no tiene nombre.\n" +
      "Los gráficos ni idea cómo implementarlos.\n" +
      "Espero que te diviertas.\nComencemos"
  );
}

function mostrarMenuPrincipal() {
  const opcionesDisponibles = ["1", "2", "3", "4"];
  let opcion;
  while (true) {
    opcion = prompt(
      "Menú Principal\n" +
        "1. Observar la bomba\n" +
        "2. Leer el manual\n" +
        "3. Desarmar la bomba\n" +
        "4. Huir como un cobarde (Salir)\n" +
        "Elija una opción: "
    );

    if (opcionesDisponibles.includes(opcion)) {
      break;
    } else {
      alert("Por favor, ingrese una opción válida (1, 2, 3 o 4)");
    }
  }
  return opcion;
}

function randomizar() {
  let valorRandom = Math.floor(Math.random() * 4);
  return valorRandom;
}

function configurarBomba(configuracionBomba) {
  let bombaElegida;
  switch (configuracionBomba) {
    case 0:
      bombaElegida = ["rojo", "verde", "azul"];
      break;
    case 1:
      bombaElegida = ["verde", "azul", "rojo"];
      break;
    case 2:
      bombaElegida = ["azul", "rojo", "verde"];
      break;
    default:
      bombaElegida = ["verde", "rojo", "azul"];
      break;
  }
  return bombaElegida;
}

function configurarEscenario(configuracionEscenario) {
  let escenarioElegido;
  switch (configuracionEscenario) {
    case 0:
      escenarioElegido =
        "Jefe del Operativo:-\n\n" +
        "Los niños y docentes están en el gimnasio encerrados y la bomba está instalada de forma que bloquea la única salida.\n" +
        "No hay nadie mejor para este trabajo, estamos en tus manos.";
      break;
    case 1:
      escenarioElegido =
        "Jefe del Operativo:-\n\n" +
        "Tenemos un 1070 en proceso, qué agradable volver a verte.\n" +
        "No podrían haber enviado a nadie mejor, la bomba está en el primer piso del hospital.\n" +
        "En el área de terapia intensiva, no es por meterte presión, pero creo que si explota...\n\n" +
        "Se va a venir todo abajo.\n\n\n Suerte, capo";
      break;
    case 2:
      escenarioElegido =
        "Jefe del Operativo:-\n\n" +
        "Está en el centro de convenciones, pudimos evacuar a la mayoría de la gente, pero...\n\n" +
        "En los pisos superiores quedaron atrapadas unas monjas que estaban en una despedida de soltera. Tememos que la explosión comprometa los cimientos.\n\n" +
        "Como siempre, estamos en tus manos, héroe.";
      break;
    default:
      escenarioElegido =
        "Jefe del Operativo:-\n\n" +
        "Al fin, qué bueno verte por acá.\n" +
        "La bomba está bajo el escenario, uno de los encargados de mantenimiento la encontró mientras instalaban los equipos de sonido.\n" +
        "Que los míticos AC/DC toquen hoy depende pura y exclusivamente de vos.\n" +
        "Bueno, eso y las vidas de los inocentes que están en el estadio. No podemos esperar que terminen la evacuación.\n" +
        "Hay que actuar ahora. Suerte, muchacho, la vas a necesitar. Yo me voy a la mierda.";
      break;
  }
  return escenarioElegido;
}

function mirarBomba(bomba) {
  alert(
    "Con mucho cuidado y delicadeza retiras la tapa de la bomba.\n" +
      "Entonces observas que el Detonante está conectado a la Carga explosiva con un cable " +
      bomba[0] +
      " y el Contador está conectado al Detonante con un cable " +
      bomba[1] +
      ".\nA su vez un cable " +
      bomba[2] +
      " conecta la Carga explosiva al Contador."
  );
}

function leerManual(bomba) {
  alert(
    "Podría armar un menú con diferentes tipos de bombas en esta sección y que tengas que leer aburrida información innecesaria pero esto es un prototipo así que te voy a simplificar las cosas."
  );
  alert("Este es el orden para cortar: ");
  for (let i = 0; i < 3; i++) {
    alert("Corta " + bomba[i]);
  }
  alert("Y con eso salvas el día.");
}

function desarmarBomba(bomba) {
  alert(
    "Así que tenemos un valiente, ya no se puede volver atrás espero que hayas leído el manual.\n"
  );
  let cables = [];
  let cortarCable;
  let cableDisponible = ["rojo", "verde", "azul"];

  for (let i = 0; i < 3; i++) {
    if (cableDisponible.length === 1) {
      while (true) {
        cortarCable = prompt(
          "Y ahora, corta el cable color " + cableDisponible[0] + "?"
        ).toLowerCase();
        if (cortarCable === cableDisponible[0]) {
          cables.push(cortarCable);
          break;
        } else {
          alert(
            "Por favor, corta el cable " +
              cableDisponible[0] +
              " correctamente."
          );
        }
      }
    } else {
      while (true) {
        cortarCable = prompt(
          "¿Qué cable cortamos?\n¿" + cableDisponible.join(", ") + "?"
        ).toLowerCase();
        if (cableDisponible.includes(cortarCable)) {
          cables.push(cortarCable);
          cableDisponible.splice(cableDisponible.indexOf(cortarCable), 1);
          break;
        } else {
          alert(
            "Por favor, ingrese uno de los cables disponibles: " +
              cableDisponible.join(", ") +
              "."
          );
        }
      }
    }
  }

  if (sonIguales(bomba, cables)) {
    alert("¡ LO LOGRASTE, SALVASTE EL DÍA !");
  } else {
    alert("¡¡¡¡¡ BOOOOOOOOOM !!!!!");
  }
}

function sonIguales(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
}

inicioJuego();
alert(configurarEscenario(randomizar()));
let bombaMortal = configurarBomba(randomizar());

while (true) {
  let eleccion = mostrarMenuPrincipal();
  if (eleccion === "1") {
    mirarBomba(bombaMortal);
  } else if (eleccion === "2") {
    leerManual(bombaMortal);
  } else if (eleccion === "3") {
    desarmarBomba(bombaMortal);
    break;
  } else {
    alert(
      "Tratando de escapar, la bomba detonó y moriste en el acto.\n\nFin del juego.\n\n\n¡COBARDE!"
    );
    break;
  }
}
