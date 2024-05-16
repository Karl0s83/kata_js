const numbers = [12, 21, 38, 5, 45, 37, 6];


function average(array) {
  
  let num = 0;

  for (let numeros = 0; numeros < array.length; numeros++) {
    num += array[numeros];
  }

  let promedio = num / array.length;

  return promedio;
}

console.log(average(numbers));
