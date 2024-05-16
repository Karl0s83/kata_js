const duplicates = [
  "sushi",
  "pizza",
  "burger",
  "potatoe",
  "pasta",
  "ice-cream",
  "pizza",
  "chicken",
  "onion rings",
  "pasta",
  "soda",
];


function removeDuplicates(array) {
  let uniqueArray = [];
  for (let i = 0; i < array.length; i++) {
    let esUnico = true;

    for (let j = 0; j < uniqueArray.length; j++) {
      if (array[i] === uniqueArray[j]) {
        esUnico = false;
        break;
      }
    }
    if (esUnico) {
      uniqueArray[uniqueArray.length] = array[i];
    }
  }

  return uniqueArray;
}

console.log(removeDuplicates(duplicates));
