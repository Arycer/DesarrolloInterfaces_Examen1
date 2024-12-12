// Michel Mendoza Sousa-Carvalho
// Ejercicio 2

// Crear clase Bicicleta con propiedades marca, modelo y referencia (privada)
// Crear getter nombreCompleto, devolviendo la mara, modelo y referencia
class Bicicleta {
    constructor(marca, modelo, referencia) {
        this.marca = marca;
        this.modelo = modelo;
        this.#referencia = referencia;
    }

    #referencia; // Definir el valor privado para la referencia

    nombreCompleto() {
        return `${this.marca} ${this.modelo} ${this.#referencia}`;
    }
}

// Crear clase de BicicletaMontana que extienda a Bicicleta y añada
// las propiedades nPlatos, nPinones, nAmortiguadores
class BicicletaMontana extends Bicicleta {
    constructor(marca, modelo, referencia, nPlatos = 0, nPinones = 0, nAmortiguadores = 0) {
        super(marca, modelo, referencia); // Llamada al constructor de la clase padre
        this.nPlatos = nPlatos;
        this.nPinones = nPinones;
        this.nAmortiguadores = nAmortiguadores;
    }

    // Sobreescribir el método nombreCompleto para agregar los nuevos campos
    nombreCompleto() {
        return super.nombreCompleto() + ` ${this.nPlatos}_${this.nPinones}_${this.nAmortiguadores}`;
    }
}

// Crear objeto de BicicletaMontana y recorrer todas sus propiedades
const bici = new BicicletaMontana("Mondraker", "Podium", 2010, 3, 7, 1);

console.log("d) Propiedades usando un iterador");
for (propiedad in bici) {
    console.log(`Propiedad: ${propiedad}, Valor: ${bici[propiedad]}`);
}

// Lo mismo usando métodos de clase
console.log("e) Propiedades usando métodos de clase");
Object.keys(bici).forEach(propiedad => {
    console.log(`Propiedad: ${propiedad}, Valor: ${bici[propiedad]}`);
});

// Sobreescribir el método nombreCompleto para agregar los nuevos campos
console.log("f) Nombre completo de la clase BicicletaMontana: ", bici.nombreCompleto())

