
document.addEventListener("DOMContentLoaded", async function () {

    const singapore = [1.290270, 103.851959];
    const map = L.map('singaporeMap').setView(singapore, 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    // create a new marker cluster
    const markerCluster = L.markerClusterGroup();
    markerCluster.addTo(map);

    drawTaxiMarkers(markerCluster)

    // tell the browser to draw all the taxi markers every 30 seconds
    let countdown = 30;
    setInterval(function(){
        drawTaxiMarkers(markerCluster);
        countdown = 30;
    }, 30000)

    setInterval(function(){
        countdown = countdown - 1;
        document.querySelector("#countdown").innerHTML = countdown;
    }, 1000)

   
});

async function loadData() {
    const response = await axios.get("https://api.data.gov.sg/v1/transport/taxi-availability");
    return response.data;
}

async function drawTaxiMarkers(markerCluster) {
    const taxis = await loadData();
    markerCluster.clearLayers(); // remove all existing markers
    for (let t of taxis.features[0].geometry.coordinates) {
        // because the taxi data uses [lng, lat] as coordinates
        // we must inver it so that it becomes[lat, lng]
        const lat = t[1];
        const lng = t[0]
        const taxiLatLng = [lat, lng];
        const taxiMarker = L.marker(taxiLatLng);
        taxiMarker.addTo(markerCluster);
    }
}



