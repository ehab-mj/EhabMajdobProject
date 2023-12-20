
//board
var blocksize = 25;
var rows = 20;
var cols = 20;
var board;
var context;

//snake head
var snakex = blocksize * 5;
var snakey = blocksize * 5;

// snake body groth
var snakebody = [];
// snake speed
var velocityx = 0;
var velocityy = 0;
//food
var foodx;
var foody;

//gameover
var gameover = false;

window.onload = function () {
    board = document.getElementById("board");
    board.height = rows * blocksize;
    board.width = cols * blocksize;
    context = board.getContext("2d");

    placefood();
    // snake move
    document.addEventListener("keyup", changeDirection)//Mnklo ano esm3 lkeyup e3'er treko changeDirection
    setInterval(update, 1000 / 10);// 100 milisecond will run the update function
}

function update() {
    if (gameover) {
        return;
    }

    context.fillStyle = "black";
    context.fillRect(0, 0, board.width, board.height);

    context.fillStyle = "white";
    context.fillRect(foodx, foody, blocksize, blocksize);

    // snake eated the food
    if (snakex == foodx && snakey == foody) {
        snakebody.push([foodx, foody])
        placefood();
    }

    // moving the body with the head
    for (let i = snakebody.length - 1; i > 0; i--) {
        snakebody[i] = snakebody[i - 1];
    }
    if (snakebody.length) {
        snakebody[0] = [snakex, snakey];
    }


    context.fillStyle = "#0df9a4";
    snakex += velocityx * blocksize; //+= eachtime 
    snakey += velocityy * blocksize;
    context.fillRect(snakex, snakey, blocksize, blocksize);
    //drow the body
    for (let i = 0; i < snakebody.length; i++) {
        context.fillRect(snakebody[i][0], snakebody[i][1], blocksize, blocksize);
    }

    // game over conditions lma al snake tseb 7alha ...
    if (snakex < 0 || snakex > cols * blocksize || snakey < 0 || snakey > rows * blocksize) {
        gameover = true;
        alert("Game Over");
    }

    for (let i = 0; i < snakebody.length; i++) {
        if (snakex == snakebody[i][0] && snakey == snakebody[i][1]) {
            gameover = true;
            alert("Game Over");
        }
    }
}

// key for movement
function changeDirection(e) {// create event
    if (e.code == "ArrowUp" && velocityy != 1) {// lma nro7 lfo2 nklo 3shan ma tokl al snake 7alha
        velocityx = 0;
        velocityy = -1;
    }
    else if (e.code == "ArrowDown" && velocityy != -1) {
        velocityx = 0;
        velocityy = 1;
    }
    else if (e.code == "ArrowLeft" && velocityy != 1) {
        velocityx = -1;
        velocityy = 0;
    }
    else if (e.code == "ArrowRight" && velocityy != -1) {
        velocityx = 1;
        velocityy = 0;
    }
}

//random food placement
function placefood() {
    foodx = Math.floor(Math.random() * cols) * blocksize;
    foody = Math.floor(Math.random() * rows) * blocksize;
}
