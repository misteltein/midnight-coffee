function setup() {
    createCanvas(300, 300)
    background(color(100, 100, 100))
}

let x = 0

function draw() {
    background(color(100, 100, 100))
    for (let i = 0; i < 5; ++i) {
        circle(x + 0.1 * i * width, (0.3 + 0.1 * i) * height, 50)
    }
    x = x + 1
}
