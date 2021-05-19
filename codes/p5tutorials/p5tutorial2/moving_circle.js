function setup() {
    createCanvas(300, 300)
    background(color(100, 100, 100))
}

let x = 0;

function draw() {
    background(color(100, 100, 100))
    circle(x, height / 2, 50)
    x = x + 1
}
