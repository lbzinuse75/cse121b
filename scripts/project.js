document.querySelector("#logo").setAttribute("src", "images/logo.jpg");

const welcome = document.querySelector("#welcome");
welcome.innerHTML = "Welcome to the random Pokemon generator";

const button = document.getElementById("button");
const arrayOutput = document.querySelector("#array");

const pokemonArray = [];

button.addEventListener("click", () => {
    const random = Math.floor(Math.random() * 1017) + 1;
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${random}/`;
    getPokemon(apiUrl);
});

async function getPokemon(apiUrl) {
    try{
        const response = await fetch (apiUrl);
        if (response.ok) {
            const data = await response.json();
            showPokemon(data);
            storeInArray(data);
        } else {
            console.error("Failed to fetch data from the API.");
        }
    } catch (error) {
        console.error("An error occurred while fetching Pokemon data:", error);
    }
}

function showPokemon(data) {
    const output = document.querySelector("#info");

    results = data;
    const image = document.querySelector("#image");
    image.setAttribute("src", results.sprites.front_default);
    image.setAttribute("alt", `Image of ${results.name}`);
    
    document.querySelector("#name").textContent = results.name;
    document.querySelector("#id").textContent = `ID: ${results.id}`;
    document.querySelector("#weight").textContent = `Weight: ${results.weight}`;
    document.querySelector("#height").textContent = `Height: ${results.height}`;
}



function storeInArray(data) {
    const pokemonArrayData = {
        name: results.name,
        id: results.id,
        weight: results.weight,
        height: results.height,
    };

    pokemonArray.push(pokemonArrayData);
    pokemonArray.sort((a, b) => a.weight - b.weight);
    displayPokemonArray(pokemonArray);
}

function displayPokemonArray(pokemonArray) {
    arrayOutput.innerHTML = "";

    pokemonArray.forEach((pokemon, index) => {
        const pokemonArrayInfo = document.createElement("div");
        pokemonArrayInfo.textContent = `${index + 1}. Name: ${pokemon.name}, ID: ${pokemon.id}, Weight: ${pokemon.weight}, Height: ${pokemon.height}`;
        arrayOutput.appendChild(pokemonArrayInfo);
    });
}
  
getPokemon("https://pokeapi.co/api/v2/pokemon/1/");


