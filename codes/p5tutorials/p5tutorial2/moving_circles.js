function setup() {
    createCanvas(300, 300)
    background(color(100, 100, 100))
}

let x = 0

function draw() {
    background(color(100, 100, 100))
    circle(x, 0.3 * height, 50)
    circle(x + 0.1 * width, 0.4 * height, 50)
    circle(x + 0.2 * width, 0.5 * height, 50)
    circle(x + 0.3 * width, 0.6 * height, 50)
    circle(x + 0.4 * width, 0.7 * height, 50)
    x = x + 1
}
