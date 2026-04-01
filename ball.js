const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let x = canvas.width / 2;
let y = canvas.height / 2;
const radius = 10;
let dx = 2;
let dy = -2;

function Ball() {
ctx.beginPath();
ctx.arc(x, y, radius, 0, Math.PI * 2);
ctx.fillStyle = "purple";
ctx.fill();
ctx.closePath();
}

function draw() {
ctx.clearRect(0, 0, canvas.width, canvas.height);

Ball();

x += dx;
y += dy;

if (x + radius > canvas.width || x - radius < 0) dx = -dx;
if (y + radius > canvas.height || y - radius < 0) dy = -dy;

requestAnimationFrame(draw);
}

draw();