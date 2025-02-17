const start = document.getElementById("sBox")
start.addEventListener("click", startGame);
addEventListener("keydown", direction);

function startGame(event) {
    let initID = event.target.id;
    console.log(initID);
    let snakeStart = document.getElementById(initID);
    snakeStart.style.backgroundColor = "green";

    movement(initID)
}

function movement(initID) {
    // const nextCell = ...
    setTimeout(function () {
        document.getElementById(initID).style.backgroundColor = "white";
        initID++
        document.getElementById(initID).style.backgroundColor = "green";
        movement();
    }, 800);
}

function direction(event){
    let dir = event.key;

    switch (dir) {
        case "ArrowUp":
            alert(dir);
            break;
        case "ArrowDown":
            alert(dir);
            break;
        case "ArrowLeft":
            alert(dir);
            break;
        case "ArrowRight":
            alert(dir);
            break;
        default:
            break;
    }
}
