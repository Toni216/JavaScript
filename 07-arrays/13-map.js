const usuarios = [
    { edad: 17, nombre: 'Toni' },
    { edad: 13, nombre: 'Paco' },
    { edad: 25, nombre: 'Manu' },
    { edad: 32, nombre: 'Ivan' },
];

const lista = usuarios
    .filter(u => u.edad > 17)
    .map(u => `<li>${u.nombre}</li>`);
const html = `<ol>${lista.join('')}</ol>`;
console.log(html);

// const mapped = usuarios.map(u => ({
//     ...u,
//     mayor: u.edad > 17,
// }));

// console.log(mapped);
