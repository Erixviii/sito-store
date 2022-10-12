
( async function(){

   setTimeout(() => {
    $("#popup").css("display","none");
   }, 2000);

   $("#iniziale").html((localStorage.getItem("username")).charAt(0).toUpperCase())
   $("#username").html(localStorage.getItem("username"));
   $("#portafoglio").html("Portafoglio: "+ localStorage.getItem("portafoglio")+ "$");

    let map = L.map('mappa').setView([50, 50], 1)
    .setMaxBounds([[84.67351256610522, -174.0234375], [-58.995311187950925, 180.2421875]]);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        minZoom: 1,
        noWrap: true,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'

    }).addTo(map);

    let bigmarkerOptions = {
        title: "big store",
        clickable: true,
        draggable: false,
        icon: L.icon({
            iconUrl: 'https://github.com/Erixviii/sito-store/blob/main/src/images/biglogo.png?raw=true',
            iconSize: [80, 80]})
        }
    
    let markerOptions = {
        title: "store",
        clickable: true,
        draggable: false,
        icon: L.icon({
            iconUrl: 'https://github.com/Erixviii/sito-store/blob/main/src/images/logo.png?raw=true',
            iconSize: [50, 50]})
        }
    
    let southWest = map.getBounds().getSouthWest();
    let northEast = map.getBounds().getNorthEast();
    let lngSpan = northEast.lng - southWest.lng -50;
    let latSpan = northEast.lat - southWest.lat;
    
    let locations = [
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

    for (let i = 0; i < locations.length; i++) {
        L.marker([locations[i][1], locations[i][2]], markerOptions)
        .bindPopup(locations[i][0])
        .addTo(map)
        .on('click', function() {
    
            document.getElementById("prodottihome").innerHTML = '';
            fetch(`https://dummyjson.com/products/category/${locations[i][0]}`)
            .then(res => res.json())
            .then(prodotti => {
                
                    for (let i = 0; i < prodotti.products.length; i++) {
                        
                        document.getElementById("prodottihome").innerHTML += ` 
                        <div style="margin-left: 0px" class="p-2 max-w-xs btn rounded-xl w-56 h-80 mt-5 text-center" id="prodotto">
                            <img class="m-auto rounded-xl h-44 w-auto" id="imgprodotto" src="${prodotti.products[i].thumbnail}" alt="Avatar">
                            <div class="mt-10">
                                <h4><b id="product_title">${prodotti.products[i].title}</b></h4>
                                <p id="product_prize"><b>${prodotti.products[i].price}$</b></p>
                            </div>
                        </div> `
                    }
                }
            );
        });
    }

    L.marker([45.6515381,11.6388277], bigmarkerOptions)
    .bindPopup("Hunter Stores Mall")
    .addTo(map)
    .on('click',async function() {

        document.getElementById("prodottihome").innerHTML = '';
        for (let i = 0; i < locations.length; i++){

            await fetch(`https://dummyjson.com/products/category/${locations[i][0]}`)
            .then(res => res.json())
            .then(prodotti => {
                
                for (let i = 0; i < prodotti.products.length; i++) {
                    document.getElementById("prodottihome").innerHTML += ` 
                    <div style="margin-left: 0px" class="p-2 max-w-xs btn rounded-xl w-56 h-80 mt-5 text-center"  onclick="Details(${prodotti.products[i].id})" id="${prodotti.products[i].id}">
                        <img class="m-auto rounded-xl h-44 w-auto" id="imgprodotto" src="${prodotti.products[i].thumbnail}" alt="Avatar">
                        <div class="mt-10">
                            <h4><b id="product_title">${prodotti.products[i].title}</b></h4>
                            <p id="product_prize"><b>${prodotti.products[i].price}$</b></p>
                        </div>
                    </div> `
                }
            });
        }
    });

    document.getElementById("prodottihome").innerHTML = '';
    for (let i = 0; i < locations.length; i++){

        await fetch(`https://dummyjson.com/products/category/${locations[i][0]}`)
        .then(res => res.json())
        .then(prodotti => {
            
            for (let i = 0; i < prodotti.products.length; i++) {
                
                document.getElementById("prodottihome").innerHTML += ` 
                <div style="margin-left: 0px" class="p-2 max-w-xs btn rounded-xl w-56 h-80 mt-5 text-center" onclick="Details(${prodotti.products[i].id})" id="${prodotti.products[i].id}">
                    <img class="m-auto rounded-xl h-44 w-auto" id="imgprodotto" src="${prodotti.products[i].thumbnail}" alt="Avatar">
                    <div class="mt-10">
                        <h4><b id="product_title">${prodotti.products[i].title}</b></h4>
                        <p id="product_prize"><b>${prodotti.products[i].price}$</b></p>
                    </div>
                </div> `
            }
        });
    }
})();



function Exit(){

    window.location.href = "http://127.0.0.1:5500/src/login.html";
}

function Details(prodotto){

    localStorage.setItem("dettagli",prodotto);
    window.location.href = "http://127.0.0.1:5500/src/dettagli.html";
}

let popup=false;

function Popup(){

    if(popup)
     $("#popup").css("display","flex");
    else
     $("#popup").css("display","none");

    popup=!popup;
}