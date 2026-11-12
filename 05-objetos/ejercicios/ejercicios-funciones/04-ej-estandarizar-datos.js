const array = [
    { nombre: 'Paco', titulo: 'Pacopro', loaders: '1.20.1' },
    { nombre: 'Jasja', titulo: 'Lo jasja', descargas: 5000 },
    { nombre: 'Prepu', loaders: '1.20.1', descargas: 0 },
]

for (const campo of array) {
    if (!("titulo" in campo)) {
        campo.titulo = null;
    }
    if (!("loaders" in campo)) {
        campo.loaders = null;
    }
    if (!("descargas" in campo)) {
        campo.descargas = null;
    }
    if (!("slug" in campo)) {
        campo.slug = null;
    }
    if (!("versiones" in campo)) {
        campo.versiones = null;
    }
    console.log(campo);
}