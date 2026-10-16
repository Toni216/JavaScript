/*
Cambia cada let por const donde se pueda y justifica en un comentario las que dejes como let.
*/

// const mods = [];
// let total = 0; // esta variable cambiará constantemente y para hacer lo de más abajo hace falta tenerlo en let.
// const servidor = { nombre: 'Cipolloland', jugadores: 0 };

// mods.push('PrefixTag');
// mods.push('DGTF');
// servidor.jugadores = 5;
// total = total + 1500;
// let mensaje = `${servidor.nombre}: ${mods.length} mods`;

/*
Escribe añadirVersion(mod, version) que añada version al array mod.versiones. La función no devuelve nada

1. Create un mod con versiones: ["1.20.1"].
2. Llama a la función con "1.21".
3. Imprime mod.versiones fuera de la función.

En un comentario: ¿por qué se ve el cambio fuera si la función no devuelve nada?
Porque ambas flechas apuntan al mismo sitio, así que al hacer push se guarda.
*/

const miMod = { nombre: "PrefixTag", versiones: [ "1.20.1" ] };

function añadirVersion(mod, version) {
    mod.versiones.push(version);
}

const versionNueva = añadirVersion(miMod, "1.21");

console.log(miMod.versiones)

/*
Escribe vaciarVersiones(mod) que haga mod = { versiones: [] }.
Llámala con el mod del R2 e imprime sus versiones fuera.

Después cambiala para qeu sí vacíe las versiones del mod de fuera (pista: cambia lo que hay a la izquierda del '=').

En un comentario: ¿qué diferencia hay entre las dos versiones? creo que la primera estaba simplemente creando otro array.
*/

// function vaciarVersiones(mod) {
//     mod = { versiones: [] }
// }

// const prueba = vaciarVersiones(miMod);
// console.log(prueba)

function vaciarVersiones(mod) {
    mod.versiones = [];
}

vaciarVersiones(miMod);
console.log(miMod.versiones)

/*
const original = { nombre: "PrefixTag", descargas: 100 };

Crea copia, un objeto independiente con los mismos datos, sin escribir copia = original.
Cambia las descargas de copia y demuestra en console.log que original sigue en 100.

*/

const original = { nombre: "PrefixTag", descargas: 100 };
let copia = { nombre: "PrefixTag", descargas: 100 };

copia.descargas = 500;

console.log(original)
console.log(copia)

/*
Escribe dos funciones:
    - renombrarMutando(mod, nuevoNombre): cambia el nombre del mod recibido
    - renombrarCopiando(mod, nuevoNombre): no toca el mod recibido y devuelve 
    un objeto nuevo con el nombre camniado y el resto de datos iguales.

    Pruébalas con el mismo mod e imprime el original después de cada una. 
    ¿Cuál de las dos parece a cómo funciona toUpperCase? Ninguno, no?

    Esta segunda forma es la que usa react para actualizar el estado. 
*/
const mod1 = {nombre: "PrefixTag", loader: "forge"}
console.log(mod1)

const mod2 = {nombre: "DGTF", loader: "forge"}
console.log(mod2)

function renombrarMutando(mod, nuevoNombre) {
    mod.nombre = nuevoNombre;
}

renombrarMutando(mod1, "Paco")
console.log(mod1)

function renombrarCopiando(mod, nuevoNombre) {
  return { nombre: nuevoNombre, loader: mod.loader };
}

renombrarCopiando(mod2, "Rajoy")
console.log(mod2)

/*
    Escribe leerCampo(mod, campo) que devuelva el valor de la propiedad cuyo nombre llega en campo.

    Pruébala con "nombre", "loader", "autor" (que no exista). Antes de ejectuar, predice qué devuelve el último.
*/

const miMod2 = {
    nombre: 'Hola',
    loader: 'forge',
};

function leerCampo(mod, campo) {
    return mod[campo];
}

console.log(leerCampo(miMod2, "nombre"))
console.log(leerCampo(miMod2, "loader"))
console.log(leerCampo(miMod2, "autor")) // yo creo que saldrá undefined - Efectivamente.

/*
Partiendo de `const loaders = ["forge", "fabric"];`, y sin escribir índices a mano:

1. Añade `"neoforge"` al final.
2. Añade `"quilt"` al **principio** (busca `unshift`).
3. Quita el **último** (busca `pop`) y guarda en una constante el elemento quitado.
4. Imprime el array, el elemento quitado y el `length`.

Resultado esperado del array: `["quilt", "forge", "fabric"]`.
*/

const loaders = [ "forge", "fabric"];
// 1
loaders.push("neoforge");
// 2
loaders.unshift("quilt");
//3 
let loader = loaders.pop();
//4
console.log(loaders, loader, loaders.length)

/*
Este código debería imprimir `Total: 2000`. Arréglalo **sin cambiar** la primera línea y explica en un comentario qué pasaba.


const descargasFormulario = "1500";
const extra = 500;
const total = descargasFormulario + extra;
console.log("Total: " + total);

*/

const descargasFormulario = "1500";
const extra = 500;
const total = Number(descargasFormulario) + extra; // al tener comillas dobles, la variable de descargasFormulario era un String, se soluciona cambiandolo a numero y ya.
console.log("Total: " + total);

/*
const mods = [
  { nombre: "PrefixTag", loader: "forge", descargas: 1500 },
  { nombre: "DGTF", loader: "forge", descargas: 1000 },

1. Escribe `sumarDescarga(mod)` que sume 1 a las descargas del mod que recibe.
2. Llámala con `mods[0]` dos veces.
3. Guarda `const favorito = mods[1];` y llama a `sumarDescarga(favorito)`.
4. **Antes de ejecutar**, predice cuánto valen `mods[0].descargas` y `mods[1].descargas`. Después comprueba.
*/

const mods = [
  { nombre: "PrefixTag", loader: "forge", descargas: 1500 },
  { nombre: "DGTF", loader: "forge", descargas: 1000 },
];

function sumarDescarga(mod) {
    mod.descargas += 1;
}

sumarDescarga(mods[0]);
sumarDescarga(mods[0]);

const favorito = mods[1];
sumarDescarga(favorito);

console.log(mods[0])
console.log(favorito)