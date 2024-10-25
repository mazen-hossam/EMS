const login = document.getElementById("login");
const username = document.getElementById("username");
const password = document.getElementById("password");
const modal1 = document.getElementById("modal1");
const addemployee = document.getElementById("addemployee");


login.addEventListener("click" , (e) => {
    e.preventDefault();
    let name = username.value;
    let pass = password.value;
    if(name.length > 4 && pass.length > 8 ){
        window.location.href = "./about.html";   
    }
    else{
        modal1.style.display = "block";
        username.value = "";
        password.value = "";
    }
});

