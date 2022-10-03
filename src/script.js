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
