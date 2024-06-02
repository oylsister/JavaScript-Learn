// JSON.stringify() = Convert JS Object to JSON String
// JSON.parse() = Convert JSON String to JS Object.

const names = `["James", "Oylsister", "Edward"]`;
const persons = {
    "name": "James",
    "age": 30,
    "isEmployed": true,
    "hobbies": ["Gaming", "Coding", "Drawing"]
};

const peoples = [
    {
        "name": "James",
        "age": 30,
        "isEmployed": true,
        "hobbies": ["Gaming", "Coding", "Drawing"]
    },
    {
        "name": "Oylsister",
        "age": 25,
        "isEmployed": true,
        "hobbies": ["Gaming", "Coding", "Killing"]
    },
    {
        "name": "Edward",
        "age": 34,
        "isEmployed": true,
        "hobbies": ["Driving", "Shooting", "Drawing"]
    }
];

const jsonName = JSON.stringify(peoples);

// Print JS String
console.log(jsonName);

const jsonParse = JSON.parse(names);

// Print Array
console.log(jsonParse);

// Fetch JSON Files
/*
fetch("persons.json").then(respose => respose.json())
    .then(value => console.log(value));
*/

// has to be Async function only
async function LoadJson()
{
    var respose = await fetch("persons.json");
    var datas = await respose.json();
    console.log(datas);
}