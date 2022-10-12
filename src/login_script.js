
function Login(){

    fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        
        username: document.getElementById("username").value,
        password: document.getElementById("password").value,
        expiresInMins: 30
    })})
    .then(res => res.json())
    .then(mex => {
        if(mex.message=="Invalid credentials"){

            localStorage.setItem("username",document.getElementById("username").value);
            localStorage.setItem("portafoglio", Math.round(Math.random()*1000000 + 1000))

            window.location.href = "http://127.0.0.1:5500/src/home.html";
        }
        else {
            
            alert("credenziali sbagliate");
        }
    });
}