const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(array) {
  let sum = 0;

  for (let numeros = 0; numeros < array.length; numeros++) {
    sum += array[numeros];
  }

  return sum;
}

console.log(sumAll(numbers));
