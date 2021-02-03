/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

var cartasSeleccionadas = [];
var simbolosSelecionados = [];

document.getElementById("mostrar").addEventListener(
  "click",
  function(event) {
    var cantidad = document.getElementById("cantidad").value;
    console.log(cantidad);
    if (cantidad === 0) {
      alert("Debes ingresar la cantidad de cartas");
    } else {
      cartasSeleccionadas = arrayNum(cantidad);
      generarPalo(cantidad);
      insertarCarta(cartasSeleccionadas, 1);
      let boton = document.getElementById("mostrar");
      boton.style.display = "none";
    }
  },
  false
);

document.getElementById("bubble").addEventListener(
  "click",
  function(event) {
    if (cartasSeleccionadas.length === 0) {
      alert("Aun no se han generado cartas");
    } else {
      insertarCarta(ordenarArregloBubble(cartasSeleccionadas), 2);
      let boton = document.getElementById("bubble");
      boton.style.display = "none";
    }
  },
  false
);
document.getElementById("select").addEventListener(
  "click",
  function(event) {
    if (cartasSeleccionadas.length === 0) {
      alert("Aun no se han generado cartas");
    } else {
      insertarCarta(ordenarArregloSelection(cartasSeleccionadas), 3);
      let boton = document.getElementById("select");
      boton.style.display = "none";
    }
  },
  false
);

document.getElementById("reset").addEventListener(
  "click",
  function(event) {
    location.reload();
  },
  false
);

function arrayNum(cantidad) {
  var arr = [];

  while (0 < cantidad) {
    arr.push(Math.floor(Math.random() * (13 - 0) + 0));
    --cantidad;
  }
  return arr;
}
function ordenarArregloBubble(array) {
  let wall = array.length - 1;
  while (wall > 0) {
    let index = 0;
    while (index < wall) {
      if (array[index] > array[index + 1]) {
        let aux = array[index];
        let auxSimbols = simbolosSelecionados[index];

        array[index] = array[index + 1];
        simbolosSelecionados[index] = simbolosSelecionados[index + 1];

        array[index + 1] = aux;
        simbolosSelecionados[index + 1] = auxSimbols;
      }
      index++;
    }
    wall--;
  }
  return array;
}
function ordenarArregloSelection(array) {
  let min = 0;
  while (min < array.length) {
    for (let i = min + 1; i < array.length; i++) {
      if (array[min] > array[i]) {
        let aux = array[min];
        let auxSim = simbolosSelecionados[min];

        array[min] = array[i];
        simbolosSelecionados[min] = simbolosSelecionados[i];

        array[i] = aux;
        simbolosSelecionados[i] = auxSim;
      }
    }
    min++;
  }
  return array;
}
function insertarCarta(array, opcion) {
  let valoresArray = [];
  let x = 0;
  let valoresPred = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  var almacenContent = document.createElement("div");
  almacenContent.classList.add("row");
  almacenContent.id = opcion;
  document.querySelector("body").appendChild(almacenContent);

  while (x < array.length) {
    valoresPred[array[x]];
    plantillaCarta(valoresPred[array[x]], simbolosSelecionados[x], opcion);
    x++;
  }
}
function generarPalo(cantidad) {
  let y = 0;
  simbolosSelecionados = [];
  let palos = ["card-diamond", "card-spade", "card-club", "card-hearth"];
  while (y < cantidad) {
    simbolosSelecionados.push(palos[Math.floor(Math.random() * (4 - 0) + 0)]);
    y++;
  }
}
function plantillaCarta(valorNum, sim, opcion) {
  var cartaContent = document.createElement("div");
  cartaContent.classList.add("contenedor");
  cartaContent.innerHTML =
    "<div class=card style=width:125px> <div><h2 class='" +
    sim +
    "'></h2></div><div><p class= text-center id= number>" +
    valorNum +
    "</p></div><div class=text-right><h2 class='" +
    sim +
    "'></h2></div></div>";

  document.getElementById(opcion).appendChild(cartaContent);
  cartaContent.classList.add("col-lg-2");
  cartaContent.classList.add("col-md-3");
  cartaContent.classList.add("col-sm-4");
  cartaContent.classList.add("bg-info");
}
