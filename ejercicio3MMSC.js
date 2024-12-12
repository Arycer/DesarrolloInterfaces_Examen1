const API = "https://api.frankfurter.dev/v1/latest";
const desplegable1 = document.getElementById("desplegable1");
const desplegable2 = document.getElementById("desplegable2");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");

function inicializarDesplegable() {
  fetch(API)
    .then((res) => res.json())
    .then((json) => {
      while (desplegable1.firstChild) {
        desplegable1.removeChild(desplegable1.firstChild);
      }

      while (desplegable2.firstChild) {
        desplegable2.removeChild(desplegable2.firstChild);
      }

      let rates = json.rates;

      let opcion1 = document.createElement("option");
      let opcion2 = document.createElement("option");

      opcion1.value = 1.0;
      opcion1.text = "EUR";

      opcion2.value = 1.0;
      opcion2.text = "EUR";

      desplegable1.appendChild(opcion1);
      desplegable2.appendChild(opcion2);

      for (const propiedad in rates) {
        opcion1 = document.createElement("option");
        opcion2 = document.createElement("option");

        opcion1.value = rates[propiedad];
        opcion1.text = propiedad;

        opcion2.value = rates[propiedad];
        opcion2.text = propiedad;

        desplegable1.appendChild(opcion1);
        desplegable2.appendChild(opcion2);
      }

      document.getElementById("input1").disabled = false;
    });

  actualizar()
}

async function actualizar() {
  let cantidadInicial = Number.parseFloat(input1.value);
  let simboloMoneda1 = desplegable1.options[desplegable1.selectedIndex].text;

  let response = await fetch(API + "?base=" + simboloMoneda1);
  let json = await response.json();

  let simboloMoneda2 = desplegable2.options[desplegable2.selectedIndex].text;
  let tasaCambio = json.rates[simboloMoneda2];

  if (simboloMoneda1 === simboloMoneda2) {
    tasaCambio = 1;
  }

  input2.value = (cantidadInicial * tasaCambio).toFixed(2);
}

inicializarDesplegable();
