const desorganizado = [0, 1, 0, 3, 12, 0, 5];

// const organizarArray = array => {
//     const ceros = [];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === 0) {
//             array.splice(i, 1);
//             ceros.push(0);
//         }
//     }
//     const organizado = [...desorganizado, ...ceros]
//     console.log(organizado);
// }

const moverCeroalFinal = arr => [
    ...arr.filter(n => n !== 0),
    ...arr.filter(n => n === 0)
]

console.log(moverCeroalFinal(desorganizado));