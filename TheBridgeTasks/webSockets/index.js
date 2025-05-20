import { Server } from "socket.io";

const io = new Server(3000)
//Using sockets.io

io.on("connection", (socket) => {
    console.log("Conexion recibida");

    socket.on("message", (arg) => {
        console.log(arg);

        socket.emit("response", `Recibí tu mensaje con el valor de: ${arg}`);
        
    });
});
