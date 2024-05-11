// reduce elements of an array into single value

const prices = [20, 35, 40, 45, 50];

const total = prices.reduce(sum);

console.log(`${total} Baht`);

function sum(accumulator, element)
{
    return accumulator + element;
}

const grades = [75, 83, 60, 50, 94];

const maximum = grades.reduce(getMax);
const minumum = grades.reduce(getMin);

console.log(maximum);
console.log(minumum);

function getMax(accumulator, element)
{
    return Math.max(accumulator, element);
}

function getMin(accumulator, element)
{
    return Math.min(accumulator, element);
}