const fruits = [{name: "apple", color: "red", price: 50}, 
                {name: "orange", color: "orange", price: 46}, 
                {name: "banana", color: "yellow", price: 23}];

/*
console.log(fruits[0]);
console.log(fruits[0].name);
console.log(fruits[1].color);
console.log(fruits[2].price);
*/

// Added to the last
//fruits.push({name: "grapes", color: "purple", price: 42});

// Remove the last array
//fruits.pop()

console.log(fruits);

// ForEach
fruits.forEach(fruit => console.log(fruit.name));

// Map
const fruitNames = fruits.map(fruit => fruit.name);
console.log(fruitNames);

// Filter
const yellowFruits = fruits.filter(fruit => fruit.color === "yellow")
const cheapFruits = fruits.filter(fruit => fruit.price < 50);
console.log(yellowFruits);
console.log(cheapFruits);

// Reduce 
const maxPrice = fruits.reduce((max, fruit) => fruit.price > max.price ? fruit : max);
const minPrice = fruits.reduce((min, fruit) => fruit.price < min.price ? fruit : min);
console.log(maxPrice);
console.log(minPrice);