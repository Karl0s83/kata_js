const nameFinder = [
  "Peter",
  "Steve",
  "Tony",
  "Natasha",
  "Clint",
  "Logan",
  "Xabier",
  "Bruce",
  "Peggy",
  "Jessica",
  "Marc",
];



function finderName(array, name) {
  for (let nombre = 0; nombre < array.length; nombre++) {
    if (array[nombre] === name) {
      return [true, nombre];
    }
  }

  return false;
}

console.log(finderName(nameFinder, "Logan"));
console.log(finderName(nameFinder, "Natasha"));
console.log(finderName(nameFinder, "Wade"));
