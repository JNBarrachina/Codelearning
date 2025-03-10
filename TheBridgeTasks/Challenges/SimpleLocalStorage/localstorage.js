const checkLogin = document.getElementById("butLogin");
checkLogin.addEventListener("click", userLogin);

const nameInput = document.getElementById("inputName");
const passInput = document.getElementById("inputPass");

const loginBox = document.getElementById("logBox");
const alertUserLogin = document.createElement("p");
const welcomeUser = document.createElement("p");
welcomeUser.setAttribute("class", "welcomeUser");

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

    localStorage.setItem("user", JSON.stringify(loginData));
    alertUserLogin.innerText = "Logeado con éxito. Cargando tu muro...";
    alertUserLogin.style.color = "greenyellow";
    loginBox.append(alertUserLogin);

    setTimeout(() => {
        loginBox.innerHTML = "";
        welcomeUser.innerText = `Bienvenido, ${userName}`;
        loginBox.append(welcomeUser);
    }, 3000);    
}

function userLogged(){
    if (localStorage.getItem("user")){
        const getUser = JSON.parse(localStorage.getItem("user"));
        loginBox.innerHTML = "";
        welcomeUser.innerText = `Bienvenido de nuevo, ${getUser.name}`;
        loginBox.append(welcomeUser);
    }
}

userLogged();
