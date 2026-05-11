// when the page loads
document.addEventListener("DOMContentLoaded", function () {

    // we call the function without await
    // so they can both happen in the background in parallel
    loadAndDisplayPets();
    loadAndDisplaySpecies();


    async function loadAndDisplayPets() {
        const response = await axios.get("pets.json");
        const pets = response.data.pets;

        const petList = document.querySelector("#pets");
        for (let p of pets) {
            let liElement = document.createElement("li");
            liElement.innerHTML = `${p.name} (${p.species}, id: ${p.id})`;
            petList.appendChild(liElement);
        }
    }

    async function loadAndDisplaySpecies() {
        const response = await axios.get("species.json");
        const petSpecies = response.data;
        const petSelect = document.querySelector("#pet-species");
        console.log(petSpecies)
        for (let eachPetSpecie of petSpecies) {
            let newElement = document.createElement("option");
            newElement.value = eachPetSpecie.id;
            newElement.innerText = eachPetSpecie.name;

            petSelect.appendChild(newElement);
        }
    }




})