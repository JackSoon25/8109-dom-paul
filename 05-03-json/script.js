async function loadData() {
    const response = await axios.get("data/data.json");
    console.log(response.data)
    document.querySelector("#output")
        .innerHTML = `
            <ul>
                <li>Movie Name: ${response.data.movie}</li>
                <li>Rating: ${response.data.rating}</li>
                <li>Duration: ${response.data.duration}</li>
                <li>Screening Now? ${response.data.screening ? "Yes" : "No"}</li>
                <li>Actors: ${response.data.actors.join(", ")}</li>
            </ul>
        
        `

}
loadData();