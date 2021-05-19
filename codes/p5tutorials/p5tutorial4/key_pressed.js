const W = 300
const H = 300

let x = W * 0.5
let y = H * 0.5

function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        x -= 1
        x = max(0, x)
    }
    if (keyCode === RIGHT_ARROW) {
        x += 1
        x = min(x, W)
    }
    if (keyCode === UP_ARROW) {
        y -= 1
        y = max(0, y)
    }
    if (keyCode === DOWN_ARROW) {
        y += 1
        y = min(y, H)
    }
    return false
}

function draw() {
    background(200)
    circle(x, y, 100)
}

function setup() {
    createCanvas(H, W)
}
