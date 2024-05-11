const numbers = [1,2,3,4,5];
const squares = numbers.map(square);
const cubes = numbers.map(cube);

console.log(squares);

function square(element) {
    return Math.pow(element, 2);
}

function cube(element) {
    return Math.pow(element, 3);
}

const fruits = ["apple", "orange", "banana", "coconut"];

const uppercase = fruits.map(UpperCaseChar);
const lowercase = fruits.map(LowerCaseChar);

console.log(uppercase);
console.log(lowercase);

function UpperCaseChar(element)
{
    return element.toUpperCase();
}

function LowerCaseChar(element)
{
    return element.toLowerCase();
}

const dates = ["2024-09-21", "2024-08-10", "2024-12-31"];

const formattedDates = dates.map(formatDates);
console.log(formattedDates);

function formatDates(element) {
    const part = element.split("-");
    return `${part[2]}/${part[1]}/${part[0]}`
}