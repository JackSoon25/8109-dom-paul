console.log("hello world");

// L is a global variable defined in the Leaflet
// JavaScript file
// the L object stores all the function pertaining to Leaflet
const singapore = [1.290270, 103.851959];

// L.map creates a new map
//  - the parameter for L.map is the ID that the map should be in
// setView is a function that where the map is looking at
// first parameter: the center point of the map
// second parameter: the zoom level of the map
const map = L.map('singaporeMap').setView(singapore, 13);

// In leaflets, graphics are known as layers
// A tile layer displays the map
// We must link to a map provider
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Layers and Map
const latPatSat = [1.2809,   103.8503];
const latPatSatMarker = L.marker(latPatSat).addTo(map);

latPatSatMarker.addEventListener("click", function(){
    alert("Feeling hungry?");
})

const sentosaMarker = L.marker([1.250111, 103.830933]);
sentosaMarker.addTo(map);
// bindPopup will show whatever text in its in the first parameter
// in a pop up box, and it can be HTML
sentosaMarker.bindPopup(`
    <h1>Welcome to Singapore</h1>
    <img style="height:150px" src="https://cdn.theonlinecitizen.com/uploads/2015/08/27070720/CaptainSaoFeng.jpg"/>
    `)


const circle = L.circle([1.3528069221, 103.772488577], {
    radius: 500,
    color: "red",
    fillColor: "yellow"
});
circle.addTo(map);