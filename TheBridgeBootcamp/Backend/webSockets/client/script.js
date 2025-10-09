

let socket = io("http://192.168.50.46:3000");

const messasgeBtn = document.getElementById("sendMessage");
messasgeBtn.addEventListener("click", sendUserMessage);
const messagesBox = document.getElementById("messagesBox");

const inputMessage = document.getElementById("userMessage");

const username = prompt("Ingresa un nombre");
socket.emit("set-username", username)

socket.on("respuesta", listenMessages)

function sendUserMessage() {
    const userMessage = inputMessage.value;
    inputMessage.value = "";

    socket.emit("mensaje", userMessage);
}

function listenMessages(message){
    const singleMessageBox = document.createElement("p");
    singleMessageBox.setAttribute("class", "singleMessageBox");
    singleMessageBox.innerText = message;

    messagesBox.append(singleMessageBox);
}