const movies = [
  { name: "Titan A.E.", durationInMinutes: 130 },
  { name: "Nightmare before Christmas", durationInMinutes: 225 },
  { name: "Inception", durationInMinutes: 165 },
  { name: "The Lord of the Rings", durationInMinutes: 967 },
  { name: "Star Wars: A New Hope", durationInMinutes: 214 },
  { name: "Terminator", durationInMinutes: 140 },
];

const smallMovies = [];
const mediumMovies = [];
const largeMovies = [];

for (let movie of movies) {
  if (movie.durationInMinutes < 200) {
    smallMovies.push(movie);
  } else if (movie.durationInMinutes > 200 && movie.durationInMinutes < 300) {
    mediumMovies.push(movie);
  } else {
    largeMovies.push(movie);
  }
}

console.log("Películas de Corta duración:");
console.log(smallMovies);
console.log("Películas de mediana duración:");
console.log(mediumMovies);
console.log("Películas de larga duración:");
console.log(largeMovies);