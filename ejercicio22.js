const fruits = ["Strawberry", "Banana", "Orange", "Apple"];
const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

//Almacenamos los arrays de fruits y foodschedule
const avaliableFruits = [...fruits];
const updatedFoodSchedule = [...foodSchedule];


for (let i = 0; i < updatedFoodSchedule.length; i++) {
  if (!updatedFoodSchedule[i].isVegan) {
    updatedFoodSchedule[i] = fruits.pop();
  }
}

console.log(updatedFoodSchedule);
