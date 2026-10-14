/**
 * 5.1 Escribe un comentario de una línea y uno de varias líneas. 
 * Luego "desactiva" una línea de código comentándola y comprueba que ya no se ejecuta.
 */

// este es sencillo 
/**
 * hola
 * saludos
 */

// console.log("hola")

/**
 * 5.2 Estos comentarios son malos. Explica por qué y reescríbelos
 */

/**
 * // declaro variable
 * let d = 1500;
 * este comentario es malo porque es algo que se puede ver en el código y el nombre de la variable no ayuda nada a saber que es.
 * sería mejor borrarlo y cambiar la de por descargas: let descargas = 1500;
 */
/**
 * sumo 1d = d + 1;
 * aquí simplemente es mejor no poner nada, es lo mismo de antes, te dice lo que puede ver en el código
 * cambiar las variables por descarga de nuevo xd
 */
/**
 * const x = d * 0.7; // calculo
 * este también lo quitaría, no veo aquí nada que merezca la pena señalar xd
 * si acaso cambiar el nombre de las variables.
 * 
 * cambiar el calculo y el comentario por: 
 * // el 0.7 es el porcentaje de diferencia a mi favor que me llevo de dinero, si en un futuro está en la API de modrinth se cambia
 * const DINERO_MODS = descargas * 0.7 o algo así
 */
// casi, sería mejor ponerlo tal que 
// const GANANCIA_AUTOR = 0.7;
// const ganancias = descargas * GANANCIA_AUTOR;

/**
 * 5.3 Vuelve a uno de tus ejercicios anteriores y añade un comentario que explique porqué (no un qué).
 * Si no encuentras ninguno que haga falta, explica elp porqué el código ya se entiende solo.
 *
 */

// en parseInt ponemos un 10 detrás del primer parámetro para que sepa que es decimal y no binario u otro sistema numérico.
// let descargasNumero = parseInt(descargasTexto, 10);
// console.log(typeof descargasNumero)
// console.log(descargasNumero)




/**
 * 5.4 Investiga que es JSDoc. 
 * Guarda este ejercicio cuando termines el bloque 8 y
 * documenta con JSDoc una de tus funciones (descripción, @param, @returns)
 */

/**
 * JSDoc es una herramienta y un lenguaje de marcado basado en comentarios
 * estructurados que permite documentar código fuente en JavaScript.
 */

// Puse un ejemplo porque tenía curiosidad de que como se utilizaba.
/**
 * Suma dos números.
 * 
 * @param {number} a - El primer número
 * @param {number} b - El segundo número
 * @returns {number} El resultado de la suma
 */
function sumar(a, b) {
    return a + b;
}