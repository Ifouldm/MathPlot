let slider;
let current;
let mainPoints = [];

function setup() {
    createCanvas(1000, 1000);
    background(255);
    slider = createSlider(3, 10, 3, 1);
    slider.size(500, 50);
    current = createVector(width / 2, height / 2);
}

function sliderChanged(val) {
    mainPoints = [];
    background(255);
    // Centre point
    strokeWeight(1);
    point(0, 0);
    stroke(255, 0, 0);
    for (let i = 0; i < val; i += 1) {
        const thisPoint = p5.Vector.fromAngle((i * TWO_PI) / val, 400);
        mainPoints.push(thisPoint);
        point(thisPoint.x, thisPoint.y);
        console.log(thisPoint);
    }
    stroke(0, 0, 255);
}

function draw() {
    translate(width / 2, height / 2);
    // If the slider has been changed
    const noPoints = slider.value();
    if (noPoints !== mainPoints.length) {
        sliderChanged(noPoints);
    }
    for (let i = 0; i < 100; i += 1) {
        const rand = floor(random(noPoints));
        const newPoint = current.add(mainPoints[rand]).div(2);
        point(newPoint.x, newPoint.y);
        current = newPoint;
    }
}
