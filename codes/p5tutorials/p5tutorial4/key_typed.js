function keyTyped() {
    if (key === 'q') {
        circle(0.5 * width, 0.5 * height, 0.7 * width)
    }
    if (key === 'w') {
        background(200)
    }
    return false
}

function setup() {
    createCanvas(300, 300)
    background(200)
}
