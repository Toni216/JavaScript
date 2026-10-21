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
    return jugador === "MODERADOR" ? true : false
    || jugador === "OWNER" ? true : false
    || jugador === "ADMIN" ? true : false;
}

function puedeApagarServer(jugador) {
    return jugador === "ADMIN" ? true : false
    || jugador === "OWNER" ? true : false;
}

const jugador1 = "moderador";
const jugador2 = "jugador";
const jugador3 = "Admin";
console.log("Jugador 1: /ban -> ", puedeBan(jugador1.toUpperCase()), "/stop -> ", puedeApagarServer(jugador1.toUpperCase()));
console.log("Jugador 1: /ban -> ", puedeBan(jugador2.toUpperCase()), "/stop -> ", puedeApagarServer(jugador2.toUpperCase()));
console.log("Jugador 1: /ban -> ", puedeBan(jugador3.toUpperCase()), "/stop -> ", puedeApagarServer(jugador3.toUpperCase()));

// R3
const mods = 50;
const menos50 = mods < 50;
const desdeCincuentaHasta150 = mods >= 50 && mods < 150;
const desde150Hasta250 = mods >= 150 && mods <= 250;
const mas250 = mods > 250;

console.log("Mods: ", mods);
console.log("¿4 GB?: ", menos50);
console.log("¿6 GB?: ", desdeCincuentaHasta150);
console.log("¿8 GB?: ", desde150Hasta250);
console.log("¿No soportado?: ", mas250);

const ramRecomendada = mods < 50 ? "4 GB" 
: mods >= 50 && mods < 150 ? "6 GB"
: mods >= 150 && mods <= 250 ? "8 GB"
: "No soportado";

console.log(ramRecomendada);
