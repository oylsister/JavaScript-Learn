const myButton = document.getElementById("myButtons");

// .add()
// .remove()
// .toggle() remove class if present, add class if not.
// .replace(oldClass, newClass)
// .contains()

// add class to button.
myButton.classList.add("enabled");
// remove class
// button.classList.remove("enabled");

myButton.addEventListener("mouseover", event => {
    event.target.classList.replace("enabled", "hover");
});

myButton.addEventListener("mouseout", event => {
    event.target.classList.replace("hover", "enabled");
});

