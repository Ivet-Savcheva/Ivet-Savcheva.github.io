function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(214,177,242);
    
    stroke('black');
    
    if (mouseX < 500 && mouseY < 500) { 
        fill(79, 57, 158);
        rect(mouseX,mouseY,50,50,20);
    } else {
        fill(150, 110, 155);
        for (var x = 0; x <= mouseX; x = x + 30) {
            for (var y = 0; y <= mouseY; y = y + 30) {
                rect(x, y, 30, 30, 25);
            }
        }
    }
}
