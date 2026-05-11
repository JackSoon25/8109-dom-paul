const API_KEY="<place your API key here>";
const API_BASE_URL="https://recipeapi.io/api/v1";



async function loadRecipe() {
    const response = await axios.get(API_BASE_URL + "/recipes", {
        params: {
            "cuisine":"italian",
            "difficulty":"easy",
            "per_page": 5,
            "apikey": API_KEY
        }
    });
    console.log(response.data);
}

loadRecipe();