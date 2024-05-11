// Expression

const hello = function() {
    console.log("Hello");
}

// Arrow (I already did when on C#)
const newhello = (name, age) => {
    console.log(`Hello ${name}`)
    console.log(`You are ${age} years old`)
};

hello();
newhello("bro", 18);

setTimeout(() => {
    console.log(`Hello Johnny`)
    console.log(`You are 22 years old`)
}, 3000);

const numbers = [1, 2, 3, 4, 5, 6];

const square = numbers.map((element) => Math.pow(element, 2));
const evenNumbers = numbers.filter((element) => element % 2 === 0);
const total = numbers.reduce((accumulator, element) => accumulator + element);

console.log(numbers);
console.log(evenNumbers);
console.log(total);