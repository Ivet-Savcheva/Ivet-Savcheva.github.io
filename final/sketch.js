let canvas;
let robotModel;
let spaceshipModel;
let skullModel;
let astronautModel;

let robotImage;

function preload() {
  robotModel = loadModel('robot.obj', true);
  spaceshipModel = loadModel('spaceshipblend.obj', true);
  skullModel = loadModel('skullcb.obj', true);
  astronautModel = loadModel('astronautc.obj', true);
}

function setup(){
    canvas = createCanvas(720, 480, WEBGL);
    canvas.parent('hiddendiv');

    describe('A model of a robot');

    //robotImage = loadImage('robot.jpg');

    // Create a p5.Image object.
    robotImage = createImage(66, 66);

    // Load the image's pixels into memory.
    robotImage.loadPixels();

    // Set all the image's pixels to black.
    for (let x = 0; x < robotImage.width; x += 1) {
      for (let y = 0; y < robotImage.height; y += 1) {
        robotImage.set(x, y, 0);
      }
    }

    // Update the image's pixel values.
    robotImage.updatePixels();
}

function draw(){
    background ('pink');

    // Draw the image.
    //image(robotImage, 17, 17);
 
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

function mousePressed() {
    canvas.parent('robotdiv');
}