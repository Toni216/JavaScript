/**
 * 9.1 En un comentario: 
 * ¿qué diferencia hay entre _parámetro_ y _argumento_? 
 * Señala cuál es cuál en `function saludar(nombre) {...}` y `saludar("Toni")`.
 */

function saludar(nombre) {
    return "hola " + nombre; // nombre es un parametro
}

saludar("Toni"); // "Toni" es un argumento

/**
 * 9.2 Predecir ¿qué imprime cada línea?
 * 
 * function describir(nombre, loader) {  
 *  return nombre + " para " + loader;
 * }
 * console.log(describir("PrefixTag", "forge")); // esto devuelve PrefixTag para forge
 * console.log(describir("PrefixTag")); // esto devuelve PrefixTag para X tenia dudas, pero elegí la mala
 * console.log(describir("PrefixTag", "forge", "1.20.1")); // esto devuelve PrefixTag para forge
 */

// function describir(nombre, loader) {  
//     return nombre + " para " + loader;
// }

// console.log(describir("PrefixTag", "forge")); // esto devuelve PrefixTag para forge
// console.log(describir("PrefixTag")); // esto devuelve PrefixTag para undefined
// console.log(describir("PrefixTag", "forge", "1.20.1")); // esto devuelve PrefixTag para forge

/**
 * 9.3 Arregla la función anterior para que, si no se pasa `loader`, use `"forge"` por defecto (busca _default parameters_).
 */

function describir(nombre, loader = 'forge') {
    return nombre + " para " + loader;
}

console.log(describir("PrefixTag", "neoforge"));
console.log(describir("PrefixTag"));

/*
9.4 Predecir: ¿qué imprime cada `console.log` y por qué son distintos los dos casos? 
Relaciónalo con 1.4 y 6.4.

function subirDescargas(numero, mod) {
  numero = numero + 1;
  mod.descargas = mod.descargas + 1;
}
let contador = 10;
const miMod = { descargas: 10 };
subirDescargas(contador, miMod);
console.log(contador); // 10
console.log(miMod.descargas); // 10 X es 11
 */

function subirDescargas(numero, mod) {
    console.log(numero, mod);
  numero = numero + 1;
  mod.descargas = mod.descargas + 1;
  console.log(numero, mod);
}
let contador = 10;
const miMod = { descargas: 10 };
subirDescargas(contador, miMod);
console.log(contador); // 10
console.log(miMod.descargas); // 11

// No sé como relacionarlos con esos casos

/* Voy a intentar explicar que hace a ver si me he enterado de este.

- declaramos la funcion subirDescargas, entre parentesis tenemos a numero y mod (no sé porqué ambos son números)
- dentro de esta el numero es sumado a 1 y mod.descargas igual 
- declaramos la variable contador que vale 10
- declaramos el objeto miMod y dentro tenemos descargas que vale 10
- usamos subirDescarga y añadimos contador que vale 10 y miMod que vale 10 también
- imprimimos contador, que al ser primitivo su flecha sigue apuntando al 10, no se ha modificado su caja.
- imprimimos miMod.descargas y aquí si que se suma, sigo sin entender esto, porqué aquí se suma :(
*/
/*
9.5 Escribe una función `resumen` que reciba **un objeto mod** 
como único parámetro y devuelva `"PrefixTag (forge): 1500 descargas"`. 
¿Qué ventaja tiene recibir un objeto frente a recibir tres parámetros sueltos?
*/

function resumen(mod) {
    
    return mod.nombre + ' (' + mod.loader + '): ' + mod.descargas + ' descargas';
}

const mod1 = {
    nombre: 'PrefixTag',
    loader: 'forge',
    descargas: 1500,
}

console.log(resumen(mod1))