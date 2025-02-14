const start = document.getElementById("sBox")
start.addEventListener("click", startGame);

function startGame(event) {
    let initID = event.target.id;
    let snakeStart = document.getElementById(initID);
    snakeStart.style.backgroundColor = "green";
}

function startMove(){
    setTimeout(function () {
        
    }, 800);
}
