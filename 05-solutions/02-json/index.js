const url = "https://raw.githubusercontent.com/kunxin-chor/data-files-and-stuff/master/json-simple.json";

async function loadData() {
    const response = await axios.get(url);
    return response.data;
}

document.addEventListener("DOMContentLoaded", async function () {
    const userData = await loadData();
    const outputUl = document.querySelector("#output");
    outputUl.innerHTML = `
        <li>Name: ${userData.Name}</li>  
        <li>Mobile Number: ${userData.Mobile}</li>
        <li>Current Address: ${userData.Address["current Address"]}</li>
        <li>Permanent Address: ${userData.Address["Permanent address"]}</li>
    `
});