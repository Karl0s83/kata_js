const avengers = [
  "Hulk",
  "Thor",
  "IronMan",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

function findLongestWord(avengers) {
  let maxLength = 0;
  let longestWord = "";
  for (let avenger = 0; avenger < avengers.length; avenger++) {
    if (avengers[avenger].length > maxLength) {
      maxLength = avengers[avenger].length;
      longestWord = [avengers[avenger]];
    } else if (avengers[avenger].length === maxLength) {
      longestWord += " , " + avengers[avenger];
    }
  }
  return longestWord;
}

console.log(findLongestWord(avengers));
