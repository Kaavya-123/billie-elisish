Everything_I_wanted = "";
Ilomilo = "";

function preload()
{
    Everything_I_wanted = loadSound("everythingiwant");
    Ilomilo = loadSound("ilomilo1");
}
function setup()
{
    canvas= createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 0,0,600,500);
}