function setup() {
    createCanvas(256, 500)
    background(color(180, 180, 180))

    circle(0.5 * width, 0.10 * height, 50)
    stroke(color(255, 0, 255))
    circle(0.5 * width, 0.25 * height, 50)

    strokeWeight(10)
    circle(0.5 * width, 0.40 * height, 50)

    fill(color(0, 255, 255))
    circle(0.5 * width, 0.55 * height, 50)

    noFill()
    strokeWeight(2)
    circle(0.5 * width, 0.70 * height, 50)

    noStroke()
    fill(color(0, 255, 255))
    circle(0.5 * width, 0.85 * height, 50)
}
