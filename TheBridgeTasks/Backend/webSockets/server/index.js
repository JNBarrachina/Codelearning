import { Server } from "socket.io";

const io = new Server(3000, {
    cors: {
        origin: "*"
    }
})

//Using sockets.io

io.on("connection", async (socket) => {
    
    socket.on("message", (arg) => {
        console.log(arg);
        io.emit("response", `${socket.id}: ${arg}`);
    });
});
