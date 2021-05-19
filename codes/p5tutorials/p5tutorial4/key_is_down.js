const W = 300
const H = 300

let x = W * 0.5
let y = H * 0.5

function highlightCircle(x_, y_, highlight) {
    fill(highlight ? color(255, 0, 0) : color(255, 255, 255))
    circle(x_, y_, 100)
}

function draw() {
    background(200);
    highlightCircle(x + 0.5 * x, y, keyIsDown(RIGHT_ARROW))
    highlightCircle(x - 0.5 * x, y, keyIsDown(LEFT_ARROW))
    highlightCircle(x, y - 0.5 * y, keyIsDown(UP_ARROW))
    highlightCircle(x, y + 0.5 * y, keyIsDown(DOWN_ARROW))
}

function setup() {
    createCanvas(W, H)
}
