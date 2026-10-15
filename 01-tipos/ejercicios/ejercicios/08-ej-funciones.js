/**
 * 8.1 Escribe una función `saludar` que imprima `"Bienvenido a CipolloLand"`. Llámala tres veces.
 */

function saludar() {
    console.log("Bienvenido a CipolloLand");
}

saludar();
saludar();
saludar();

/**
 * 8.2 Escribe una función `formatearMod` que reciba un nombre y una versión y 
 * devuelva (no imprima) el texto `"PrefixTag v1.2.0"`. 
 * Guarda el resultado en una constante e imprímela.
 */

function formatearMod(nombre, version) {
    return nombre + " v" + version;
}

const nombreVersion = formatearMod('PrefixTag', '1.2.0');
console.log(nombreVersion)

/**
 * 8.3 Predecir: ¿qué imprime y por qué? ¿Cuál es la diferencia entre `console.log` y `return`?
    
    function sumar(a, b) {
    console.log(a + b);
    }
    const resultado = sumar(2, 3);
    console.log(resultado);

    Imprime 5, porque en la variable resultado se está declarando que es la suma de 2 más 3 por la función.
 */

    function sumar(a, b) {
    console.log(a + b); // aqui devuelve 5
    }
    const resultado = sumar(2, 3);
    console.log(resultado); // pero aqui devuelve undefined

    // al no ser un return no estás devolviendo un resultado, una función sin return devuelve undefined

/**
 * 8.4 Escribe una función `esVersionNueva` que reciba 
 * un número de versión mayor (por ejemplo 20 o 21) 
 * y devuelva `true` si es mayor o igual que 21. 
 * Sin `if`: una comparación ya devuelve un boolean.
 */

function esVersionNueva(v) {
    return v >= 21;
}

console.log(esVersionNueva(21));

/**
 * 8.5 Escribe `crearMod(nombre, loader)` que devuelva un objeto mod con esas dos propiedades y `descargas` a 0. 
 * Crea dos mods con ella y comprueba que cambiar las descargas de uno no afecta al otro. 
 * ¿Por qué aquí no pasa lo del ejercicio 6.4?
 */

function crearMod(nombre, loader) {
    return {
        nombre: nombre, // decido no usar un atajo constructor, que se vea bien a que se refiere cada cosa.
        loader: loader,
        descargas: 0,
    }
}

const mod1 = crearMod('Rajoy', 'forge');
const mod2 = crearMod('Sanz', 'fabric');
console.log(mod1, mod2)

mod1.descargas = 50;

console.log(mod1, mod2);

// Aquí es distinto porque se crean dos distintos y hay distintas flechas a puntando a distintos sitios.