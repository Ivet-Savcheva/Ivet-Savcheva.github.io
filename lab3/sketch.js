let divElement;
let speedXSlider;
let speedYSlider;

var divBrick = { //this is the obect that deals with itself
    x: 0,
    y: 0,
    w: 120,
    h: 120,
    xSpeed: 1,
    ySpeed: 1,
    moving: true,
    draw: function(div){
        div.position(this.x, this.y);
    },
    move: function(div){
        if (this.moving) {
            this.x += this.xSpeed;
            this.y += this.ySpeed;

            if (this.x < 0 || this.x > width - div.elt.offsetWidth){
                this.xSpeed *= -1;
            }
            if (this.y > height - div.elt.offsetHeight || this.y < 0){
                this.ySpeed *= -1;
            }
        }
    } // dont need a comma at the end of the last key value pair
};


function setup(){
    createCanvas(720, 480);

    divElement = createDiv('<h3>&nbsp;brick&nbsp;</h3>');
    divElement.position(0, 0);
    divElement.style('border: thin solid black; background: red');
    divElement.mouseOver(stopMove);
    divElement.mouseOut(startMove);

    createSpan('x speed');
    speedXSlider = createSlider(1, 10, 1, 1);
    createSpan('y speed');
    speedYSlider = createSlider(1, 10, 1, 1);
}


function draw(){
    background ('grey');

    divBrick.xSpeed = divBrick.xSpeed > 0 ? speedXSlider.value() : -1 * speedXSlider.value();
    divBrick.ySpeed = divBrick.ySpeed > 0 ? speedYSlider.value() : -1 * speedYSlider.value();

    divBrick.draw(divElement);
    divBrick.move(divElement);
}

function stopMove(){
    divBrick.moving = false;
}

function startMove(){
    divBrick.moving = true;
}