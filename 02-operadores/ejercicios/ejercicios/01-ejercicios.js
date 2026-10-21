// Bloque 1 - Aritmeticos
console.log(17 % 5); // 3 X Da 2
console.log(-7 % 3); // 0 X Da -1
console.log(2 ** 3 ** 2); // 64 X Da 512
console.log("8" - 3); // 5 V
console.log("8" + 3); // 83 V
console.log(+"1.20"); // undefinned X Da 1.2
console.log(+"1.20.1"); // undefinned X Da NaN
console.log(10 / 0); // NaN o Infinity ~ Da Infinity

// Bloque 2 - Incremento y asignación compuesta
let descargas = 5;
const a = descargas++; // a = 6, creo que da igual cuando incremente perooo X efectivamente si que incrementa luego.
const b = ++descargas; // b = 6, ha incrementado ya
console.log(a, b, descargas);   // 2.1 - 6 7 7 ~ 5 7 7

let mods = 10;
mods += 5; // 15
mods *= 2; // 30
mods -= mods % 7; // 24
console.log(mods); // 2.2 - Debería ser 24 ese es el resto X Da 28

let nombre = "Prefix"; 
nombre += "Tag"; // PrefixTag
nombre += 2; // PrefixTag2
console.log(nombre); // PrefixTag2 V

// Bloque 3 - Comparación
console.log("3.1 ",5 == "5");            // 3.1 - true V
console.log("3.2 ",5 === "5");           // 3.2 - false V
console.log("3.3 ",0 == false);          // 3.3 - true V
console.log("3.4 ","" == 0);             // 3.4 - false X -> == convierte tipos antes de comparar y "" convertido a numero es 0
console.log("3.5 ",null == undefined);   // 3.5 - false X -> JS tiene una regla especial: null y undefined solo son == a ellos
console.log("3.6 ",null === undefined);  // 3.6 - false V
console.log("3.7 ",NaN === NaN);         // 3.7 - true X -> los NaN no son iguales ante ellos mismos
console.log("3.8 ","10" < "9");          // 3.8  (pista: dos strings) - false X -> se compara el unicode al ser string 
console.log("3.9 ","10" < 9);            // 3.9 - false V
console.log("3.10 ","Forge" < "fabric");  // 3.10 (pista: mayúsculas vs minúsculas) - false X da true porque la F mayúscula va antes que la f
// 3.11 - con Number.isNaN()

// Bloque 4 - Lógicos &&, !!, !
console.log("4.1 ","Forge" || "Fabric");     // 4.1 - Forge V
console.log("4.2 ","" || "Fabric");          // 4.2 - Fabric V
console.log("4.3 ",0 && "Quilt");            // 4.3 - Quilt X 0 -> No me fijé en que era &&, al ser el primero falso se queda ahí
console.log("4.4 ",1 && "Quilt");            // 4.4 - 1 X Quilt -> Lo mismo que antes, al terminar pues se queda con el último
console.log("4.5 ",null || 0 || "");         // 4.5 - 0 X "" -> Ni idea xd de aqui al 4.8 todos me parecen rebuscados, puedes ponerme ejemplos que vaya a ver de verdad
console.log("4.6 ",!!"false");               // 4.6 - false X true -> Ni idea 2
console.log("4.7 ",!0 && !"");               // 4.7 - esto no se que es ni me lo encontraré jamás wtf X true XDDD -> Ni idea 3

const loader = "";
const texto = loader && loader.toUpperCase();
console.log("4.8 ",texto);                   // 4.8 - undefined X -> ""

// Bloque 5 - ?? frente a ||
const config = { descargas: 0, version: "", autor: null };

console.log(config.descargas || 100);   // 5.1 - 100 V
console.log(config.descargas ?? 100);   // 5.2 - 0 V
console.log(config.version || "1.20.1");// 5.3 - 1.20.1 V
console.log(config.version ?? "1.20.1");// 5.4 - "" V
console.log(config.autor ?? "Anónimo"); // 5.5 - Anonimo V
console.log(config.licencia ?? "MIT");  // 5.6 - MIT V
// No me suena haber dado ?? 

let limite = 0;
limite ||= 50;
console.log(limite);                    // 5.7 - 50 V

let maximo = 0;
maximo ??= 50;
console.log(maximo);                    // 5.8 - 0 V
// 5.9 Uso ?? en vez de || cuando 0, "" o false son valores válidos, porque || los trata como si no hubiera valor y los sustituye.

// Bloque 6 - Ternario y procedencia
const d = 1500;
console.log(d > 1000 ? "popular" : "nuevo");                    // 6.1 - popular V
console.log(d > 10000 ? "top" : d > 1000 ? "popular" : "nuevo"); // 6.2 - popularV

console.log(2 + 3 * 4);            // 6.3 - 14 V
console.log((2 + 3) * 4);          // 6.4 - 20 V
console.log(true || false && false); // 6.5 (¿qué se evalúa antes?) - creo que evalua antes los && y es true V
console.log(true || true && false); // 6.5.2 - debería dar de nuevo true, ya que devuelve el primero que haya
console.log("Total: " + 2 + 3);    // 6.6 - Total: 23 V
console.log("Total: " + (2 + 3));  // 6.7 - Total: 5 V

// Bloque 7 - Escribir funciones 

// 7.1
function esPar(numero) {
    return numero % 2 === 0;
}
console.log(esPar(21));

// 7.2 
function necesitaActualizar(versionMod, versionServidor) {
    return versionMod !== versionServidor;
}

console.log(necesitaActualizar("1.20.1","1.20.1"));

// ¿!= o !==? Es !== para comprobar tanto el tipo como el contenido.

// 7.3
function etiquetaDescargas(descargas) {
    return descargas >= 100000 ? "Top" 
    : descargas >= 10000 ? "Popular" 
    : descargas >= 1000 ? "En aunge" : "Nuevo";
}

console.log(etiquetaDescargas(100000))

// 7.4 

function nombreAutor(mod) {
    return mod.autor ?? "Desconocido";
}

const mod1 = {
    autor: "Toni", // He probado con dejar "" o simplemente borrar autor del todo.
    nombre: "Seco",
}

console.log(nombreAutor(mod1))

// 7.5 
function esCompatible(mod, loaderServidor) {
    return mod.activo && mod.loader.toUpperCase() === loaderServidor.toUpperCase();
}

const mod2 = {
    loader: "forge",
    activo: true,
}

console.log(esCompatible(mod2, "Forge"));

// Bloque 8 - Encuentra el bug
// 8.1
function esForge(loader) {
    return loader === "forge"; // se le estaba asignando otro valor xd
}
console.log(esForge("fabric"));

// 8.2
function descargasMostradas(mod) {
    return mod.descargas ?? "Sin datos"; // no era el adecuado
}
console.log(descargasMostradas({ descargas: 0 }));

// 8.3
const version = "1.20.1";
console.log(version > "1.9" ? "Version moderna" : "Version antigua");
// Imprime version antigua lo cual está mal >:(
// Deberia salir la version moderna pero como 1.9 es más grande que 1.20 pues ns que hacemos estoy locoo

// 8.4
const descargasTexto = "1500";
const total = Number(descargasTexto) + 500;
console.log(total > 1900 ? "Supera la meta" : "No llega"); // Antes daba true de casualidad, daba 1500500, lo convertimos a número y listo

// Reto final pospuesto, pero el Lo tengo si...
// 0 || 100 da 100 porque 0 es falsy y devuelve el último que es true jejejej
// 0 ?? 100 da 0 porque en la izquierda no hay ningún null o undefined
// claro los falsy y los trusthy
