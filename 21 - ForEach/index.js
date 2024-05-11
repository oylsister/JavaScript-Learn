var number = [1, 2, 3, 4, 5];

number.forEach(cube);
number.forEach(display);

function double(element, index, array)
{
    array[index] = element * 2;
}

function triple(element, index, array)
{
    array[index] = element * 3;
}

function squrare(element, index, array)
{
    array[index] = Math.pow(element, 2);
}

function cube(element, index, array)
{
    array[index] = Math.pow(element, 3);
}

function display(element) {
    console.log(element);
}

// 2 Section
var fruits = ["apple", "orange", "banana", "coconut"];

function UpperCaseChar(element, index, array)
{
    array[index] = element.toUpperCase();
}

fruits.forEach(UpperCaseChar);
fruits.forEach(display);