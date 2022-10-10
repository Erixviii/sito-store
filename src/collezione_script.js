(async function(){

    let coll= localStorage.getItem("coll");
    let collezione= coll.split(',').map(Number);
    
    for (let i = 0; i < collezione.length; i++) {
    
        await fetch(`https://dummyjson.com/products/${collezione[i]}`)
            .then(res => res.json())
            .then(prodotto => {
                
                console.log(prodotto.id);
    
                document.getElementById("prodotti").innerHTML += ` 
                <div style="margin-left: 0px" class="p-2 max-w-xs btn rounded-xl w-56 h-80 mt-5 text-center" id="${prodotto.id}">
                    <img class="m-auto rounded-xl h-44 w-auto" id="imgprodotto" src="${prodotto.thumbnail}" alt="Avatar">
                    <div class="mt-10">
                        <h4><b id="product_title">${prodotto.title}</b></h4>
                        <p id="product_prize"><b>${prodotto.price}$</b></p>
                    </div>
                </div> 
                `
            });
    }
})();

function Exit(){

    window.location.href = "http://127.0.0.1:5500/src/login.html";
}
