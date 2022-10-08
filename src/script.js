var map = L.map('mappa').setView([50, 50], 1)
.setMaxBounds([[84.67351256610522, -174.0234375], [-58.995311187950925, 180.2421875]]);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    minZoom: 1,
    noWrap: true,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'

}).addTo(map);

// http://172.28.48.1:5555
// http://172.18.2.14:5555
// L.marker([51.5, -0.09]).addTo(map).on('click', function(e) {

    // var negozi=[
    //     {
    //       x: 100,
    //       y: 100,
    //       category: 'smartphones'
    //     }
    //   ];

    // fetch(`https://dummyjson.com/products/category/${negozi[0].category}`)});
    
var iconOptions = {
    iconUrl: 'https://github.com/Erixviii/sito-store/blob/main/src/images/logo.png?raw=true',
    iconSize: [50, 50]}

var customIcon = L.icon(iconOptions);

var markerOptions = {
    title: "MyLocation",
    clickable: true,
    draggable: false,
    icon: customIcon
    }

	var southWest = map.getBounds().getSouthWest();
	var northEast = map.getBounds().getNorthEast();
	var lngSpan = northEast.lng - southWest.lng;
	var latSpan = northEast.lat - southWest.lat;
var locations = [
    ["smartphones",southWest.lat + latSpan * Math.random(),southWest.lng + lngSpan * Math.random()],
    ["laptops",southWest.lat + latSpan * Math.random(),southWest.lng + lngSpan * Math.random()],
    ["fragrances",southWest.lat + latSpan * Math.random(),southWest.lng + lngSpan * Math.random()],
    ["skincare", southWest.lat + latSpan * Math.random(),southWest.lng + lngSpan * Math.random()],
    ["groceries",southWest.lat + latSpan * Math.random(),southWest.lng + lngSpan * Math.random()],
    ["home-decoration",southWest.lat + latSpan * Math.random(),southWest.lng + lngSpan * Math.random()],
    ["furniture",southWest.lat + latSpan * Math.random(), Math.random()],
    ["tops",southWest.lat + latSpan * Math.random(),southWest.lng + lngSpan * Math.random()],
    ["womens-dresses",southWest.lat + latSpan * Math.random(),southWest.lng + lngSpan * Math.random()],
    ["mens-shirts",southWest.lat + latSpan * Math.random(),southWest.lng + lngSpan * Math.random()],
    ["mens-shoes",southWest.lat + latSpan * Math.random(),southWest.lng + lngSpan * Math.random()],
    ["mens-watches",southWest.lat + latSpan * Math.random(),southWest.lng + lngSpan * Math.random()],
    ["womens-watches",southWest.lat + latSpan * Math.random(),southWest.lng + lngSpan * Math.random()],
    ["womens-bags", southWest.lat + latSpan * Math.random(),southWest.lng + lngSpan * Math.random()],
    ["womens-jewellery",southWest.lat + latSpan * Math.random(),southWest.lng + lngSpan * Math.random()],
    ["sunglasses",southWest.lat + latSpan * Math.random(),southWest.lng + lngSpan * Math.random()],
    ["automotive",southWest.lat + latSpan * Math.random(), Math.random()],
    ["motorcycle",southWest.lat + latSpan * Math.random(),southWest.lng + lngSpan * Math.random()],
    ["lighting",southWest.lat + latSpan * Math.random(),southWest.lng + lngSpan * Math.random()],

    ];

// for (let index = 0; index < array.length; index++) {
//     var marker = L.marker([51.5, -0.09]).addTo(map);
// }
for (var i = 0; i < locations.length; i++) {
    L.marker([locations[i][1], locations[i][2]], markerOptions)
        .bindPopup(locations[i][0])
        .addTo(map); 
    }
    fetch('https://dummyjson.com/products/category/smartphones')
    .then(res => res.json())
    .then(prodotti => {
        
        for (let i = 0; i < prodotti.products.length; i++) {
            
            document.getElementById("prodotti").innerHTML += ` 
            <div style="margin-left: 0px" class="p-2 max-w-xs btn rounded-xl w-56 h-80 mt-5 text-center" id="prodotto">
                <img class="rounded-xl h-44 w-auto" id="imgprodotto" src="https://dummyjson.com/image/i/products/${i+1}/1.jpg" alt="Avatar">
                <div class="mt-10">
                    <h4><b id="product_title">${prodotti.products[i].title}</b></h4>
                    <p id="product_descr">${prodotti.products[i].category}</p>
                    <p id="product_prize"><b>${prodotti.products[i].price}$</b></p>
                </div>
            </div> `
        }
    });
function Exit(){
    
    window.location.href = "http://127.0.0.1:5500/src/login.html";
}

