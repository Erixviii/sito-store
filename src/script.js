// var btnmenustyle=document.getElementsByClassName("btnmenu").item(0).className;
// (function Selected(e){

//     document.getElementsByClassName("btnmenu").item(0).className += " bg-red-600";
// })()


var map = L.map('mappa').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();


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


(function() {

    var negozi=[
        {
          x: 100,
          y: 100,
          category: 'smartphones'
        }
      ];

    fetch(`https://dummyjson.com/products/category/${negozi[0].category}`)
    .then(res => res.json())
    .then(negozio => console.log(negozio.products[0].title))
})()