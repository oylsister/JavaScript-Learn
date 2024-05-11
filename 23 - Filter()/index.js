var number = [1, 2, 3, 4, 5, 6, 7];
var evenNum = number.filter(isEven);
var oddNum = number.filter(isOdd);

console.log(evenNum);
console.log(oddNum);

function isEven(element) {
    return element % 2 === 0;
}

function isOdd(element) {
    return element % 2 !== 0;
}

const ages = [16, 17, 18, 18, 19, 20, 60];
const adults = ages.filter(Adult);
const kids = ages.filter(Kid);

console.log(adults);
console.log(kids);

function Adult(element) {
    return element >= 18;
}

function Kid(element) {
    return element < 18;
}

const fruits = ["apple", "orange", "banana", "coconut"];

const shorts = fruits.filter(getShortWord);
const longs = fruits.filter(getLongWord);

console.log(shorts);
console.log(longs);

function getShortWord(element) {
    return element.length < 6;
}

function getLongWord(element) {
    return element.length >= 6;
}