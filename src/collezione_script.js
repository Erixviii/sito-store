
for (var i = 0; i < 20; i++) {
        document.getElementById("prodotti").innerHTML += ` 
        <div style="margin-left: 0px" class="p-2 max-w-xs btn rounded-xl w-56 h-80 mt-5" id="prodotto">
            <img class="rounded-xl h-auto w-fit" id="imgprodotto" src="https://dummyjson.com/image/i/products/1/1.jpg" alt="Avatar">
            <div class="mt-10">
                <h4><b id="product_title">John Doe</b></h4>
                <p id="product_descr">Architect & Engineer</p>
                <p id="product_prize"><b>10.00$</b></p>
            </div>
        </div> ` 
    }
