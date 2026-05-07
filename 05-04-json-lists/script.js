async function loadBooks() {
    const response = await axios.get("books.json");
    return response.data;
}

document.addEventListener("DOMContentLoaded", async function () {
    const books = await loadBooks();

    const catalogDiv = document.querySelector("#catalog");
    catalogDiv.innerHTML = "";

    for (let b of books) {
        const divElement = document.createElement('div');
        divElement.className = "col-4";

        divElement.innerHTML = `
        <div class="card m-2">
            <img src="${b.imageUrl}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${b.title}</h5>
                <ul>
                    <li>Pages: ${b.pages}</li>
                    <li>Author: ${b.author}</li>
                </ul>
            </div>
        </div>
        `
        catalogDiv.appendChild(divElement);

    }
})