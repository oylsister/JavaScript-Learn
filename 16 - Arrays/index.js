var fruits = ["apple", "orange", "banana"];

// assign in specific array
// fruits[3] = "coconut";

// assign after the current length of array
fruits.push("coconut");

// remove the last array meaning no coconut
// fruits.pop();

// push but on the first array.
fruits.unshift("mango");

// pop but on the first array.
// fruits.shift();

// sort A-Z
fruits.sort();
// fruits.sort().reverse();

for(var i = 0; i < fruits.length; i++)
{
    console.log(fruits[i]);
}

// Spread Section

var number = [1, 2, 3, 4, 5];
// without ... it will result NaN
var maximum = Math.max(...number);
var minimum = Math.min(...number);

console.log(maximum);
console.log(minimum);

var username = "Oyl Sister"
var letters = [...username];

console.log(letters);
console.log(letters.join(""));

// join two array together.
console.log([...fruits, ...number]);