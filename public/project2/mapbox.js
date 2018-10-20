var mymap = L.map('mapid').setView([-6.176356, 106.874294], 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <ahref="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>,Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',maxZoom: 18,id: 'mapbox.streets',accessToken: 'pk.eyJ1IjoiY2Fyb2xpbmFyYXRuYXMiLCJhIjoiY2puZ3g1YzNuMDd3ZTN2cGN4Y2Z6Z2xhaCJ9.dh3ESeAb71Ql1lyqhb_bGw'}).addTo(mymap);

var marker = L.marker([-6.176356, 106.874294]).addTo(mymap);

var circle = L.circle([-6.176356, 106.874294], {
	color: 'red',
	fillColor: '#f03',
	fillOpacity: 0.5,
	radius: 500
}).addTo(mymap);

var polygon = L.polygon([
	[51.509, -0.08],
	[51.503, -0.06],
	[51.51, -0.047]
]).addTo(mymap);

marker.bindPopup("<b>Richeese Factory</b><br/><p>Jl. Cempaka Putih Raya No.1, RT.1/RW.7, Cemp. Putih Tim., Cemp. Putih, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10510</p>").openPopup();

circle.bindPopup("Jakarta Pusat");
polygon.bindPopup("Ini sebuah polygon.");

var popup = L.popup()
	.setLatLng([-8.703315, 115.168869])
	.setContent("Restoran terbaik disini.")
	.openOn(mymap);

function onMapClick(e) {
	console.log("Peta diklik pada posisi " + e.latlng);
}

mymap.on('click', onMapClick);

var popup = L.popup();
function onMapClick(e) {
	popup
		.setLatLng(e.latlng)
		.setContent("Lokasi yang dipilih: " + e.latlng.toString())
		.openOn(mymap);
}

mymap.on('click', onMapClick);