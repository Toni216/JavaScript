const usuarios = [
    { edad: 17, nombre: 'Toni' },
    { edad: 13, nombre: 'Paco' },
    { edad: 25, nombre: 'Manu' },
    { edad: 32, nombre: 'Ivan' },
];

const mayores = usuarios.filter(u => u.edad > 17);
const menores = usuarios.filter(u => u.edad < 18);

console.log(mayores)
console.log(menores)