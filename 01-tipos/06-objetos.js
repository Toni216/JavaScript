let personaje = {
    nombre: "Satoru Gojo",
    anime: "Jujutsu Kaisen",
    edad: 28,
};
console.log(personaje)
console.log(personaje.nombre)
console.log(personaje.edad)
console.log(personaje.anime)

personaje.edad = 21;

console.log(personaje)

delete personaje.anime;

console.log(personaje)