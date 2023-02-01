
var lastPositionX,  lastPositionY;

canvas = document.getElementById('mycanvas');
ctx = canvas.getContext('2d');

color = "black";
widthline = 1;
var width = screen.width;

newwidth = screen.width -70;
newheight = screen.height -300;

if (width < 992) {
document.getElementById(Mycanvas).width = newwidth;
document.getElementById(Mycanvas).height = newheight;
document.body.style.overflow = "hidden"; 
}

canvas.addEventListener("touchstart", myTouchStart);
function myTouchStart(e);
{
    color = document.getElementById("color").value;
    widthOfLine = document.getElementById("widthOfLine").value;
    console.log("myTouchStart");

    lastPositionX = e.touches[0].clientX - canvas.offsetleft;
    lastPositionY = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", myTouchMove);
function myTouchMove(e);
{
    CurrentPositionX = e.touches[0].clientX - canvas.offsetleft;
    CurrentPositionY = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.linewidth = widthline;
        ctx.moveTo(lastPositionX, lastPositionY);
        ctx.lineTo(CurrentPositionX, CurrentPositionY);
        ctx.stroke();

    lastPositionX = CurrentPositionX;
    lastPositionY = CurrentPositionY; 
}