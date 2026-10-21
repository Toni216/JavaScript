// R1 
const descargasCurseforge = 12500;
const descargasModrinth = 12500;
const descargasModrinthTexto = "12500";

console.log(descargasModrinth > descargasCurseforge);
console.log(descargasModrinth === descargasCurseforge);
console.log(descargasModrinthTexto === descargasCurseforge);
console.log(Number(descargasModrinthTexto) === descargasCurseforge);

// R2
function puedeBan(jugador) {
    return jugador = "moderador" || jugador = "admin" ||
}