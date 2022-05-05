var mouseEvent="";
var lastX, lastY;
canvas=document.getElementById("Canvas");
ctx=canvas.getContext("2d");
color="black";
width_LW=2;
background_color="white";
canvas.addEventListener("mousedown", myMouseDown);
function myMouseDown(e){
    color=document.getElementById("Color").value;
    width_LW=document.getElementById("LW").value;
    background_color=document.getElementById("background").value;
    document.getElementById("Canvas").style.backgroundColor=background_color;
    mouseEvent="mousedown"
}
canvas.addEventListener("mousemove", MyMouseMove);
function MyMouseMove(e){
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;
    if(mouseEvent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_LW;
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
    }
    lastX=current_position_of_mouse_x;
    lastY=current_position_of_mouse_y;
}
function clear(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
