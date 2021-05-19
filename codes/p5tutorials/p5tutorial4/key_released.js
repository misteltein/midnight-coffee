const W = 300
const H = 300

let x = W * 0.5
let y = H * 0.5

let downLeftArrow = false
let downRightArrow = false
let downUpArrow = false
let downDownArrow = false

function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        downLeftArrow = true
    }
    if (keyCode === RIGHT_ARROW) {
        downRightArrow = true
    }
    if (keyCode === UP_ARROW) {
        downUpArrow = true
    }
    if (keyCode === DOWN_ARROW) {
        downDownArrow = true
    }
    return false
}

function keyReleased() {
    if (keyCode === LEFT_ARROW) {
        downLeftArrow = false
    }
    if (keyCode === RIGHT_ARROW) {
        downRightArrow = false
    }
    if (keyCode === UP_ARROW) {
        downUpArrow = false
    }
    if (keyCode === DOWN_ARROW) {
        downDownArrow = false
    }
    return false
}

function highlightCircle(x_, y_, highlight) {
    fill(highlight ? color(255, 0, 0) : color(255, 255, 255))
    circle(x_, y_, 100)
}

function draw() {
    background(200);
    highlightCircle(x + 0.5 * x, y, downRightArrow)
    highlightCircle(x - 0.5 * x, y, downLeftArrow)
    highlightCircle(x, y - 0.5 * y, downUpArrow)
    highlightCircle(x, y + 0.5 * y, downDownArrow)
}

function setup() {
    createCanvas(W, H)
}
