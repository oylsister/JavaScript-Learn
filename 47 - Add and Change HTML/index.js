/* Step

1. Create Element
2. Add Attribute and properties
3. Append Element to DOM

*/

const newHeader = document.createElement("h1");

newHeader.textContent = "I like pizza!";
newHeader.id = "header";
newHeader.style.color = "orange";
newHeader.style.textAlign = "center";;

// One element can only apply for one place. you can't multiply it.

// Apply at first
// document.body.prepend(newHeader);
// document.getElementById("box1").prepend(newHeader);

// Apply at last
// document.body.append(newHeader);

// Apply before the element
const box2 = document.getElementById("box2");
document.body.insertBefore(newHeader, box2)

// Remove Element
document.body.removeChild(box4);
document.body.removeChild(newHeader);