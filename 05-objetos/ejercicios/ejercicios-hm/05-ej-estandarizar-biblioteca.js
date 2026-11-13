const libreria = [
    { titulo: 'Libro A', autor: 'Autor A', categoria: 'Ficcion' },
    { titulo: 'Libro A', autor: 'Autor b', añoPublicacion: 2021, numPaginas: 300 },
    { titulo: 'Libro C', categoria: 'Historia', numPaginas: 150 },
]

for (const libro of libreria) {
    if (!("titulo" in libro)) {
        libro.titulo = null;
    }
    if (!("autor" in libro)) {
        libro.autor = null;
    }
    if (!("categoria" in libro)) {
        libro.categoria = null;
    }
    if (!("añoPublicacion" in libro)) {
        libro.añoPublicacion = null;
    }
    if (!("numPaginas" in libro)) {
        libro.numPaginas = null;
    }
    console.log(libro);
}

