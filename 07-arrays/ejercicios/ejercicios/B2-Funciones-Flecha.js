// 2.1
const doble = n => { n * 2 };
console.log(doble(4)); // 8 X undefined

// 2.2
const crearMod = nombre => nombre;
console.log(crearMod("Iris")); // undefined V
// V tambien ole

// 2.3
const nums = [1, 2, 3];
console.log(nums.map(n => { n * 10 })); // 10, 20, 30 X undefined 

// 2.4
const esForge =mod => mod.loader === "forge";

const nombreEnMayus =mod => mod.nombre.toUpperCase();

const sumar = (a, b) => a + b;