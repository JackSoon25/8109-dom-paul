document.querySelector("#searchBtn")
    .addEventListener("click", async function () {

        const searchTerms = document.querySelector("#searchTerms").value;
        const pokemon = await loadData(searchTerms);
        const output = document.querySelector("#output");
        output.innerHTML = `
            <h3>${pokemon.name}</h3>
            <img src="${pokemon.sprites.other["official-artwork"].front_shiny}"/>
            <ul>
                <li>Base Experience: ${pokemon.experience}</li>
                <li>Height: ${pokemon.height}</li>
            </ul>
        
        `
    })


async function loadData(pokemonName) {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    return response.data;
}