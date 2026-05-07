const url = "https://raw.githubusercontent.com/kunxin-chor/data-files-and-stuff/master/fruits.txt";

document.querySelector("#getDataBtn").addEventListener("click", async function () {
    // to use await, the function must be marked as async
    // tell JavaScript to pause in this function until the async operation finished
    const response = await axios.get(url);
    document.querySelector("#output").innerText = response.data;
})

// define a function to load the data
async function loadData() {
    const response = await axios.get(url);
    document.querySelector("#output").innerText = response.data;
}
// load the data 
loadData();

