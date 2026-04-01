const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Ball properties
let x = canvas.width / 2;
let y = canvas.height / 2;
const radius = 10;

// Movement speed
let dx = 2;
let dy = -2;

function drawBall() {
ctx.beginPath();
ctx.arc(x, y, radius, 0, Math.PI * 2);
ctx.fillStyle = "#0095DD";
ctx.fill();
ctx.closePath();
}

function draw() {
// Clear the canvas
ctx.clearRect(0, 0, canvas.width, canvas.height);

// Draw the ball
drawBall();

// Update position
x += dx;
y += dy;

// Bounce off walls
if (x + radius > canvas.width || x - radius < 0) dx = -dx;
if (y + radius > canvas.height || y - radius < 0) dy = -dy;

requestAnimationFrame(draw);
}

// Start animation
draw();