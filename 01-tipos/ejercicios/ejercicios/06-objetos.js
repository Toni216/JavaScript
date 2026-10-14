/*
6.1 Crea un objeto mod con nombre, loader, descargas y activo (boolean).
Imprime el nombre con notación en punto y el loader con notación de corchetes.
*/
const mod = {
    nombre: 'PrefixTag',
    loader: 'forge',
    descargas: 1500,
    activo: true,
}

console.log(mod.nombre);
console.log(mod.loader);
console.log(mod.descargas);
console.log(mod['activo']);

/*
6.2 Sobre ese objeto: cambia las descargas, añade una propiedad autor y elimina activo.
Imprime el objeto tras cada paso.
*/
mod.descargas = 1600;
console.log(mod);

mod.autor = 'Toni';
console.log(mod);

delete mod.activo;
console.log(mod);

/*
6.3 Añade al mod una propiedad versiones que sea otro objeto con minecraft y mod (por ejemplo "1.20.1" y "1.2.0")
Imprime solo la versión de Minecraft.
*/

mod.versiones = {
    minecraft: '1.20.1',
    mod: '1.2.0',
}

console.log(mod.versiones.minecraft)

/*
6.4 Predecir: ¿qué imprime y por qué? Compáralo con el ejercicio 1.4.

const modA = {
    nombre: "PrefixTag",
    descargas: 100
};

const modB = modA;

modB.descargas = 999;
console.log(modA.descargas);

imprime 100, ya que lo único que se ha cambiado ha sido las descargas del modB y las del modA siguen siendo 100.
*/

const modA = {
    nombre: "PrefixTag",
    descargas: 100,
};

const modB = modA;

modB.descargas = 999;
console.log(modA.descargas);

// Pues ha imprimido 999, no entiendo porqué la verdad si me lo puedes explicar porfa.
// Lo comparo con el 1.4, supongo que será porque a diferencia del otro, este es un objeto y cambiará algo pero ns.

// La respuesta está en que está copiando la referencia a diferencia de el 1.4 que simplemente era un primitivo, 
// aquí simplemente la flechita apunta la referencia y al cambiarlo, como ambas flechas apuntan al mismo, imprimen lo mismo :D

/*
6.5 Tienes const clave = "loader";. Usa esa variable para leer la propiedad loader del objeto.
¿Por qué mod.clave no funciona? ¿Qué devuelve acceder a una propiedad que no existe?
*/

// pues porq mod.clave busca dentro de mod si hay algo que se llame clave y al no encontrarlo pues da undefined


const clave = "loader";
console.log(mod[clave]);