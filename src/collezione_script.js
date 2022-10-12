(async function(){

    setTimeout(() => {
        $("#popup").css("display","none");
       }, 2000);
    $("#username").html(localStorage.getItem("username"));
    $("#portafoglio").html("Portafoglio: "+ localStorage.getItem("portafoglio")+ "$");
    
    let coll= localStorage.getItem("coll");// [1,2,3]
    let collezione= coll.split(',').map(Number);

    if (coll!="") {
        
        for (let i = 0; i < collezione.length; i++) {
        
            await fetch(`https://dummyjson.com/products/${collezione[i]}`)
                .then(res => res.json())
                .then(prodotto => {
                    let tableData="";
                    let products= [prodotto]
                    products.map((values)=>{
                                tableData+= `
                                <td>${values.id}</td>
                                <td>${values.title}</td>
                                <td>${values.description}</td>
                                <td>${values.price}</td>
                                <td>${values.discountPercentage}</td>
                                <td>${values.rating}</td>
                                <td>${values.stock}</td>
                                <td>${values.brand}</td>
                                <td>${values.category}</td>
                                
                            `;
                        });
                    document.getElementById("table_body").innerHTML+=tableData;
                
                    document.getElementById("prodotti").innerHTML += ` 
                        <div style="margin-left: 0px" class="p-2 max-w-xs btn rounded-xl w-56 h-80 mt-5 text-center" onclick="Details(${prodotto.id})" id="${prodotto.id}">
                            <img class="m-auto rounded-xl h-44 w-auto" id="imgprodotto" src="${prodotto.thumbnail}" alt="Avatar">
                            <div class="mt-10">
                                <h4><b id="product_title">${prodotto.title}</b></h4>
                                <p id="product_prize"><b>${prodotto.price}$</b></p>
                            </div>
                        </div> 
                        `
                });
            }

           $('#example2').DataTable();
           $('#example2').css("display","block")
    }
    else{
        $('#example2').css("display","none")
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