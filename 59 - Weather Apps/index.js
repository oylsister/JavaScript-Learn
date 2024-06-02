// WEATHER APPS

// get class name
const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "36aabf6e4ea7eab147ef037f23f23934";

weatherForm.addEventListener("submit", async event => 
{
    event.preventDefault();
    const city = cityInput.value;

    if(city)
    {
        try {
            const weatherData = await GetWeatherDataByCityName(city);
            DisplayWeatherInfo(weatherData);
        }
        catch(error)
        {
            console.error(error);
            DisplayError(error);
        }
    }
    else {
        DisplayError("Please Enter a valid city!");
    }
});

//AttemptFindCity(true);

async function AttemptFindCity(onload = false)
{
    // do not refresh the page
    //event.preventDefault();

    /*
    if(onload)
    {
        navigator.geolocation.getCurrentPosition(success, errors)

        const success = async (position) => {
            try {
                const weatherData = await GetWeatherDataByLocation(position);
                DisplayWeatherInfo(weatherData);
            }
            catch(error)
            {
                console.error(error);
                DisplayError(error);
            }
        }

        const errors = () => {
            DisplayError("Please Enter a valid city!")
        }
    }
    */

    const city = cityInput.value;

    if(city)
    {
        try {
            const weatherData = await GetWeatherDataByCityName(city);
            DisplayWeatherInfo(weatherData);
        }
        catch(error)
        {
            console.error(error);
            DisplayError(error);
        }
    }
    else {
        DisplayError("Please Enter a valid city!");
    }
}

async function GetWeatherDataByLocation(position)
{
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`

    const response = await fetch(apiUrl);

    if(!response.ok)
    {
        throw new Error(`Could not fetch weather of ${city}`);
    }
    //console.log(response);

    // get data as json.
    return await response.json()
}

async function GetWeatherDataByCityName(city)
{
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const response = await fetch(apiUrl);

    if(!response.ok)
    {
        throw new Error(`Could not fetch weather of ${city}`);
    }
    //console.log(response);

    // get data as json.
    return await response.json()
}

// data will be json format
function DisplayWeatherInfo(data)
{
    console.log(data);

    const {
        name: city, 
        main: { temp, humidity }, 
        weather: [{description, id}]
    } = data;

    console.log(`Weather ID = ${id}`);

    card.textContent = "";
    card.style.display = "flex";

    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("p");
    const humidDisplay = document.createElement("p");
    const descDisplay = document.createElement("p");
    const emoteDisplay = document.createElement("p");

    cityDisplay.textContent = city;
    tempDisplay.textContent = `${(temp - 273.15).toFixed(1)}°C`;
    humidDisplay.textContent = `Humidity: ${humidity}%`;
    descDisplay.textContent = `${description}`;
    emoteDisplay.textContent = GetWeatherEmoji(id);

    tempDisplay.classList.add("tempDisplay");
    humidDisplay.classList.add("humidDisplay");
    descDisplay.classList.add("descDisplay");
    emoteDisplay.classList.add("emoteDisplay");

    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidDisplay);
    card.appendChild(descDisplay);
    card.appendChild(emoteDisplay);
}

function GetWeatherEmoji(weatherID)
{
    if(weatherID < 300 && weatherID >= 200)
        return "⛈";

    else if(weatherID < 400 && weatherID >= 300)
        return "🌧";

    else if(weatherID < 600 && weatherID >= 500)
        return "🌧";

    else if(weatherID < 700 && weatherID >= 600)
        return "'❄";

    else if(weatherID < 800 && weatherID >= 700)
        return "🌫";

    else if(weatherID == 800)
        return "🌞";

    else if(weatherID < 900 && weatherID > 800)
        return "☁";

    else
        return "❓";
}

function DisplayError(message)
{
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);
}