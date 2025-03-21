let robotModel;
let robotVideo;

function preload() {
  robotModel = loadModel('robot.mtl.20.obj', true);
}

function setup(){
    createCanvas(720, 480, WEBGL);
    describe('A model of a robot');

    // Call handleVideo() once the video loads.
    robotVideo = createVideo('robot.mp4', handleVideo);
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

// Set the video's size and play it.
function handleVideo() {
  robotVideo.size(200, 400);
  robotVideo.autoplay();
}