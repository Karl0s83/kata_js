// 1.1 Consigue el valor "HULK" del array de avengers y muestralo por consola.

const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

console.log(avengers[0]);

// 1.2 Cambia el primer elemento de avengers a "IRONMAN"
// const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log("--------------");
avengers[0] = "IRONMAN";

console.log(avengers);

// 1.3 console numero de elementos en el array usando la propiedad correcta de Array.
// const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log("--------------");
console.log(avengers.length);

// 1.4 Añade 2 elementos al array: "Morty" y "Summer". 
// Muestra en consola el último personaje del array
console.log("--------------");

//cambié el nombre del array para que no de conflicto con las demás.
const rickAndMortyCharacter = ["Rick", "Beth", "Jerry"];

rickAndMortyCharacter.push("Morty", "Summer");

console.log(rickAndMortyCharacter);

// 1.5 Elimina el último elemento del array y muestra el primero y el último por consola.
console.log("--------------");
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];

const ultimoElementoEliminado = rickAndMortyCharacters.pop();
console.log(rickAndMortyCharacters[0]);
console.log(ultimoElementoEliminado);

console.log("--------------");
// 1.6 Elimina el segundo elemento del array y muestra el array por consola.
// const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
const segundoEliminado = rickAndMortyCharacters.splice(1,1);
console.log(segundoEliminado);
