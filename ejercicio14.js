const counterWords = [
  "code",
  "repeat",
  "eat",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
  "enjoy",
  "upgrade",
  "code",
];


function repeatCounter(array) {
  let cuentaPalabras = {};
  for (let palabra of array) {
    if (palabra in cuentaPalabras) {
      cuentaPalabras[palabra]++;
    } else {
      cuentaPalabras[palabra] = 1;
    }
  }
  return cuentaPalabras;
}

console.log(repeatCounter(counterWords));
