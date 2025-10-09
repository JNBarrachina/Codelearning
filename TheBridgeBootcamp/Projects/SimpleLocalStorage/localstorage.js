const checkLogin = document.getElementById("butLogin");
checkLogin.addEventListener("click", userLogin);

const nameInput = document.getElementById("inputName");
const passInput = document.getElementById("inputPass");

const loginBox = document.getElementById("logBox");
const alertUserLogin = document.createElement("p");
const messageUser = document.createElement("p");
messageUser.setAttribute("class", "welcomeUser");

let allUsers = [];
let loggedUser;

function getAllUsers(){
    if (localStorage.getItem("allUsers")){
        allUsers = 
    }
}

function userLogin(){
    const userName = nameInput.value;
    const userPass = passInput.value;
    
    if (userName.length == 0 || userPass.length == 0){
        alertUserLogin.innerText = "Es necesario introducir un nombre de usuario y una contraseña";
        alertUserLogin.style.color = "red";
        loginBox.append(alertUserLogin);

        return;
    }

    const loginData = {
        name: userName,
        password: userPass
    }
    
    if(!localStorage.getItem("allUsers")){
        allUsers.push(loginData);
        loggedUser = userName;

        localStorage.setItem("allUsers", JSON.stringify(allUsers));
        localStorage.setItem("userLogged", JSON.stringify(loggedUser));

        loadingLogin();
    }
    else{
        allUsers.push(loginData);
        loggedUser = userName;

        console.log(allUsers);

        localStorage.setItem("allUsers", JSON.stringify(allUsers));
        localStorage.setItem("userLogged", JSON.stringify(loggedUser));

        loadingLogin();
    }  
}

const checkUserLogged = JSON.parse(localStorage.getItem("allUsers"));
const currentUserLogged = JSON.parse(localStorage.getItem("userLogged"));

function userLogged(){
    checkUserLogged.forEach(user => {
        if (user.name === currentUserLogged){
            welcomeUser();
        }
        else{
            userLogin();
        }
    });
}

function loadingLogin(){
    alertUserLogin.innerText = "Logeado con éxito. Cargando tu muro...";
    alertUserLogin.style.color = "green";
    loginBox.append(alertUserLogin);

    setTimeout(() => {
        welcomeUser()
    }, 3000);
}

function welcomeUser(){
    loginBox.innerHTML = "";

    messageUser.innerText = "Bienvenido";

    const butLogout = document.createElement("button");
    butLogout.innerText = "Cierra tu sesión";
    butLogout.addEventListener("click", exitUser)
    
    loginBox.append(messageUser, butLogout);
}

function exitUser(){
    localStorage.removeItem("userLogged");
    location.reload();
}

userLogged();
