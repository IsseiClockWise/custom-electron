let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let ballRadius = 10;
let x = 400;
let y = 250;

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();

    // ボールの座標を表示
    document.getElementById("x-index").textContent = x;
    document.getElementById("y-index").textContent = y;
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
}

let move = (e) => {
  let rect = e.target.getBoundingClientRect() ;
  x = e.clientX - rect.left;
  y = e.clientY - rect.top;
  draw();
}

canvas.addEventListener('load',drawBall());

//　処理を別の関数で定義すれば、まとまったコードになると思います。
canvas.addEventListener('mousedown', ()=> {
  canvas.addEventListener('mousemove',move);
});

canvas.addEventListener('mouseup',()=> {
  canvas.removeEventListener('mousemove',move);
});

const textInput = document.getElementById("textInput");
const addTextButton = document.getElementById("addTextButton");

addTextButton.addEventListener("click", () => {
  const text = textInput.value;

  // テキストをCanvasに描画
  ctx.font = "20px Arial";
  ctx.fillStyle = "#000";
  ctx.fillText(text, x, y);
});