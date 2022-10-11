(async function(){

    let id = Number(localStorage.getItem("dettagli"));

    fetch(`https://dummyjson.com/products`).then((data)=>{
        return data.json();
    }).then((objectData)=>{
        let tableData="";
        let i=0;
        objectData.products.map((values)=>{


            if(i==0){
                
                tableData+= `<tr>
                    <td>${values.id}</td></tr>
                    <tr><td>${values.title}</td></tr>
                    <tr><td>${values.description}</td></tr>
                    <tr><td>${values.price}</td></tr>
                    <tr><td>${values.discountPercentage}</td></tr>
                    <tr><td>${values.rating}</td></tr>
                    <tr><td>${values.stock}</td></tr>
                    <tr><td>${values.brand}</td></tr>
                    <tr><td>${values.category}</td></tr>
                </tr>`;
                i++;
            }
        });
        document.getElementById("table_body").
        innerHTML=tableData;
    })

    await fetch(`https://dummyjson.com/products/${id}`)
    .then(res => res.json())
    // .then((objectData)=>{
    //     let tableData="";
    //     objectData.map((values)=>{
    //         tableData+= `<tr>
    //         <td>Tiger Nixon</td>
    //         <td>System Architect</td>
    //         <td>Edinburgh</td>
    //         <td>61</td>
    //         <td>2011-04-25</td>
    //         <td>$320,800</td>
    //         <td>61</td>
    //         <td>2011-04-25</td>
    //         <td>$320,800</td>
    //     </tr>`
    //     });
    //     document.getElementById("table_body").
    //     innerHTML=tableData;
    // })
    .then(prodotto => {
            localStorage.setItem("images",prodotto.images);
            $("#title").html(prodotto.title);
            $("#thumbnail").css("background-image", `url(${prodotto.images[0]})`); 

            for (let index = 0; index <= Math.ceil(prodotto.rating); index++) {
                
                $(`#${index}`).addClass("checked");
            }
        }
    );


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