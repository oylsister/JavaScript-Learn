const tempInput = document.getElementById("temp-input");
const toFahrenheit = document.getElementById("CtoF");
const toCelsius = document.getElementById("FtoC");
const result = document.getElementById("result");

var temperature;

function Convert()
{
    if(toFahrenheit.checked)
    {
        temperature = Number(tempInput.value) * 9 / 5 + 32;
        result.textContent = `The temperature is ${temperature}°F.`;
    }
    else if(toCelsius.checked)
    {
        temperature = (Number(tempInput.value) - 32) * 5 / 9;
        result.textContent = `The temperature is ${temperature.toFixed(1)}°C.`;
    }
    else {
        result.textContent = `You have to select conversion type first`;
    }
}