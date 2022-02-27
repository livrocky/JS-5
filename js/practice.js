// const talk = function (time, name) {
//   console.log(`good ${time} ${name}`);
// };
// talk("evening", "Rokas");

// const calculate = function (radius) {
//   let area = 3.14 * radius ** 2;
//   return area;
// };

// calculate(5);
// console.log(area);

//------------------------------//

//apsirasyti staciakampio plota//
//ilgis 5, plotis 10//

function stacPlotas(ilgis, plotis) {
  const plotas = ilgis * plotis;
  console.log(`Staciakampis kurio ilgis yra ${ilgis}, o plotis yra ${plotis}, plotas lygus ${plotas}`);
}
stacPlotas(5, 10);
stacPlotas(7, 9);

//-----------------------//

//parasyti funkcija kuri apskaiciuoja kambario sienu plota ir isveda atsakyma
//i puslapio paragrafa kurio id='result'
//kambario (ilgi + ploti x2) x (auksti)

function sienPlotas(ilgis, plotis, aukstis) {
  const plotas = (ilgis + plotis * 2) * aukstis;
  const paragrafas = document.getElementById("result");
  paragrafas.textContent = `sienu plotas yra ${plotas}`;
}

sienPlotas(10, 15, 20);
