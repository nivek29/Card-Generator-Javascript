/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  insertarCarta(arrayNum(10));
};

function arrayNum(cantidad) {
  var arr = [];

  while (0 < cantidad) {
    arr.push(Math.floor(Math.random() * (13 - 0) + 0));
    --cantidad;
  }
  return arr;
}

function ordenarArreglo(array) {
  let wall = array.length - 1;
  while (wall > 0) {
    let index = 0;
    while (index < wall) {
      if (array[index] > array[index + 1]) {
        let aux = array[index];
        array[index] = array[index + 1];
        array[index + 1] = aux;
      }
      index++;
    }
    wall--;
  }
  return array;
}

function insertarCarta(arrayOrdenado) {
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

  while (x < arrayOrdenado.length) {
    valoresPred[arrayOrdenado[x]];
    plantillaCarta(valoresPred[arrayOrdenado[x]],generarPalo());
    x++;
  }
}

function generarPalo() {
  let valor = Math.floor(Math.random() * (4 - 0) + 0);
  let palos = ["card-diamond", "card-spade", "card-club", "card-hearth"];
  return palos[valor];
}

function plantillaCarta(sim, valorNum) {
  let totalCartas = 0;
  while (totalCartas < valorNum.length) {
    var cartaContent = document.createElement("div");
    cartaContent.innerHTML =
      "<div class=card style=width: 3rem;> <div><h2 class='" +
      sim +
      "'></h2></div><div><p class= text-center id= number>'" +
      valorNum +
      "'</p></div><div class=text-right><h2 class='" +
      sim +
      "'></h2></div></div>";

    document.querySelector("div").appendChild(cartaContent);
    cartaContent.classList.add("col-lg-2");
    cartaContent.classList.add("col-md-3");
    cartaContent.classList.add("col-sm-4");
    cartaContent.classList.add("bg-info");
  }
}
