function setup() {
    createCanvas(256, 256 * 2)
    // 上のカラーマップ
    for (let r = 0; r < 256; ++r) {
        for (let g = 0; g < 256; ++g) {
            stroke(color(r, g, 200))
            point(r, g)
        }
    }
    // 下のカラーマップ
    for (let g = 0; g < 256; ++g) {
        for (let b = 0; b < 256; ++b) {
            stroke(color(200, g, b))
            point(g, b + 256)
        }
    }
}
