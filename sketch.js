let logo;
let logo2;
let opensans;
let michroma;
let img;

function preload() {
    michroma = loadFont('Michroma-Regular.ttf');
    opensans = loadFont('OpenSans-Light.ttf');
    img = loadImage('white.png');
}

function setup(){
    createCanvas(1000, 500);
    background(0);
    logo = new Logo(0.6, 180, height / 2, michroma, opensans, img);
    logo2 = new Logo(0.08, 795, 225, michroma, opensans);
}

function draw() {
    background(0);
    logo.display();
    logo.logoText();
    logo.animate();

    logo2.display();
}
