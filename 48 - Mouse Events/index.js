const box = document.getElementById("box");
const button = document.getElementById("button")

var clicked = false;

button.addEventListener("click", HitMouse);
button.addEventListener("mouseover", Warning);
button.addEventListener("mouseout", Reset);

function HitMouse(event)
{
    box.style.backgroundColor = "tomato";
    box.textContent = "Why bro?"
    clicked = true;
}

function Warning(event)
{
    if(!clicked)
    {
        box.style.backgroundColor = "yellow";
        box.textContent = "Don't even think about it."
    }
}

function Reset(event)
{
    if(!clicked)
    {
        box.style.backgroundColor = "lightgreen";
        box.textContent = "Click Me"
    }
}
