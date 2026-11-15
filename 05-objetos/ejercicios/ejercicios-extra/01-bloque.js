"use strict"
// 1.1

// const mod = { nombre: "PrefixTag", descargas: 100 }; 
// const otro = mod;
// otro.descargas = 200; 
// console.log(mod.descargas); // 200 V

// 1.2 
// function renombrar(m) {
//   m = { nombre: "Nuevo" };
// }
// function sumarDescarga(m) {
//   m.descargas++;
// }

// const mod = { nombre: "DGTF", descargas: 10 };
// renombrar(mod);
// sumarDescarga(mod);
// console.log(mod); // nombre: "DGTF" descargas: 11 V 
// La función sumarDescarga añade el varlor al hacerlo con . al contrario que renombrar, al hacerlo con = solo crea otro elemento.

// 1.3
// const mod = { nombre: "Sodium", autor: { nombre: "Jelly" } };
// const copia = { ...mod };
// copia.nombre = "Iris";
// copia.autor.nombre = "Coderbot";
// console.log(mod.nombre, mod.autor.nombre); // Iris Coderbot X Sodium Coderbot

// 1.4 
// const base = { loader: "forge", version: "1.20.1" };
// const resultado = Object.assign({}, base, { version: "1.21" }, { loader: "fabric" });
// console.log(resultado); // { { loader: "forge", version: "1.20.1" } { version: "1.21"} { loader: "fabric" }} X {loader: 'fabric' version: '1.21'}
// // pensé que con {} creabas un objeto, con base metias un objeto dentro del objeto y luego pues se ve lo que hice xd
// // lo que hace es básicamente meter los valores del objeto base dentro de su propio objeto y con el resto cambia los valores.
// console.log(base); // { loader: "forge", version: "1.20.1"} V

// 1.5
// const base = { loader: "forge" };
// const nuevo = Object.assign(base, { loader: "fabric" });
// console.log(base.loader, nuevo === base); // { loader: "forge" } false X fabric true
// vale aquí no tenía el {} así que los cambios fueron en el objeto base xd

// 1.6
const mod = Object.freeze({ nombre: "Create", versiones: ["1.19.2"] });
// mod.nombre = "Otro";
mod.versiones.push("1.20.1");
console.log(mod.nombre, mod.versiones); // "Create ["1.19.2"] X también mete el "1.20.1", lo pensaba pero no estaba seguro xd.
// con el use strict arriba da error locura