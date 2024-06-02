// Fetch (JSON Style data, images, files)
// fetch(url, {options});
// fetch(url, {method: "DELETE"});

/*
fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(response => {
        if(!response.ok)
        {
            throw new Error("Could not fetch result!");
        }
        return response.json();
    })
    .then(data => console.log(data.name))
    .catch(error => console.error(error));
*/

async function fetchPokemonData()
{
    try {
        const pokemonName = document.getElementById("pokemonname").value.toLowerCase();

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok)
            throw new Error("Could not fetch result!");

        const data = await response.json();
        console.log(data);

        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");
        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
    }
    catch(error)
    {
        console.error(error);
    }
}