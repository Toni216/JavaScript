/*
7.1 Crea un array loaders con "forge", "fabric", "neoforge". 
Imprime el primero, el último (sin escribir el número dos a mano
y cuántos hay.
*/
const loaders = ['forge', 'fabric', 'neoforge'];
console.log(loaders[0]);
const ultimoLoader = loaders.at(-1);
console.log(ultimoLoader);

console.log(loaders.length);

/*
7.2 Sobre ese array: añade "quilt", quita el primero, y cambia "fabric" por "Fabric"
Imprime el array tras cada paso.
*/

// loaders[3] = 'quilt';
loaders.push('quilt');
console.log(loaders);
// delete(loaders[0]);
loaders.shift();
console.log(loaders);
// loaders[1] = 'Fabric';
const posicion = loaders.indexOf('fabric');
loaders[posicion] = 'Fabric';
console.log(loaders);

/*
7.3 Predecir: ¿qué imprime cada línea?

const versiones = ["1.19.2", "1.20.1"];
console.log(versiones[5]); // devuelve undefined
console.log(typeof versiones); // array
console.log(versiones.length); // devuelve 2
versiones[4] = "1.21";
console.log(versiones.lengt);  //devuelve 5
*/

const versiones = ["1.19.2", "1.20.1"];
console.log(versiones[5]); // devuelve undefined > SI
console.log(typeof versiones); // array > NO, devuelve object
console.log(versiones.length); // devuelve 2 > SI
versiones[4] = "1.21"; 
console.log(versiones.length); // devuelve 5 > SI, porque lo has creado en la posicion 4 lo que deja 2 huecos undefined que se suman a su longitud.

/*
7.4 Si typeof no distingue un array de un objeto, ¿como compruebas que algo es un array?
Búscalo en MDN y pruébalo.

// se utiliza Array.isArray() en su lugar
*/

console.log(Array.isArray(versiones)); // devuelve true jeje.

/*
7.5 Crea un array mods con 3 objetos mod (nombre, loader, descargas).
Imprime el nombre del segundo y suma a mano las descargas de los tres en una variable total.
(Este array lo reutilizarás en la semana 2).
*/

// No entiendo bien este enunciado, está un poco raro creo

const mods = [
    { nombre: 'PrefixTag', loader: 'forge', descargas: 1500 },
    { nombre: 'Dont Go Too Far', loader: 'forge', descargas: 1000 },
    { nombre: 'Origins addon', loader: 'forge', descargas: 500 }
];

console.log(mods[1].nombre);
const total = mods[0].descargas + mods[1].descargas + mods[2].descargas;
console.log(total);
