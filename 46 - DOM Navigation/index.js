/*
//First and Last Child

const element = document.getElementById("fruits");
const firstChild = element.firstElementChild;
const lastChild = element.lastElementChild;
firstChild.style.backgroundColor = "red";
lastChild.style.backgroundColor = "green"

const ulElements = document.querySelectorAll("ul");
ulElements.forEach(ulElement => {
    const firstChild = ulElement.firstElementChild; // select all first child of each elements
    firstChild.style.backgroundColor = "yellow";

    const lastChild = ulElement.lastElementChild; // last child in elements.
    lastChild.style.backgroundColor = "green"
})
*/

/*

// Previous and Next Elements

// select next element to the apple (orange)
const element = document.getElementById("apple");
const nextelement = element.nextElementSibling;

nextelement.style.backgroundColor = "red";

// for ul it change all entire child color.
const largeElement = document.getElementById("fruits");
const nextLargeElement = largeElement.nextElementSibling;

nextLargeElement.style.backgroundColor = "yellow";

// Previous Elements
const largeElement2 = document.getElementById("vegetable");
const nextLargeElement2 = largeElement2.previousElementSibling;

nextLargeElement2.style.backgroundColor = "lightgreen";
*/

// Parent Element
const element = document.getElementById("apple");
const parent = element.parentElement; // which is "fruits"

parent.style.backgroundColor = "lightgreen";

// Children Element
const mainElement = document.getElementById("vegetable");
const children = mainElement.children;

// highlight all children in Vegetable. and can also access with index.
Array.from(children).forEach(child => {
    child.style.backgroundColor = "yellow"
})

