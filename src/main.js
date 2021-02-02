/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  console.log("Hello Rigo from the console!");
  generarValor();
  generarPalo();
};

function generarValor() {
  let valor = Math.floor(Math.random() * (14 - 0) + 0);
  let valores = [
    "1",
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
    "K",
    "A"
  ];

  var valorCarta = document.getElementsByTagName("p");
  valorCarta[0].innerHTML = valores[valor];
  valorCarta[1].innerHTML = valores[valor];
  console.log(valores[valor]);
}
function generarPalo() {
  let valor = Math.floor(Math.random() * (4 - 0) + 0);
  let palos = ["card-diamond", "card-spade", "card-club", "card-hearth"];
  var elemento = document.getElementsByTagName("h2");
  for (var i = 0; i < elemento.length; i++) {
    elemento[i].className = palos[valor];
  }
}
