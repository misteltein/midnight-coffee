function setup() {
    createCanvas(256, 256)
    background(color(180, 180, 180))

    line(0.4 * width, 0.1 * height, 0.6 * width, 0.1 * height)

    stroke(color(255, 255, 255))
    line(0.4 * width, 0.3 * height, 0.6 * width, 0.3 * height)

    strokeWeight(10)
    line(0.4 * width, 0.5 * height, 0.6 * width, 0.5 * height)

    strokeCap(ROUND);
    line(0.4 * width, 0.7 * height, 0.6 * width, 0.7 * height)

    strokeCap(SQUARE);
    line(0.4 * width, 0.8 * height, 0.6 * width, 0.8 * height)

    strokeCap(PROJECT);
    line(0.4 * width, 0.9 * height, 0.6 * width, 0.9 * height)
}
