/**
 * 1.1 Declara una variable `jugadoresOnline` con valor 0.
 * Súmale 3, luego réstale 1, e imprime el resultado tras cada cambio.
 */

let jugadoresOnline = 0;
console.log(jugadoresOnline);

jugadoresOnline = jugadoresOnline + 3;
console.log(jugadoresOnline);

jugadoresOnline = jugadoresOnline - 1;
console.log(jugadoresOnline);

/**
 * 1.2 Declara una variable sin asignarle valor e imprímela. 
 * ¿Qué sale? Asígnale después un valor e imprímela otra vez.
 */

let paco;
console.log(paco); //sale undefined

paco = 2;
console.log(paco); //sale un 2

/**
 * Tienes `let a = "forge";` y `let b = "fabric";`.
 * Intercambia sus valores (que `a` acabe valiendo `"fabric"` y `b` `"forge"`)
 * sin escribir los textos de nuevo.
 */

let a = 'forge';
let b = 'fabric';

console.log(a);
console.log(b);

const c = a; // c no cambia así que const es mejor, pero lo habitual sería temp o aux
a = b;
b = c;

console.log(a);
console.log(b);

/**
 * 1.4 Predecir: ¿qué imprime y por qué?
    let version = "1.20.1";let copia = version;version = "1.21";console.log(copia);
 */

    // imprime 1.20.1
    // porque el copia es igual a version antes de cambiar, cuando cambia ya se ha asignado cambio.

/**
 * Estos nombres de variable, ¿son válidos?
 * Di cuáles fallan y cuáles funcionan pero están mal elegidos, y propón uno mejor: 
 * `1version`, `mod-name`, `x`, `NumeroDeDescargas`, `let`, `numero_de_descargas`, `$precio`.
 */

// 1version: no es válido, no se puede poner un número primero en el nombre de una variable, mejor versionMinecraft.
// mod-name: no es válido JS lee el guion como una resta y da error, pero mejor modName para seguir la convencion
// x: valido, pero no te enteras a que referencia, mejor ponerle otro nombre
// NumeroDeDescargas: válido y con una de las 3 convenciones, aunque tiene un 'De' de más, pero yo prefiero numeroDescargas
// es válido pero en JS el PascalCase se reserva para clases. Para variables se usa camelCase
// let: no es válido, es una palabra reservada
// numero_de_descargas: válido, pero no sigue la convención, mejor como el que puse antes
// $precio: válido, pero mejor poner precio a secas o precioDolar yo creo.
