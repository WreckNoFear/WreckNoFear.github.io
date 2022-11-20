var canvas = document.getElementById("stars");
context = canvas.getContext("2d");
canvas.width  = window.innerWidth * 2;
canvas.height = window.innerHeight * 2;
stars = 2000;

for (var i = 0; i < stars; i++) {
    x = Math.random() * canvas.offsetWidth;
    y = Math.random() * canvas.offsetHeight;
    context.fillStyle = "white";
    context.fillRect(x,y,1,1);
}