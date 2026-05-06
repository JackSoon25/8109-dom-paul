const shops = [
    "Uniqlo #01-012",
    "Royal Sporting House #01-022",
    "Mos Burger #02-33",
    "Popular #03-11",
    "Mixue #B1-12"
]

const events = [
    {
        "name": "Lucky Draw",
        "imageUrl": "https://picsum.photos/id/237/200/300",
        "date": "1st June 2026"
    },
    {
        "name": "DJ and Talk Host",
        "imageUrl": "https://picsum.photos/id/238/200/300",
        "date":"2nd June 2026"
    },
    {
        "name":"Free Vouchers Giveaway",
        "imageUrl":'https://picsum.photos/id/239/200/300',
        "date": "3rd June 2026"
    }
]

const shopDirectoryEl = document.querySelector("#shop-directory");
for (let s of shops) {
    const liElement = document.createElement('li');
    liElement.innerText = s;
    liElement.className = "list-group-item";
    shopDirectoryEl.appendChild(liElement);
}

const eventsEl = document.querySelector("#events");
for (let e of events) {
    const divElement = document.createElement('div');
    divElement.className = "card m-1";
    divElement.style.width = "18rem";

    divElement.innerHTML = `
      <img src="${e.imageUrl}" class="card-img-top" alt="${e.name}">
        <div class="card-body">
            <h5 class="card-title">${e.name}</h5>
        </div>
    `

    eventsEl.appendChild(divElement);
}