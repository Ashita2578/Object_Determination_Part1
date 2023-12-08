function preload()    {
    img= loadImage("https://tse2.mm.bing.net/th?id=OIP.d8zuVqQAzPRDL5TsXNpf2gHaE8&pid=Api&P=0&h=180")
}
function setup()    {
    canvas= createCanvas(500,450);
    canvas.center();
}
function draw()     {
    image (img, 0, 0, 500, 400);
    stroke ('orangered');
    fill('orangered');
    noFill();
    rect(30, 10, 350, 300);
    text("Laptop", 45, 75);
}