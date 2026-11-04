"use strict";

const versionServidor = "1.20.1";

const mods = [
    { nombre: "PrefixTag", loader: "forge", version: "1.20.1", descargas: 12500, activo: true },
    { nombre: "DGTF",      loader: "forge",  version: "1.20.1", descargas: 3400,  activo: false },
    { nombre: "Sodium",    loader: "fabric", version: "1.20.1", descargas: 45000, activo: true },
    { nombre: "Iris",      loader: "fabric", version: "1.19.2", descargas: 870,   activo: true },
    { nombre: "Create",    loader: "forge",  version: "1.19.2", descargas: 30000, activo: true },
];

const descargas = [ 12500, 3400, 45000, 870, 30000 ];

// Bloque 1
// 1.1
function etiquetaDescargas( descargas ) {
    if (descargas >= 100000) {
    console.log('Top');
    } else if (descargas >= 10000) {
        console.log('Popular')
    } else if (descargas >= 1000) {
        console.log('En auge');
    } else {
        console.log('Nuevo');
    }
}

etiquetaDescargas(100000);
etiquetaDescargas(99999);
etiquetaDescargas(1000);
etiquetaDescargas(0);
// ¿Esta versión o la de ternarios? Diría que esta es mejor (?)

// 1.2
const jugadores = [
    { jugador: 'Steve', whitelist: true, op: false, baneado: false, version: "1.20.1" },
    { jugador: 'Alex', whitelist: false, op: false, baneado: false, version: "1.20.1" },
    { jugador: 'Herobrine', whitelist: true, op: true, baneado: true, version: "1.20.1" },
    { jugador: 'Notch', whitelist: false, op: true, baneado: false, version: "1.19.2" },
    { jugador: 'Griefer', whitelist: false, op: false, baneado: true, version: "1.20.1" },
]

function mensajeLogin(jugador, versionServidor) {
    if ( jugador.baneado ) {
        console.log('Estás baneado');
    } else if ( !jugador.whitelist && !jugador.op ) {
        console.log('No estás en la whitelist')
    } else if ( versionServidor !== jugador.version ) {
        console.log('Versión incorrecta: necesitas la ' + versionServidor);
    } else {
        console.log('¡Bienvenido! ' + jugador.jugador);
    }
}

for (let i = 0; i < jugadores.length; i++) {
    mensajeLogin(jugadores[i], '1.20.1');
}

// 1.3  
// function mensajeLogin2(jugador, versionServidor) {
//     if ( !jugador.whitelist && !jugador.op  ) {
//         console.log('No estás en la whitelist');
//     } else if (jugador.baneado) {
//         console.log('Estás baneado')
//     } else if ( versionServidor !== jugador.version ) {
//         console.log('Versión incorrecta: necesitas la ' + versionServidor);
//     } else {
//         console.log('¡Bienvenido! ' + jugador.jugador);
//     }
// }

// for (let i = 0; i < jugadores.length; i++) {
//     mensajeLogin2(jugadores[i], '1.20.1');
// }

// el que cambia debería ser Herobrine (?) X es el último

// Bloque 2

// 2.1 - debería imprimir B X ha imprimido B C porque no hay un break los case a excepcion del ultimo.
const loader = "fabric";
switch (loader) {
  case "forge":
    console.log("A");
  case "fabric":
    console.log("B");
  case "quilt":
    console.log("C");
    break;
  default:
    console.log("D");
}

// 2.2 - Imagino que compara con === y saldrá número V
const opcion = 1;
switch (opcion) {
  case "1":
    console.log("texto");
    break;
  case 1:
    console.log("número");
    break;
}

// 2.3
let opcionMayus = "fabric";
let loaderMayus = opcionMayus.toUpperCase();

function iconoLoader(loader) {
    switch (loader) {
      case "FORGE":
        console.log("🔨");
        break;
      case "NEOFORGE":
        console.log("🦊");
        break;
      case "FABRIC":
        console.log("🧵");
      case "QUILT":
        console.log("🧵");
        break;
      default:
        console.log("D");
    }
}

iconoLoader(loaderMayus)

