const myCanvas = document.getElementById("myCanvas");
const ctx = myCanvas.getContext("2d");

function Ball() {
ctx.y = "center";
ctx.x = "center";
ctx.width = "10";
ctx.height = "10";
ctx.force = "0";
ctx.beginPath();
ctx.arc(100, 75, 50, 0, 2 * Math.PI);
ctx.fillStyle = "purple";
ctx.fill();
}

var ball = new Ball();