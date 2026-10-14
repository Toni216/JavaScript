/**
 * 2.1 Declara una constante `MAX_JUGADORES` con valor 20 e intenta cambiarla.
 * Copia en un comentario el mensaje de error exacto.
 */

const MAX_JUGADORES = 20;

// MAX_JUGADORES = 21; 
/**
 * Uncaught TypeError: Assignment to constant variable.
 * at 02-ej-costantes.js:3:15
 */

/**
 * 2.2  Intenta declarar una constante sin valor (`const loader;`). 
 * ¿Qué pasa? ¿Por qué tiene sentido que con `let` sí se pueda y con `const` no?
 */

// const loader;
//porque al ser const no se puede cambiar el valor que hay supongo.

/**
 * 2.3 Revisa este código y cambia cada `let` por `const` donde se pueda. 
 * Justifica las que dejas como `let`.
 */

const nombreMod = "PrefixTag";
let descargas = 100;
const loader = "forge";
descargas = descargas + 50;
const mensaje = nombreMod + " tiene " + descargas + " descargas";
console.log(mensaje);

// dejo descargas con let porque es el que se reasigna, el resto no.

/**
 * 2.4 Predecir: ¿qué líneas dan error?
 * 
 * const servidor = { nombre: "CipolloLand", jugadores: 5 };
 * servidor.jugadores = 6;
 * servidor.version = "1.20.1";
 * servidor = { nombre: "Otro" };
 */

// el que da error es el último, servidor = { nombre: "Otro" }; 
// la forma correcra de reasignar son las otras dos.     


/**
 * 2.5 Investiga `Object.freeze()`. 
 * Aplícalo al objeto de 2.4 e intenta cambiar `jugadores`. 
 * ¿Qué pasa? ¿En qué se diferencia de lo que hace `const`?
 */


 const servidor = Object.freeze({ nombre: "CipolloLand", jugadores: 5 });
 servidor.jugadores = 6;
 servidor.version = "1.20.1";

 console.log(servidor)

 // No cambia absolutamente nada, pero no da error al intentar cambiarlo.
 /**
  * La diferencia con const es que const congela las propiedades y 
  */