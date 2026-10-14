/** 
 * 3.1 Declara una variable de cada tipo: `string`, `number`, `boolean`, `undefined` y `null`.
 * Imprime el `typeof` de cada una. Hay un resultado raro: ¿cuál?
*/
let string = "Ramón";
let numero = 21;
let verdadero = true;
let indefinido;
let nulo = null;

console.log(typeof string)
console.log(typeof numero)
console.log(typeof verdadero)
console.log(typeof indefinido)
console.log(typeof null)

// el nulo, dice que es object, me lo explicaron pero no me acuerdo, tampoco creo que sea necesario acordarse del porqué.

/**
 * 3.2 Crea el texto `PrefixTag v1.2.0 (forge)` de dos formas: concatenando con `+` y con un _template literal_. 
 * Las partes (nombre, versión, loader) deben venir de variables.
 */

const nombre = "PrefixTag";
const version = "1.2.0";
const loader = "forge";

console.log(nombre + " v" + version + "(" + loader + ")")
console.log(`${nombre} v ${version} (${loader})`)

/**
 * 3.3 Predecir: ¿qué imprime cada línea?

    console.log(10 / 3);
    console.log(10 % 3);
    console.log(0.1 + 0.2);
    console.log(10 / 0);
    console.log("mod" * 2);
 */

// el resultado de la division, 3,3333?
// el resultado de eso, 3
// 0.3
// el resultad de la division
// ni idea

console.log(10 / 3);
    console.log(10 % 3);
    console.log(0.1 + 0.2);
    console.log(10 / 0);
    console.log("mod" * 2);

/**
 * 3.4 Explica con tus palabras, en un comentario, la diferencia entre `undefined` y `null`. 
 * Pon un ejemplo de mod donde usarías `null` a propósito.
 */

// undefined es simplemente algo que no está asignado aún pero que se espera que se asigne,
// null simplemente seguirá así, es como un valor por defecto o algo así.
// null en un mod se podría ver si un animal es tu mascota o si tienes algún efecto activo,
// si le haces click derecho a un animal y no es tu mascota no haces nada, por lo que puede haber algo 
// como mascota = null o en el efecto si no tienes nada activo, efectoActivo = null;

/**
 * 3.5 Predecir: ¿qué imprime y por qué? (Pista: los strings son primitivos.)
    let nombre = "prefixtag";
    nombre.toUpperCase();
    console.log(nombre);
    nombre[0] = "P";
    console.log(nombre);
 */

    // primero asignamos un valor a nombre
    // cambiamos a mayusculas el valor de nombre pero no lo imprimimos, por lo que no se cambia
    // imprimimos el nombre prefixtag
    // cambiamos la primera letra del nombre por una P mayúscula.
    // imprimimos el nombre Prefixtag