// Bloque 3
let a = 10;
while (a < 5) {
  a++;
}
 console.log(a); // 3.1 - Solo entra en el bucle si a es menor a 5, al a ser 10, es mayor y no entra, por lo que devuelve 10

let b = 10;
do {
  b++;
} while (b < 5);
console.log(b); // 3.2 - Aqui si que se ha sumado, se ejecutó 1 vez el bucle y sale 11.

// 3.3 - do while a diferencia de while ejecuta el código al menos una vez aunque no cumpla la condición, ya que lo revisa una vez ejecutado.

// 3.4 
let descargasMod = 1500;
let meses = 0;
while (descargasMod <= 100000) {
  descargasMod *= 2;
  meses++;
}

console.log('Meses:', meses, 'Descargas:', descargasMod);

// no sabría explicarme

// 3.5
let maxIntentos = 5;
let intentos = 1;
let intentoExitoso = 3;
let resultado;

do {
  if (intentoExitoso === intentos) {
    resultado = 'conectado';
  } else {
    resultado = 'fallo'
  }

  console.log('Intento', intentos, ':', resultado);
  intentos++;
} while (resultado === 'fallo' && intentos <= maxIntentos);

if (resultado === 'fallo' && intentos >= maxIntentos) {
  console.log('No se pudo conectar');
}

// Bloque 4
for (let i = 0; i < 10; i += 3) {
  console.log(i);
}
// 4.1 - 0 3 6 9 V

for (let i = 3; i > 0; i--) {
  console.log("Reinicio en " + i);
}
// 4.2 - Reinicio en 3 Reinicio en 2 Reinicio en 1 V

// for (let i = 0; i < 3; i++) {}
// console.log(i);
// 4.3 - No está dentro del bucle for así que no debería imprimir nada. X Da error porque no encuentra la i al estar dentro del bucle.

// for (const j = 0; j < 3; j++) {
//   console.log(j);
// }

// 4.4 - Si V

//4.5 

const listarVersiones = [ "1.18.2", "1.19.2", "1.20.1", "1.20.4" ];
let i = 1;
for (const version of listarVersiones) {
  console.log(i + ": ",version);
  i++;
}

// 4.6
let totalDescargas = 0;

for (let i = 0; i < descargas.length; i++) {
  totalDescargas += descargas[i];
}
console.log(totalDescargas);

let maximoDescargas = 0;

for (let i = 0; i < descargas.length; i++) {
  if ( maximoDescargas < descargas[i] )
    maximoDescargas = descargas[i];
} 
console.log(maximoDescargas);

// Bloque 5
// 5.1
const loaders = ["forge", "fabric"];
for (const i in loaders) {
  console.log(i, typeof i);
}
// 5.1 - forge string fabric string X 0 string 1 string

for (const letra of "Mod") {
  console.log(letra);
}
// 5.2 - M o d V No sabía que se puede hacer con las palabras.

// const mod = { nombre: "PrefixTag", loader: "forge" };
// for (const x of mod) {
//   console.log(x);
// }
// 5.3 (¿qué pasa?) - debería fallar porque eso es para los arrays no para los objetos V
// 5.4 - el for in para objetos y el for of para arrays

// 5.5 - 
let contarForge = 0;
let contarFabric = 0;
for (const contarPorLoader of mods) {
  if (contarPorLoader.loader === "forge") {
    contarForge++;
  } else {
    contarFabric++;
  }
}

console.log("Forge: " + contarForge + " - Fabric: " + contarFabric);


// 5.6 
for (const propiedad in mods[0]) {
  console.log(`${propiedad}: ${mods[0][propiedad]}`);
}
// este ejercicio no lo entiendo bien la vd, he tenido que mirar por internet.

// Bloque 6
// 6.1 
for (const nombresActivos of mods) {
  if (nombresActivos.activo) {
    console.log(nombresActivos.nombre);
  }
}

// no sé como implementar aquí continue ni el proque haría falta.

// 6.2 
for (const primerIncompatible of mods) {
  if (versionServidor !== primerIncompatible.version) {
    console.log("Primer incompatible: " + primerIncompatible.nombre);
    break;
  }
}