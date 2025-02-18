const start = document.getElementById("sBox")
start.addEventListener("click", startGame);
addEventListener("keydown", direction);

let mHead = 1;

function startGame(event) {
    let initID = parseInt(event.target.id);
    let snake = [];
    snake.push(initID, initID - 1, initID - 2);

    console.log(snake);

    paintSnake(snake);
    movement(snake);
}

function movement(snake) {

    setInterval(() => {
        deleteSnake(snake);
    for (let e = snake.length - 1; e > 0; e--){
        snake[e] = snake[e - 1];
    }
    snake[0] = snake [0] + mHead;
    paintSnake(snake);
    }, 600);

}

function deleteSnake(snake) {
    for (let d = 0; d < snake.length; d++){
        document.getElementById(snake[d]).style.backgroundColor = "white";
    }

    return;
}

function paintSnake(snake) {

    for (let p = 0; p < snake.length; p++){
        document.getElementById(snake[p]).style.backgroundColor = "green";
    }

    return;
}

function direction(event){
    let dir = event.key;

    switch (dir) {
        case "ArrowUp":
            mHead = -10;
            movement(snake);
            break;
        case "ArrowDown":
            mHead = 10;
            movement(snake);
            break;
        case "ArrowLeft":
            mHead = -1;
            movement(snake);
            break;
        case "ArrowRight":
            mHead = 1;
            movement(snake);
            break;
        default:
            break;
    }
}
