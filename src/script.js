// var btnmenustyle=document.getElementsByClassName("btnmenu").item(0).className;
// (function Selected(e){

//     document.getElementsByClassName("btnmenu").item(0).className += " bg-red-600";
// })()

    var map = L.map('mappa').setView([47.471740635764974, 46.12466320507552], 2)
    .setMaxBounds([[84.67351256610522, -174.0234375], [-58.995311187950925, 180.2421875]]);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        noWrap: true,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'


        
    }).addTo(map);
    
    // L.marker([51.5, -0.09]).addTo(map).on('click', function(e) {
    
        // var negozi=[
        //     {
        //       x: 100,
        //       y: 100,
        //       category: 'smartphones'
        //     }
        //   ];
    
        // fetch(`https://dummyjson.com/products/category/${negozi[0].category}`)
        // .then(res => res.json())
        // .then(negozio => document.getElementById("P1").innerText = negozio.products[0].title)

        //   }
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
    
        var locations = [
            ["smartphones", 11.8166, 122.0942],
            ["laptops", 18.9804, 121.9189],
            ["fragrances", 10.7202, 132.5621],
            ["skincare", -11.3889, 30.6277],
            ["groceries", 2.5929, 1.6325],
            ["home-decoration", 11.8166, 12.0942],
            ["furniture", 11.8166, -32.0942],
            ["tops", 1.8166, 7.0942],
            ["womens-dresses", 11.8166, 2.0942],
            ["mens-shirts", 4.8166, 15.0942],
            ["mens-shoes", 11.8166, 122.0942],
            ["mens-watches", 18.9804, 151.9189],
            ["womens-watches", 10.7202, 8.5621],
            ["womens-bags", -11.3889, 30.6277],
            ["womens-jewellery", 2.5929, 1.6325],
            ["sunglasses", 325.8166, 12.0942],
            ["automotive", 191.8166, -32.0942],
            ["motorcycle", 132.8166, 7.0942],
            ["lighting", 1345.8166, 11.0942],

          ];
    
        // for (let index = 0; index < array.length; index++) {
        //     var marker = L.marker([51.5, -0.09]).addTo(map);
        // }
        for (var i = 0; i < locations.length; i++) {
            L.marker([locations[i][1], locations[i][2]], markerOptions)
              .bindPopup(locations[i][0])
              .addTo(map);
          }
    // });

    function Login(){

        fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            
            username: document.getElementById("username").value,
            password: document.getElementById("password").value,
            expiresInMins: 60
        })
        })
        .then(res => res.json())
        .then(mex => {
            if(mex.message=="Invalid credentials"){
                window.location.href = "http://127.0.0.1:5500/src/home.html";
            }
            else {
                alert("credenziali sbagliate");
            }
        });
    }
    function Exit(){
        
        window.location.href = "http://127.0.0.1:5500/src/login.html";
    }

