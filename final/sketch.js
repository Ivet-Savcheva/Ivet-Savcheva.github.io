let canvas;

let robotModel;
let spaceshipModel;
let skullModel;
let astronautModel;

let robotImage;
let spaceshipImage;
let skullImage;
let astronautImage;

let slideIndex = 1;
let cityIndex = 1;

// code for multiple slideshows
let cityNames = ['', 'robot', 'spaceship', 'skull', 'astronaut'];
let cityImages = [null, null, null, null, null];
let cityModels = [null, null, null, null, null];

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides" + cityIndex);
    let dots = document.getElementsByClassName("dot" + cityIndex);
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

function openCity(evt, c) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityNames[c]).style.display = "block";
    evt.currentTarget.className += " active";

    cityIndex = c;
    slideIndex = 1;
    showSlides(slideIndex);

    console.log(cityNames[c] + 'div');
    canvas.parent(cityNames[c] + 'div');
}

function preload() {
    robotModel = loadModel('robot.obj', true);
    spaceshipModel = loadModel('spaceshipblend.obj', true);
    skullModel = loadModel('skullcb.obj', true);
    astronautModel = loadModel('astronautc.obj', true);

    cityModels[1] = robotModel;
    cityModels[2] = spaceshipModel;
    cityModels[3] = skullModel;
    cityModels[4] = astronautModel;
}

function setup(){
    canvas = createCanvas(720, 480, WEBGL);
    canvas.parent('robotdiv');

    describe('A 3D Portfolio');

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

    // Create a p5.Image object.
    spaceshipImage = createImage(66, 66);

    // Load the image's pixels into memory.
    spaceshipImage.loadPixels();

    // Set all the image's pixels to black.
    for (let x = 0; x < spaceshipImage.width; x += 2) {
      for (let y = 0; y < spaceshipImage.height; y += 1) {
        spaceshipImage.set(x, y, 0);
      }
    }

    // Update the image's pixel values.
    spaceshipImage.updatePixels();

    // Create a p5.Image object.
    skullImage = createImage(66, 66);

    // Load the image's pixels into memory.
    skullImage.loadPixels();

    // Set all the image's pixels to black.
    for (let x = 0; x < skullImage.width; x += 1) {
      for (let y = 0; y < skullImage.height; y += 2) {
        skullImage.set(x, y, 0);
      }
    }

    // Update the image's pixel values.
    skullImage.updatePixels();

    // Create a p5.Image object.
    astronautImage = createImage(66, 66);

    // Load the image's pixels into memory.
    astronautImage.loadPixels();

    // Set all the image's pixels to black.
    for (let x = 0; x < astronautImage.width; x += 2) {
      for (let y = 0; y < astronautImage.height; y += 2) {
        astronautImage.set(x, y, 0);
      }
    }

    // Update the image's pixel values.
    astronautImage.updatePixels();

    cityImages[1] = robotImage;
    cityImages[2] = spaceshipImage;
    cityImages[3] = skullImage;
    cityImages[4] = astronautImage;
}

function draw(){
    background ('pink');

    // Draw the image.
    //image(cityImages[cityIndex], 17, 17);

    // Create the second camera.
    // Place it at the top-left.
    // Point it at the origin.
    cam1 = createCamera();
    cam1.setPosition(400, -400, 800);
    cam1.lookAt(0, 0, 0);

    // Set the current camera to cam1.
    setCamera(cam1);
 
    // Click and drag to look around the shape
    orbitControl();
   
    // This adds color to the model according to the angle of the surface
    normalMaterial();
    lights();
    noStroke();
    specularMaterial(50);
    shininess(100);
    rotateX(PI);
    rotateY(frameCount * 0.01);
    model(cityModels[cityIndex]);
}

showSlides(1);
