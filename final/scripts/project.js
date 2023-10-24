document.querySelector("#logo").setAttribute("src", "images/logo.jpg");

const welcome = document.querySelector("#welcome");
welcome.innerHTML = "Welcome to the random Pokemon generator";

const button = document.getElementById("button");

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
            doStuff(data);
        } else {
            console.error("Failed to fetch data from the API.");
        }
    } catch (error) {
        console.error("An error occurred while fetching Pokemon datat:", error);
    }
}

function doStuff(data) {
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
  
getPokemon("https://pokeapi.co/api/v2/pokemon/1/");


