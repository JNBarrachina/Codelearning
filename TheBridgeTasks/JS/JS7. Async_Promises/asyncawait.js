const butUsers = document.getElementById("bUsers");
butUsers.addEventListener("click", numUsers )

function fetchUsers(i){
    return fetch("https://jsonplaceholder.typicode.com/users/" + i)
    .then((response) => response.json())
    .then((data) => {
        const userName = data.name;
        const userEmail = data.email;
        const userCity = data.address.city;

        return {userName, userEmail, userCity};
    })
    .catch((error) => {
        console.error("Error en la solicitud:", error);
    });
}

let n;
function numUsers(){
    const nUsers = document.getElementById("inputUsers");
    n = nUsers.value;
    
    showUsers(n);
}

async function showUsers(){
    initList();

    let i = 1;
    while (i <= n){
        const user = await fetchUsers(i);

        const userP = document.createElement("p");
        userP.innerText = `Nombre: ${user.userName}, Email: ${user.userEmail}, Ciudad: ${user.userCity}`;
        const usersList = document.getElementById("uList");
        usersList.appendChild(userP);
    
        i++;
    }
}

function initList(){
    const usersList = document.getElementById("uList");
    usersList.innerHTML = "";

    const initP = document.createElement("p");
    initP.innerText = "Recuperando usuarios...";
    usersList.appendChild(initP);
}