// 1.1
const versiones = ["1.19.2", "1.20.1"];
const r = versiones.push("1.21");
console.log(r, versiones); // [1.19.2, 1.20.1, 1.21] [1.19.2, 1.20.1] X 3 [1.19.2, 1.20.1, 1.21]
// ????????????????????

const loaders = ["forge", "neoforge", "fabric", "quilt"];
const quitados = loaders.splice(1, 2);
console.log(quitados, loaders); // ["neoforge", "fabric"] ["forge", "quilt"] V

// 1.3 
const letras = ["a", "b", "c", "d"];
const trozo = letras.slice(1, 3);
console.log(letras, trozo); // ["a"] ["b", "c", "d"] X ['a', 'b', 'c', 'd'] ['b', 'c'] 

// 1.4
const nombres = ["Sodium", "Create", "Iris", "DGTF"];
const ordenados = nombres.sort();
console.log(nombres, ordenados === nombres); // ["Create", "DGTF", "Iris", "Sodium"] false X ["Create", "DGTF", "Iris", "Sodium"] true
// supongo que lo haría con un bucle e if (?) con arrow function o sort pero a, b y ternario.

// 1.5
console.log([100, 25, 3, 1000].sort()); // porq solo ven el número de la izquierda, al tener un 1 y un 2 pues van antes.

// 1.6
const pack = ["Create", "Sodium"];
const mismo = pack;
const backup = [...pack];
pack.length = 0;
console.log(pack, mismo, backup); // [] [] ["Create", "Sodium"] V

// 1.7
// const lista = [{ nombre: "Iris" }];
// console.log(lista.indexOf({ nombre: "Iris" })); // 0 X -1
// console.log(lista.includes(lista[0])); // true

// 1.8
const lista = [{ id: 1, descargas: 10 }];
const encontrado = lista.find(m => m.id === 1);
encontrado.descargas = 999;
console.log(lista[0].descargas); // 999

// 1.9
const original = [{ nombre: "Sodium", activo: true }];
const copia = [...original];
copia[0].activo = false;
copia.push({ nombre: "Iris", activo: true });
console.log(original); // nombre: "Sodium" activo: false