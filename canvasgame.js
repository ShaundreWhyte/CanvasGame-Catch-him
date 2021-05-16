/* java Script 
Assignemt 5 
Date 2019-03-21
Name:Shaundre whyte*/


var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 544;
document.body.appendChild(canvas);
console.log();


var initialInt = 4000;
var interval = initialInt;
var divideSpeed = 5.5;

function myFunction(){
    var t = document.createTextNode("Catch him");
    document.body.appendChild(t);
}

// Background image
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
bgReady = true;
};
bgImage.src = "image/backGound.JPG";

// Devil image
var obReady = false;
var obImage = new Image();
var devil = {};
var caughtDevil = 0;
obImage.onload = function () {
    obReady = true;
};
obImage.src = "image/kdevil.png";


 //This is where a new game is created 
var newGame = document.createElement("button")
newGame.innerHTML = "New Game";
style="backgroundColor:rgb(235,207,22)"
newGame.onclick = function () {
    newGame.height="top";
    interval = initialInt;
    caughtDevil = 0;
    reset();
    then = Date.now(); 
}

//resetbutton
var resetSpeed = document.createElement("button");
resetSpeed.innerHTML = "Reset Speed";
resetSpeed.style.display ='red';
resetSpeed.onclick = function () {
    interval = initialInt;
    then = Date.now();
}

document.body.appendChild(document.createElement("br"));
document.body.appendChild(resetSpeed);
document.body.appendChild(newGame)
newGame.style.color="black";
document.body.style.backgroundColor = "grey";




//Reset Game
var reset = function () {

    devil.x = 35 + (Math.random() * (canvas.width - 370));
    devil.y = 35 + (Math.random() * (canvas.width - 370));
};



//My AddEventListenner
addEventListener("click", function (e) {
    if (e.clientX >= devil.x - 10 && devil.x + 250 >= e.clientX
        && e.clientY >= devil.y - 10 && devil.y + 250 >= e.clientY) {
        caughtDevil++;
        reset();
        interval = interval / divideSpeed;
        then = Date.now();
    }
}, false);


//This is my render object
var render = function () {

    ctx.clearRect(0,0, ctx.canvas.width,ctx.canvas.height);

    if (bgReady) {
        ctx.drawImage(bgImage, 0, 0);
    }

    if (obReady) {
        ctx.drawImage(obImage, devil.x, devil.y);
    }
        ctx.fillStyle = "rgb(250, 250, 25)";
        ctx.font = "27px Helvetica";
        ctx.textAlign = "left";
        ctx.textBaseline = "top";
        ctx.front = "15px Helvica";
        ctx.font = "16px Impact";
        ctx.fillText("Devils caught: " + caughtDevil, 15, 32);
};


var main = function () {
    var now = Date.now();
    var delta = now - then;

    if (delta > interval) {
        reset();

    }
    render();

    if (delta > interval)
        then = Date.now();

    requestAnimationFrame(main);
};

var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

reset();
main();
var then = Date.now();
