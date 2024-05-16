const display = document.getElementById("display");
var timer = null;
var startTime = 0;
var elapsedTime = 0;
var isRunning = false;

function Start()
{
    if(!isRunning)
    {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(UpdateTimer, 10);
        isRunning = true;
    }
}

function Stop()
{
    if(isRunning)
    {
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
    }
    isRunning = false;
}

function Reset()
{
    Stop();
    elapsedTime = 0;
    startTime = 0;
    isRunning = false;
    display.textContent = "00:00:00:00";
}

function UpdateTimer()
{
    const currentTime = Date.now();
    elapsedTime = currentTime -startTime;

    var hours = Math.floor(elapsedTime / (1000 * 60 * 60)).toString().padStart(2, 0);
    var minutes = Math.floor(elapsedTime / (1000 * 60) % 60).toString().padStart(2, 0);
    var seconds = Math.floor(elapsedTime / 1000 % 60).toString().padStart(2, 0);
    var milliseconds = Math.floor(elapsedTime % 1000 / 10).toString().padStart(2, 0);

    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}