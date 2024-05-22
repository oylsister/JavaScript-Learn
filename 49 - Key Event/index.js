const box = document.getElementById("box");
const moveAmount = 10;

var x = 0;
var y = 0;

document.addEventListener("keydown", OnPressedKey);
document.addEventListener("keyup", OnReleasedKey);

function OnPressedKey(event)
{
    if(event.key.startsWith("Arrow"))
    {
        box.textContent = "[2]";
        box.style.backgroundColor = "lightcoral"

        event.preventDefault()
        

        switch(event.key)
        {
            case "ArrowUp":
                y -= moveAmount;
                break;

            case "ArrowDown":
                y += moveAmount;
                break;

            case "ArrowLeft":
                x -= moveAmount;
                break;
            
            case "ArrowRight":
                x += moveAmount;
                break;

            
        }
        box.style.top = `${y}px`;
        box.style.left = `${x}px`;
    }
    //console.log(`Key Down = ${event.key}`);
}

function OnReleasedKey(event)
{
    //console.log(`Key Up = ${event.key}`);
    box.textContent = "[0]";
    box.style.backgroundColor = "lightblue"
}