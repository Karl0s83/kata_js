const mixedElements = [6, 1, "Rayo", 1, "vallecano", "10", "upgrade", 8, "hub"];

function averageWord(array) {
  let sum = 0;
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
      sum += array[i];
      count++;
    } else if (typeof array[i] === "string") {
      sum += array[i].length;
      count++;
    }
  }
  let average = sum / count;

  return average;
}

console.log(averageWord(mixedElements));
