var map = L.map('map').setView([-34.55, -58.55], 1);
L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=GSXUHF0y3GNFueOGGfC6', {
    tileSize: 512,
    zoomOffset: -1,
    minZoom: 0,
    attribution: "\u003ca href=\"https://www.maptiler.com/copyright/\" target=\"_blank\"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e",
    crossOrigin: true
}).addTo(map);

let marker = L.marker ([-34.55, -58.55]).addTo(map);