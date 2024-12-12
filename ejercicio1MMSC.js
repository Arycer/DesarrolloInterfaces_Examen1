// Michel Mendoza Sousa-Carvalho
// Ejercicio 1

const miArray = ["hola", "hola", "adios", "adios", "buenas", "hi", "bye"]; // Array base del ejercicio

// Crear un array con 20 cadenas de caracteres aleatorias, llamado miArrayCadenas,
// concatenando entre 2 y 5 elementos de miArray separados por un espacio
const miArrayCadenas = [];
for (let i = 0; i < 20; i++) {
    let cantidadCadenas = Math.floor(Math.random() * 3) + 5;
    let cadena = "";
    
    for (let j = 0; j < cantidadCadenas; j++) {
        let cadenaAleatoria = Math.floor(Math.random() * miArray.length);
        cadena += miArray[cadenaAleatoria];

        if (j < cantidadCadenas - 1) {
            cadena += " ";
        }
    }

    miArrayCadenas.push(cadena);
}

console.log("a) Cadenas aleatorias separadas por un espacio: ", miArrayCadenas);

// Convertir miArrayCadenas en un array de arrays de cadenas
const arrayDeArrays = miArrayCadenas.map(cadena => cadena.split(" "));
console.log("b) Array de arrays de cadenas: ", arrayDeArrays);

// Aplanar el array anterior a un array de cadenas otra vez
const miArrayPlano = arrayDeArrays.flat();
console.log("c) Array aplanado: ", miArrayPlano);

// Filtrar las cadenas anteriores a solo las que comienzan con h o terminan en s
const miArrayFiltrado = miArrayPlano.filter(palabra => palabra.startsWith("h") || palabra.endsWith("s"));
console.log("d) Array filtrado: ", miArrayFiltrado);

// Desestructurar los tres primeros elementos de miArray y su resto
const [cad1, cad2, cad3, ...cadResto] = miArray;
console.log("e.1) Cadenas desestructuradas: ", { cad1, cad2, cad3 });

// Concatenar todas las cadenas en una sola
const miCadena = miArray.reduce((acumulador, palabra) => acumulador + palabra, "");
console.log("e.2) Resto: ", miCadena);

// Contar las repeticiones de las cadenas originales almacenando en un objeto
const repeticiones = miArray.reduce((acumulador, palabra) => {
    acumulador[palabra] = (acumulador[palabra] || 0) + 1;
    return acumulador;
}, {})
console.log("f) Repeticiones: ", repeticiones);
