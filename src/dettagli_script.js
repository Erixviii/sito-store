(async function(){

    setTimeout(() => {
        $("#popup").css("display","none");
       }, 2000);
    let id = Number(localStorage.getItem("dettagli"));
    $("#username").html(localStorage.getItem("username"));
    $("#portafoglio").html("Portafoglio: "+ localStorage.getItem("portafoglio")+ "$");

    await fetch(`https://dummyjson.com/products/${id}`)
    .then(res => res.json())
    .then(prodotto => {
        let tableData="";
        let i=0;
        let products= [prodotto]
        products.map((values)=>{
                tableData+= `<tr>
                    <td id="dettagli_td">${values.id}</td></tr>
                    <tr><td id="dettagli_td">${values.title}</td></tr>
                    <tr><td id="dettagli_td">${values.description}</td></tr>
                    <tr><td id="dettagli_td">${values.price}</td></tr>
                    <tr><td id="dettagli_td">${values.discountPercentage}</td></tr>
                    <tr><td id="dettagli_td">${values.rating}</td></tr>
                    <tr><td id="dettagli_td">${values.stock}</td></tr>
                    <tr><td id="dettagli_td">${values.brand}</td></tr>
                    <tr><td id="dettagli_td">${values.category}</td></tr>
                </tr>`;
                i++;
        });
        document.getElementById("table_body").innerHTML=tableData;
        localStorage.setItem("images",prodotto.images);
        $("#title").html(prodotto.title);
        $("#thumbnail").css("background-image", `url(${prodotto.images[0]})`); 
        $("#r_thumbnail").attr("src", `${prodotto.thumbnail}`);
        $("#r_prize").html(prodotto.price + " $");
        for (let index = 0; index <= Math.ceil(prodotto.rating); index++) {
            
            $(`#${index}`).addClass("checked");
        }

        $("#btn_compra").on("click",function Compra(){

            if (Number(localStorage.getItem("portafoglio"))-Number(prodotto.price)<0) {
                alert("denaro insufficiente");
            }else{

                localStorage.setItem("portafoglio", Number(localStorage.getItem("portafoglio"))-Number(prodotto.price));
                $("#portafoglio").html("Portafoglio: "+ localStorage.getItem("portafoglio")+ "$");

                if (localStorage.getItem("coll")==""){

                    localStorage.setItem("coll",[prodotto.id]);
                }
                else{
                    let collezione= localStorage.getItem("coll").split(',').map(Number);
                    console.log( "non vuota");
                    collezione.push(prodotto.id);
                    localStorage.setItem("coll",collezione);
                }
            }
        })
    });

    $("#btn_compra").html("Compra ora");
    localStorage.setItem("indice",0);

    Nextimg(0);
})();

function Nextimg(i) {

    fetch(`https://dummyjson.com/products/${Number(localStorage.getItem("dettagli"))}`)
    .then(res => res.json())
    .then(prodotto => {
        
            let n = Number(localStorage.getItem("indice"))+i;
        
            if (n >= prodotto.images.length) {
                n = 0;
            }
            if (n < 0) {
                n = prodotto.images.length - 1;
            }
            $("#thumbnail").css("background-image", `url(${prodotto.images[n]})`); 
            localStorage.setItem("indice",n);     
        }
    );
}

function Exit(){

    window.location.href = "http://127.0.0.1:5500/src/login.html";
}

let popup=false;

function Popup(){

    if(popup)
     $("#popup").css("display","flex");
    else
     $("#popup").css("display","none");

    popup=!popup;
}