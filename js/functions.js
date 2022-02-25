"use strict";
let a = 10;
let b = 5;
let x = 11;
let y = 7;

//parasyti funkcija kuri apskaiciuoja apskritimo plota kai zinom spinduli
//3.14 * spindulys * spindulys

function apskPlotas(spin) {
  const plotas = Math.PI * spin ** 2;
  console.log(`apskritimo kurio ${spin}m., plotas yra ${plotas.toFixed(2)} kv/m`);
}

apskPlotas(14);
apskPlotas(10);
apskPlotas(56);

//parasyti funkcija kuri paskaiciuoja staciakampio plota
//ilgis 5
//plotis 10

function stacPlotas(ilgis, aukstis) {
  const plotas = ilgis * aukstis;
  console.log(`staciakampio plotas kurio ilgis ${ilgis} ir aukstis ${aukstis} plotas yra ${plotas}`);
}
stacPlotas(5, 10);
stacPlotas(7, 9);

//parasyti funkcija kuri apskaiciuoja kambario sienu plota ir isveda atsakyma
//i puslapio paragrafa kurio id='result'
//kambario ilgi, ploti, auksti

function sienuPlotas(ilgis, plotis, aukstis) {
  const perimetras = (ilgis + plotis) * 2;
  const sienuPlotas = perimetras * aukstis;
  const parEl = document.getElementById("result");
  parEl.textContent += `apskaiciuotas sienu plotas yra ${sienuPlotas}`;
}

sienuPlotas(5, 3, 3);
sienuPlotas(9, 4, 2);

// let sum = a + b;
// let daug = a * 2 + b * 2;
// let visasuma = sum + daug;
// console.log('visasuma ===', visasuma);

// sum = x + y;
// daug = x * 2 + y * 2;
// visasuma = sum + daug;
// console.log('visasuma ===', visasuma);

// sukuriam funkcija

// function pavadinimas(argumetai) {
function sumDaug(num1, num2) {
  // function body
  let sum = num1 + num2;
  let daug = num1 * 2 + num2 * 2;
  let visasuma = sum + daug;
  console.log("visasuma ===", visasuma);
}

// funkcijos iskvietimas vygdomas su ()
// sumDaug(a, b);
// sumDaug(x, y);
// sumDaug(20, 30);
// sumDaug(2, 3);
