const start = document.getElementById("sBox")
start.addEventListener("click", startGame);
addEventListener("keydown", direction);

let mHead = 1;
let speed = 200;
let points = 0;

function startGame(event) {
    let initID = parseInt(event.target.id);
    let snake = [];
    snake.push(initID, initID - 1);

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
    }, speed);

}

function deleteSnake(snake) {
    for (let d = 0; d < snake.length; d++){
        document.getElementById(snake[d]).style.backgroundColor = "#273849";
    }

    return;
}

function paintSnake(snake) {
    
    for (let p = 0; p < snake.length; p++){
        document.getElementById(snake[p]).style.backgroundColor = "greenyellow";
    }
    
    return;
}


function direction(event){
    let dir = event.key;

    switch (dir) {
        case "ArrowUp":
            mHead = -20;
            movement(snake);
            break;
        case "ArrowDown":
            mHead = 20;
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

function food(){
}

function gameover(){
    alert("YOU LOOSE")
}