const newButton1 = document.createElement("button"); // Step 1
newButton1.textContent = "Button 7";
newButton1.classList = "button";
document.body.appendChild(newButton1);

var buttons = document.querySelectorAll(".button");

//console.log(buttons);

// Once this changed is apply the css hover and active will not work.
buttons.forEach(button => {
    button.style.backgroundColor = "green";
});

buttons.forEach(button => {
    button.addEventListener("click", event =>
        {
            // remove the button but still presence in nodelist.
            event.target.remove();
            //querySelectorAll all is basically refresh for nodelist and the removed button is no more.
            buttons = document.querySelectorAll(".button");
        }
    );
});


// this has to be done before querySelectorAll to be added
const newButton2 = document.createElement("button"); // Step 1
newButton2.textContent = "Button 8";
newButton2.classList = "button";
document.body.appendChild(newButton2);

//querySelectorAll all is basically refresh for nodelist.
