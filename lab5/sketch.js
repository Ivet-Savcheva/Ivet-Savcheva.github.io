let robotModel;

function preload() {
  robotModel = loadModel('robot.mtl.20.obj', true);
}

function setup(){
    createCanvas(720, 480, WEBGL);
    describe('A model of a robot');

    //createSpan('x speed');
    //speedXSlider = createSlider(1, 10, 1, 1);
    //createSpan('y speed');
    //speedYSlider = createSlider(1, 10, 1, 1);
}

function draw(){
    background ('pink');
 
    // Click and drag to look around the shape
    orbitControl();
   
    // This adds color to the model according to the angle of the surface
    normalMaterial();
    lights();
    noStroke();
    specularMaterial(50);
    shininess(100);
    rotateY(frameCount * 0.01);
    model(robotModel);
}
