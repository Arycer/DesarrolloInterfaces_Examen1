const API_CHISTES = "https://api.chucknorris.io/jokes/random";
const contenedorChistes = document.getElementById("contenedorChistes");
const cuadroBusqueda = document.getElementById("busqueda");
const contador = document.getElementById("contador");
let chistes = [];

async function nuevoChiste() {
  const respuesta = await fetch(API_CHISTES);
  const chiste = await respuesta.json();

  chistes.push(chiste);
  imprimirChiste(chiste);
  actualizarContador();
}

function imprimirChiste(chiste) {
  const divChiste = document.createElement("div");
  const categorias = chiste.categories.reduce(
    (acumulador, categoria) => `${acumulador} ${categoria}`,
    ""
  );
  divChiste.innerHTML = `<div>
        <p>Chiste: ${chiste.value}</p>
        <p>Categorias: ${categorias}</p>
        <hr>
    </div>`;

  contenedorChistes.appendChild(divChiste);
}

function filtrarCategoria() {
  contenedorChistes.innerHTML = "";
  let busqueda = cuadroBusqueda.value;

  if (busqueda === "") {
    chistes.forEach((c) => imprimirChiste(c));
    return;
  }

  chistes
    .filter((chiste) => chiste.categories.includes(busqueda))
    .forEach((c) => imprimirChiste(c));

  actualizarContador((chiste) => chiste.categories.includes(busqueda));
}

function limpiar() {
  contenedorChistes.innerHTML = "";
  cuadroBusqueda.value = "";
  chistes.forEach((c) => imprimirChiste(c));
  actualizarContador();
}

function actualizarContador(filtro = _ => true) {
  contador.innerText = `Total de chistes: ${chistes.filter(filtro).length}`;
}
