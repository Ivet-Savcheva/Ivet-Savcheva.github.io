var blueDrop = { //this is the obect that deals with itself
    x: 0,
    y: 0,
    w: 1,
    h: 2,
    xSpeed: 0.2,
    ySpeed: 10,
    colour: 'blue',
    out: false,
    draw: function(){
        fill (this.colour); //keyword 'this' only looks in this set and not any other
        ellipse(this.x, this.y, this.w, this.h);
    },
    move: function(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if (this.x < 0 || this.x > width){
            this.out = true;
        }
        else if (this.y > height || this.y < 0){
            this.out = true;
        }
    } // dont need a comma at the end of the last key value pair
};

var rain = [];

function setup(){
    createCanvas(720, 480);
    for (var y = 0; y < 480; y += 20){
        for (var i = 0; i < 50; i++){
            var drop = { ...blueDrop };
            drop.x += random(720);
            drop.y += y;
            drop.w += random(3);
            drop.h += random(8);
            drop.xSpeed += random(5) / 10;
            drop.ySpeed += random(5);
            rain.push(drop);
        }
    }
}

function draw(){
    background('grey');
    var remain = [];
    for (var i = 0; i < rain.length; i++){
        rain[i].draw();
        rain[i].move();
        if (!rain[i].out) {
            remain.push(rain[i]);
        }
    }
    var newDrops = rain.length - remain.length;
    for (var i = 0; i < newDrops; i++){
        var drop = { ...blueDrop };
        drop.x += random(720);
        drop.w += random(3);
        drop.h += random(8);
        drop.xSpeed += random(5) / 10;
        drop.ySpeed += random(5);
        remain.push(drop);
    }
    rain = remain;
}