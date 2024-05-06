var username;


/*
username = window.prompt("What's your username?");

console.log(username);
*/

document.getElementById("submit-button").onclick = function() {
    username = document.getElementById("input-user").value;
    console.log(username);
    document.getElementById("welcome-msg").textContent = `Welcome back ${username}!`;
}

function GetUsernameAndPrint() 
{
    username = document.getElementById("input-user").value;
    console.log(username);
}