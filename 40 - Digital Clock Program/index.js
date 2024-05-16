function UpdateClock()
{
    const currenttime = new Date();
    var hours = currenttime.getHours();
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, 0)
    const minutes = currenttime.getMinutes().toString().padStart(2, 0);
    const seconds = currenttime.getSeconds().toString().padStart(2, 0);
    const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;
    document.getElementById("clock").textContent = timeString;
}

UpdateClock();
setInterval(UpdateClock, 1000);