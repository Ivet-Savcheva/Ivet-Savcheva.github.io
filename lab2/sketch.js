var redBrick = { //this is the obect that deals with itself
    x: 0,
    y: 0,
    w: 120,
    h: 120,
    xSpeed: 1,
    ySpeed: 1,
    colour: 'red',
    draw: function (){
        fill ( this.colour); //keyword 'this' only looks in this set and not any other
        rect(this.x, this.y, this.w, this.h);
    },
    move: function(brick){
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        //console.log(Math.abs(this.x - brick.x) + " " + Math.abs(this.y - brick.y));

        if (this.x < 0 || this.x > width - this.w || (Math.abs(this.x - brick.x) <= this.w && Math.abs(this.y - brick.y) <= this.h)){
            this.xSpeed *= -1;
        }
        if (this.y > height - this.h || this.y < 0 || (Math.abs(this.x - brick.x) <= this.w && Math.abs(this.y - brick.y) <= this.h)){
            this.ySpeed *= -1;
        }
    } // dont need a comma at the end of the last key value pair
};

var blueBrick = { //this is the obect that deals with itself
    x: 200,
    y: 200,
    w: 120,
    h: 120,
    xSpeed: 2,
    ySpeed: 1,
    colour: 'blue',
    draw: function (){
        fill ( this.colour); //keyword 'this' only looks in this set and not any other
        rect(this.x, this.y, this.w, this.h);
    },
    move: function(brick){
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if (this.x < 0 || this.x > width - this.w || (Math.abs(this.x - brick.x) <= this.w && Math.abs(this.y - brick.y) <= this.h)){
            this.xSpeed *= -1;
        }
        if (this.y > height - this.h || this.y < 0 || (Math.abs(this.x - brick.x) <= this.w && Math.abs(this.y - brick.y) <= this.h)){
            this.ySpeed *= -1;
        }
    } // dont need a comma at the end of the last key value pair
};

// redBrick.x++ return current value then increments
//++redBrick.x increments value and then returns

function setup(){
    createCanvas (720, 480);
}

function draw(){
    background ('grey');
    redBrick.draw();
    redBrick.move(blueBrick);
    blueBrick.draw();
    blueBrick.move(redBrick);
}