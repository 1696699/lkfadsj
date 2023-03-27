var mouseEvent = "empty";
var lastPosX = 0;
var lastPosY = 0;
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var color = "black";
var widthOfLine = 1;

canvas.addEventListener("mousedown", myMouseDown);
function myMouseDown (e) {
    color = document.getElementById("colorInput").value;
    widthOfLine = document.getElementById("widthInput").value;
    mouseEvent = "md";
    console.log("Mouse Down key has been pressed")
}

canvas.addEventListener("mouseup",myMouseUp);
function myMouseUp (e) {
    mouseEvent = "mu"
}

canvas.addEventListener("mouseleave",myMouseLeave);
function myMouseLeave (e) {
    mouseEvent = "ml"
}

canvas.addEventListener("mousemove",myMouseMove);
function myMouseMove (e) {
    var curentPosX = e.clientX - canvas.offsetLeft;
    var curentPosY = e.clientY - canvas.offsetTop;
    if (mouseEvent == "md") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthOfLine;
        console.log("Last Position of X & Y is ");
        console.log("X = ",lastPosX," & Y = ",lastPosY);
        ctx.moveTo(lastPosX,lastPosY);
        ctx.lineTo(curentPosX,curentPosY);
        console.log("The Curent Position of X & Y is ");
        console.log("X = ",curentPosX," & Y = ",curentPosY)
        ctx.stroke();
    }
    lastPosX = curentPosX;
    lastPosY = curentPosY;
}
function clearCanvas() {
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}