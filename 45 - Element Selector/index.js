const heading = document.getElementById("food"); // if element is not existed it will return null.

heading.style.backgroundColor = "black";
heading.style.color = "white";

const fruits = document.getElementsByClassName("fruits");

for(var i = 0; i < fruits.length; i++)
{
    fruits[i].style.backgroundColor = "yellow";
}

// create array from classname because forEach need it.
Array.from(fruits).forEach(fruit => {
    fruit.style.backgroundColor = "red";
});

// get h4 with TagName
const h4Elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li");

h4Elements[0].style.backgroundColor = "yellow";

for(let liElement of liElements)
{
    liElement.style.backgroundColor = "green";
}

// QuerySelector

// return the first one that match with what we looking for.
const element = document.querySelector(".fruits");

element.style.backgroundColor = "blue";

// Select all list of fruits.
const theElement = document.querySelectorAll(".fruits");

// no need to turn into array
theElement.forEach(fruit => {
    fruit.style.backgroundColor = "pink";
});