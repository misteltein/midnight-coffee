function setup() {
    createCanvas(300, 300)
    background(color(100, 100, 100))
    for (let i = 0; i < 7; ++i) {
        for (let j = 0; j < 7; ++j) {
            circle(i * 50, j * 50, 50)
        }
    }
}

// function draw() {
//   background(220)
// }
