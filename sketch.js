let cam;
var x = 250;
var y = -250;
var z = 250;

function setup() {
    createCanvas(710, 400, WEBGL);

    cam = createCamera();
    cam.lookAt(0, 0, 0);

    // Set the current camera to cam1.
    setCamera(cam);

    angleMode(DEGREES);
    strokeWeight(5);
    noFill();
    stroke(32, 8, 64);
  }
  
  function draw() {
    background(250, 180, 200);

    x = x + 1;
    x = x % 500;
    y = y - 1;
    y = y % 500;
    z = z + 1;
    z = z % 500;

    cam.setPosition(x, y, z);
  
    // Rotate rings in a half circle to create a sphere of cubes
    for (let zAngle = 0; zAngle < 180; zAngle += 30) {
      // Rotate cubes in a full circle to create a ring of cubes
      for (let xAngle = 0; xAngle < 360; xAngle += 30) {
        push();
  
        // Rotate from center of sphere
        rotateZ(zAngle);
        rotateX(xAngle);
  
        // Then translate down 400 units
        translate(0, 400, 0);
        box();
        pop();
      }
    }
  }