// sort() => sort element as string in lexicographic order and not alphabetical

const fruits = ["apple", "orange", "banana", "coconut"];

fruits.sort()
console.log(fruits);

var number = [5, 10, 4, 9, 6, 7, 2, 1, 3, 8];

// if doesn't added paremeters it will return as comment
number.sort((a, b) => a - b);

// print: [1, 10, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(number);

const people = [{name: "Naphat", age: 26, gpa: 3.0},
    {name: "Derick", age: 32, gpa: 2.0},
    {name: "Josh", age: 31, gpa: 2.2}
];

// min age => max age
//people.sort((a, b) => a.age - b.age)

// max age => min age
// people.sort((a, b) => b.age - a.age)

// sort name 
people.sort((a, b) => a.name.localeCompare(b.name))
console.log(people);
