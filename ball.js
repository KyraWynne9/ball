const myCanvas = document.getElementById("myCanvas");
const ctx = myCanvas.getContext("2d");

let x = myCanvas.width / 2;
let y = myCanvas.height -2;
let dx = 2;
let d = -2;

function Ball() {
ctx.beginPath();
ctx.arc(100, 75, 50, 0, 2 * Math.PI);
ctx.fillStyle = "purple";
ctx.fill();
ctx.closePath();
x += dx;
y += dy;
}

var ball = new Ball();

var mainTimer = setInterval(animate, 1000/60);

move();

function animate()
{
ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
requestAnimationFrame(move);
}