const start = document.getElementById("sBox")
start.addEventListener("click", startGame);
addEventListener("keydown", direction);

let mHead = 1;

function startGame(event) {
    let initID = event.target.id;
    let snake = [];
    snake.push(initID, initID - 1);

    console.log(snake);

    paintSnake(snake);
    movement(snake)
}

function movement(snake) {

    deleteSnake(snake);
    for (e = snake.length; e > 0; e--){
        snake[e] = snake[e - 1];
    }
    snake[0] = snake [0] + mHead;
    paintSnake(snake);
}

function deleteSnake(snake) {
    console.log(snake);
    for (let i = 0; i <= snake.length; i++){
        document.getElementById(snake[i]).style.backgroundColor = "white";
    }
}

function paintSnake(snake) {
    console.log(snake);
    for (let i = 0; i <= snake.length; i++){
        document.getElementById(snake[i]).style.backgroundColor = "green";
    }
}

function direction(event){
    let dir = event.key;

    switch (dir) {
        case "ArrowUp":
            mHead = -10;
            break;
        case "ArrowDown":
            mHead = 10;
            break;
        case "ArrowLeft":
            mHead = -1;
            break;
        case "ArrowRight":
            mHead = 1;
            break;
        default:
            break;
    }
}
