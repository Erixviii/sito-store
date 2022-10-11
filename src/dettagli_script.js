(async function(){

    let id = Number(localStorage.getItem("dettagli"));
    
    fetch(`https://dummyjson.com/products/${id}`)
    .then(res => res.json())
    .then(prodotti => {
        
        $("#title").innerHTML= "ciao"

            // for (let i = 0; i < prodotti.products.length; i++) {
                
            //     document.getElementById("prodottihome").innerHTML += ` 
            //     <div style="margin-left: 0px" class="p-2 max-w-xs btn rounded-xl w-56 h-80 mt-5 text-center" id="prodotto">
            //         <img class="m-auto rounded-xl h-44 w-auto" id="imgprodotto" src="${prodotti.products[i].thumbnail}" alt="Avatar">
            //         <div class="mt-10">
            //             <h4><b id="product_title">${prodotti.products[i].title}</b></h4>
            //             <p id="product_prize"><b>${prodotti.products[i].price}$</b></p>
            //         </div>
            //     </div> `
            // }
        }
    );

    // let n = 0;
    // let immagini = [
    // 'https://www.itisrossi.edu.it/wp-content/uploads/2022/09/panoramica-istituto-750x300.jpg',
    // 'https://www.itisrossi.edu.it/wp-content/uploads/2022/07/rossi-confindustria-panoramica-750x300.jpg',
    // 'https://www.itisrossi.edu.it/wp-content/uploads/2022/07/gnm-panoramica-750x300.jpg',
    // 'https://www.itisrossi.edu.it/wp-content/uploads/2022/06/nicola-home-750x300.jpg',
    // 'https://www.itisrossi.edu.it/wp-content/uploads/2022/06/foto-panoramica-2022-750x300.jpg',
    // ];

    // Nextimg(n);
})();

function Nextimg(c) {

    // n += c;

    // let barra = document.getElementById('slideshow');

    // if (n > immagini.length - 1) {
    //     n = 1;
    // }
    // if (n < 0) {
    //     n = immagini.length - 1;
    // }

    // barra.src = 'url(' + immagini[n] + ')';
}

function Exit(){

    window.location.href = "http://127.0.0.1:5500/src/login.html";
}