function setup() {
    let canvas = createCanvas(50, 50);
    canvas.parent("canvas");

    background("#fff7f0");
    frameRate(1);
}

function draw() {
    noFill();
    colorMode(HSB);
    blendMode(MULTIPLY);

    push();

    let x = width / random(7, 100);

    noStroke();

    for (let i = 0; i < height * 2; i += x) {
        fill(map(x, width / 100, width / 7, 130, 50), 50, 65);
        rect(width / 2 + (tan(i) * i) / (x * 2), height - i, x, x);
    }
}