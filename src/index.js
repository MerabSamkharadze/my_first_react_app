import foods from "./food";
import { choise, remove } from "./helpers";

let food = choise(foods);

console.log(`i'd like one ${food}, please.`);
console.log(`Here you go:  ${food}.`);
console.log(`Delicious! May I have another ?`);

let remaining = remove(food, foods);

console.log(`Sorry, it was last one, but we have another foods : ${foods}`);
console.log("You can choose any of it!");
