/**
 * 4.1 Declara una variable con un número, imprime su `typeof`, 
 * asígnale un string, imprime su `typeof`, 
 * y luego un boolean. ¿Da algún error? ¿Daría error en Java?
 */

let nombre = "paco";
nombre = 2;
nombre = true;
console.log(typeof nombre);
// no da ningún error
// en Java si, ya que en Java hay que especificar si es un String, int, etc.

/**
 * 4.2 Predecir: ¿qué imprime cada línea y de qué tipo es el resultado?

    console.log("5" + 1); imprime 51 y es string
    console.log("5" - 1); imprime 4 y es number
    console.log("5" * "2"); imprime 10 y es number
    console.log(true + 1); imprime 2 y es number
    console.log(1 + 2 + "3"); imprime 33 y es string
    console.log("1" + 2 + 3); imprime 123 y es string
    cuando un + toca un string se concatena automáticamente, va de izquierda a derecha 
 */


/**
 * 4.3 Un formulario te da las descargas como texto:
 * `const descargasTexto = "1500";`
 * Conviértelo a número de dos formas distintas y comprueba con `typeof` que ha funcionado. 
 * Luego súmale 500.
 */

const descargasTexto = "1500";
let descargas = Number(descargasTexto);
console.log(typeof descargas);
console.log(Number(descargasTexto));

let descargasNumero = parseInt(descargasTexto, 10);
console.log(typeof descargasNumero)
console.log(    descargasNumero)

console.log(descargas + 500);
console.log(descargasNumero + 500);

/**
 * 4.4 ¿Qué devuelve `Number("1.20.1")`?
 * ¿Y `Number("")`? ¿Y `Number("abc")`?
 * ¿Por qué una versión de Minecraft no se debe guardar como `number`?
 */

console.log(Number("1.20.1")) // NaN
console.log(Number("abc")) // NaN
console.log(Number("")) // 0

// Porque las versiones de Minecraft llevan puntos y al llevar 2 puntos no los consideran numeros, por eso le pone NaN.

/**
 * 4.5 Escribe en un comentario un ejemplo de bug real
 * que podría causar el tipado dinámico en una web de mods 
 * (por ejemplo, al sumar descargas).
 * Esto es exactamente lo que evitará TypeScript.
 */

// Bug: el número de descargas no se está sumando bien, debería ser 2000 y no 1500500, se concatenan.
// Bug: no aparece la version porque se ha guardado como 'number' y aparece como NaN

let numero = parseInt("1500abc",10);
console.log(numero); // da 1500, se come las letras.

let numero2 = parseInt("1.5",10);
console.log(numero2); // da 1, cuando ve el punto deja de mirar.

let numero3 = Number("1500abc",10);
console.log(numero3); // al añadir letras, pone NaN

let numero4 = Number("1.5",10);
console.log(numero4); // da 1.5 (?)