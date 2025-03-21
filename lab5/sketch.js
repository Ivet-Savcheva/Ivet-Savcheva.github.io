let robotModel;

function preload() {
  robotModel = loadModel('robot.mtl.20.obj', true);
}

function setup(){
    createCanvas(720, 480, WEBGL);
    describe('A model of a robot');

    //divElement = createDiv('<h3>&nbsp;brick&nbsp;</h3>');
    //divElement.position(0, 0);
    //divElement.style('border: thin solid black; background: red');
    //divElement.mouseOver(stopMove);
    //divElement.mouseOut(startMove);

    //createSpan('x speed');
    //speedXSlider = createSlider(1, 10, 1, 1);
    //createSpan('y speed');
    //speedYSlider = createSlider(1, 10, 1, 1);
}

function draw(){
    background ('pink');
    //background(255);
 
    // Click and drag to look around the shape
    orbitControl();
   
    // This adds color to the model according to the angle of the surface
    normalMaterial();
    model(robotModel);
}
