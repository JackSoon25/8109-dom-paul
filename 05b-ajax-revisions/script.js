// when the page loads
document.addEventListener("DOMContentLoaded", async function () {

    const response = await axios.get("pets.json");
    const pets = response.data.pets;

    const petList = document.querySelector("#pets");
    for (let p of pets) {
        let liElement = document.createElement("li");
        liElement.innerHTML = `${p.name} (${p.species}, id: ${p.id})`;
        petList.appendChild(liElement);
    }
    
    const speciesResponse = await axios.get("species.json");
    const petSpecies = speciesResponse.data;
    const petSelect = document.querySelector("#pet-species");
    console.log(petSpecies)
    for (let eachPetSpecie of petSpecies) {
        let newElement = document.createElement("option");
        newElement.value = eachPetSpecie.id;
        newElement.innerText = eachPetSpecie.name;

        petSelect.appendChild(newElement);
    }

})