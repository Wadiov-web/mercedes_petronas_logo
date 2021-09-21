class Logo {
    constructor(scale, x, y, michroma, openSans, img) {
        this.scale = scale;
        this.x = x;
        this.y = y;
        this.speed = 1;
        this.dimater = 2 * this.scale;
        this.center = createVector(0, 0);
        this.center2 = createVector(0, 0);
        this.top = createVector(0 * this.scale, -215 * this.scale);
        this.left = createVector(-186.323 * this.scale, 107.277 * this.scale);
        this.right = createVector(186.323 * this.scale, 107.277 * this.scale);
        this.bottomIn = createVector(0 * this.dimater, 20 * this.dimater);
        this.rightIn = createVector(17 * this.dimater,  -9.78787 * this.dimater);
        this.leftIn = createVector(-17 * this.dimater, -9.78787 * this.dimater);
        this.circle1 = createVector(420 * this.scale, 420 * this.scale);
        this.circle2 = createVector(440 * this.scale, 440 * this.scale);
        this.circle3 = createVector(460 * this.scale, 460 * this.scale);
        this.fillCircle1 = createVector(430 * this.scale, 430 * this.scale);
        this.fillCircle2 = createVector(450 * this.scale, 450 * this.scale);
        this.shrink11 = 6;
        this.shrink12 = 5;
        this.shrink21 = 7;
        this.shrink22 = 3;
        this.size = 1;
        this.point = 2 * this.scale;
        this.direction = true;
        this.fadeIn = true;

        this.michroma = michroma;
        this.openSans = openSans;
        this.img = img;

        this.rightSide = true;
    }

    display() {
        console.log(11)
        let s = this.scale; 
        // translate(width / 2, height / 2);
        //translate(180,  height / 2);
        translate(this.x,  this.y);
        // stroke(73, 255, 246);
        
        // Filling circles
        noFill();
        // stroke(80);
        // strokeWeight(8 * s);
        // ellipse(0, 0, this.fillCircle1.x, this.fillCircle1.y);
        // noStroke();
        // stroke(255);
        // strokeWeight(8 * s);
        // ellipse(0, 0, this.fillCircle2.x, this.fillCircle2.y);
        // noStroke();
        // Circles
        stroke(120);
        strokeWeight(this.size * s);
        ellipse(0, 0, this.circle1.x, this.circle1.y);
        stroke(255);
        strokeWeight(this.size * s);
        ellipse(0, 0, this.circle2.x, this.circle2.y);
        strokeWeight(2 * s);
        ellipse(0, 0, this.circle3.x, this.circle3.y);
        noStroke();

        this.logoFill(s);

        strokeWeight(1 * s);
        // Principle Lines
        stroke(255);
        line(this.center.x, this.center.y, this.top.x, this.top.y);
        line(this.center.x, this.center.y, this.left.x, this.left.y);
        line(this.center.x, this.center.y, this.right.x, this.right.y);
        // Inner Lines
        stroke(255);
        line(this.bottomIn.x, this.bottomIn.y, this.center.x, this.center.y);
        line(this.rightIn.x, this.rightIn.y, this.center.x, this.center.y);
        stroke(140);
        line(this.leftIn.x, this.leftIn.y, this.center.x, this.center.y);
        // Side Lines
        stroke(255);
        line(this.leftIn.x, this.leftIn.y, this.top.x - (this.shrink11 * s), this.top.y + (this.shrink12 * s));
        line(this.rightIn.x, this.rightIn.y, this.top.x + (this.shrink11 * s ), this.top.y + (this.shrink12 * s ));
        line(this.leftIn.x, this.leftIn.y, this.left.x + (1 * s), this.left.y - (this.shrink21 * s));
        line(this.bottomIn.x, this.bottomIn.y, this.left.x + (7 * s), this.left.y + (this.shrink22 * s));
        line(this.rightIn.x, this.rightIn.y, this.right.x - (1 * s), this.right.y - (this.shrink21 * s));
        line(this.bottomIn.x, this.bottomIn.y, this.right.x - (7 * s), this.right.y + (this.shrink22 * s));
        // Edges Lines
        stroke(255);
        line(this.top.x - (this.shrink11 * s), this.top.y + (this.shrink12 * s), this.top.x, this.top.y);
        line(this.top.x + (this.shrink11 * s), this.top.y + (this.shrink12 * s), this.top.x, this.top.y);
        line(this.left.x + (1 * s), this.left.y - (this.shrink21 * s), this.left.x, this.left.y);
        line(this.left.x + (7 * s), this.left.y + (this.shrink22 * s), this.left.x, this.left.y);
        line(this.right.x - (1 * s), this.right.y - (this.shrink21 * s), this.right.x, this.right.y);
        line(this.right.x - (7 * s), this.right.y + (this.shrink22 * s), this.right.x, this.right.y);
        // Point
        strokeWeight(this.point);
        point(this.center.x, this.center.y);

        // 222222222222222
        strokeWeight(1 * s);
        // Principle Lines
        stroke(255);
        line(this.center2.x, this.center2.y, this.top.x, this.top.y);
        line(this.center2.x, this.center2.y, this.left.x, this.left.y);
        line(this.center2.x, this.center2.y, this.right.x, this.right.y);
        // Inner Lines
        stroke(255);
        line(this.bottomIn.x, this.bottomIn.y, this.center2.x, this.center2.y);
        line(this.rightIn.x, this.rightIn.y, this.center2.x, this.center2.y);
        stroke(140);
        line(this.leftIn.x, this.leftIn.y, this.center2.x, this.center2.y);
        // Side Lines
        stroke(255);
        line(this.leftIn.x, this.leftIn.y, this.top.x - (this.shrink11 * s), this.top.y + (this.shrink12 * s));
        line(this.rightIn.x, this.rightIn.y, this.top.x + (this.shrink11 * s ), this.top.y + (this.shrink12 * s ));
        line(this.leftIn.x, this.leftIn.y, this.left.x + (1 * s), this.left.y - (this.shrink21 * s));
        line(this.bottomIn.x, this.bottomIn.y, this.left.x + (7 * s), this.left.y + (this.shrink22 * s));
        line(this.rightIn.x, this.rightIn.y, this.right.x - (1 * s), this.right.y - (this.shrink21 * s));
        line(this.bottomIn.x, this.bottomIn.y, this.right.x - (7 * s), this.right.y + (this.shrink22 * s));
        // Edges Lines
        stroke(255);
        line(this.top.x - (this.shrink11 * s), this.top.y + (this.shrink12 * s), this.top.x, this.top.y);
        line(this.top.x + (this.shrink11 * s), this.top.y + (this.shrink12 * s), this.top.x, this.top.y);
        line(this.left.x + (1 * s), this.left.y - (this.shrink21 * s), this.left.x, this.left.y);
        line(this.left.x + (7 * s), this.left.y + (this.shrink22 * s), this.left.x, this.left.y);
        line(this.right.x - (1 * s), this.right.y - (this.shrink21 * s), this.right.x, this.right.y);
        line(this.right.x - (7 * s), this.right.y + (this.shrink22 * s), this.right.x, this.right.y);
        // Point
        strokeWeight(this.point);
        point(this.center2.x, this.center2.y);
        // strokeWeight(5);
        // stroke(255, 0, 0);
        // if(this.rightSide){
        //     point(this.right.x, this.right.y);
        // } else {
        //     point(this.left.x, this.left.y);
        // }
        noFill();
        stroke(80);
        strokeWeight(8 * s);
        ellipse(0, 0, this.fillCircle1.x, this.fillCircle1.y);
        noStroke();
        stroke(255);
        strokeWeight(8 * s);
        ellipse(0, 0, this.fillCircle2.x, this.fillCircle2.y);
        noStroke();
    }

    animate() {
        let half = false;
        if(this.fadeIn){
            this.rightInward();
            if(this.circle1.x <= 0 * this.scale){
                this.fadeIn = false;
            }
        } else {
            this.rightOutward();
            if(this.circle1.x >= 440 * this.scale){
                this.fadeIn = true;
            }
        }
    }

    logoText() {
        noStroke();
        textSize(70);
        fill(73, 255, 246);
        textFont(this.michroma);
        text('PETRONAS', 210, 35);

        textSize(50);
        fill(255);     
        textFont(this.openSans);
        text('FORMULA ONE TEAM', 295, 90);

        image(this.img, 295, -143, 485, 164);
    }

    rightInward() {
        this.circle1.x -= 2.3 * this.speed;
        this.circle2.x -= 2.3 * this.speed;
        this.circle3.x -= 2.3 * this.speed;
        this.fillCircle1.x -= 2.3 * this.speed;
        this.fillCircle2.x -= 2.3 * this.speed;
        this.size += .07;

        this.left.x += 1 * this.speed;
        this.rightIn.x -= .19 * this.speed;
    
        this.right.x -= 1 * this.speed;
        this.leftIn.x += .19 * this.speed;

        this.center.x += .17 * this.speed;
        this.center2.x -= .17 * this.speed;
        
        this.shrink11 -= 0.03 * this.speed;
        this.shrink12 -= 0.03 * this.speed;

        this.shrink21 -= 0.03 * this.speed;
        this.shrink22 -= 0.06 * this.speed;
    }
    rightOutward() {
        this.circle1.x += 2.3 * this.speed;
        this.circle2.x += 2.3 * this.speed;
        this.circle3.x += 2.3 * this.speed;
        this.fillCircle1.x += 2.3 * this.speed;
        this.fillCircle2.x += 2.3 * this.speed;
        this.size -= .07;

        this.left.x -= 1 * this.speed;
        this.rightIn.x += .19 * this.speed;

        this.right.x += 1 * this.speed;
        this.leftIn.x -= .19 * this.speed;

        this.center.x -= .17 * this.speed;
        this.center2.x += .17 * this.speed;
    
        this.shrink11 += 0.03 * this.speed;
        this.shrink12 += 0.03 * this.speed;

        this.shrink21 += 0.03 * this.speed;
        this.shrink22 += 0.06 * this.speed;
    }

    leftInward() {
        this.circle1.x -= 2.3 * this.speed;
        this.circle2.x -= 2.3 * this.speed;
        this.circle3.x -= 2.3 * this.speed;
        this.fillCircle1.x -= 2.3 * this.speed;
        this.fillCircle2.x -= 2.3 * this.speed;
        //this.size += .05;

        this.left.x += 1 * this.speed;
        this.rightIn.x -= .19 * this.speed;
    
        this.right.x -= 1 * this.speed;
        this.leftIn.x += .19 * this.speed;

        this.center.x -= .17 * this.speed;
        
        this.shrink11 -= 0.03 * this.speed;
        this.shrink12 -= 0.03 * this.speed;

        this.shrink21 -= 0.03 * this.speed;
        this.shrink22 -= 0.06 * this.speed;
    }
    leftOutward() {
        this.circle1.x += 2.3 * this.speed;
        this.circle2.x += 2.3 * this.speed;
        this.circle3.x += 2.3 * this.speed;
        this.fillCircle1.x += 2.3 * this.speed;
        this.fillCircle2.x += 2.3 * this.speed;
        //this.size -= .05;

        this.left.x -= 1 * this.speed;
        this.rightIn.x += .19 * this.speed;

        this.right.x += 1 * this.speed;
        this.leftIn.x -= .19 * this.speed;

        this.center.x += .17 * this.speed;
    
        this.shrink11 += 0.03 * this.speed;
        this.shrink12 += 0.03 * this.speed;

        this.shrink21 += 0.03 * this.speed;
        this.shrink22 += 0.06 * this.speed;
    }

    logoFill(s) {
        // Top Left
        fill(200);
        beginShape();
        vertex(this.center.x, this.center.y);
        vertex(this.top.x, this.top.y);
        vertex(this.top.x - (this.shrink11 * s), this.top.y + (this.shrink12 * s));
        vertex(this.leftIn.x, this.leftIn.y);
        endShape();
        // Top Right
        fill(200);
        beginShape();
        vertex(this.center.x, this.center.y);
        vertex(this.top.x, this.top.y);
        vertex(this.top.x + (this.shrink11 * s), this.top.y + (this.shrink12 * s));
        vertex(this.rightIn.x, this.rightIn.y);
        endShape();
        // Left Top
        fill(200);
        beginShape();
        vertex(this.center.x, this.center.y);
        vertex(this.leftIn.x, this.leftIn.y);
        vertex(this.left.x + (1 * s), this.left.y - (this.shrink21 * s));
        vertex(this.left.x, this.left.y);
        endShape();
        // Left Bottom
        fill(200);
        beginShape();
        vertex(this.center.x, this.center.y);
        vertex(this.bottomIn.x, this.bottomIn.y);
        vertex(this.left.x + (7 * s), this.left.y + (this.shrink22 * s));
        vertex(this.left.x, this.left.y);
        endShape();
        // Right Top
        fill(200);
        beginShape();
        vertex(this.center.x, this.center.y);
        vertex(this.rightIn.x, this.rightIn.y);
        vertex(this.right.x - (1 * s), this.right.y - (this.shrink21 * s));
        vertex(this.right.x, this.right.y);
        endShape();
        // Right Bottom
        fill(200);
        beginShape();
        vertex(this.center.x, this.center.y);
        vertex(this.bottomIn.x, this.bottomIn.y);
        vertex(this.right.x - (7 * s), this.right.y + (this.shrink22 * s));
        vertex(this.right.x, this.right.y);
        endShape();


        /// 22222222222222222
        // Top Left
        fill(200);
        beginShape();
        vertex(this.center2.x, this.center2.y);
        vertex(this.top.x, this.top.y);
        vertex(this.top.x - (this.shrink11 * s), this.top.y + (this.shrink12 * s));
        vertex(this.leftIn.x, this.leftIn.y);
        endShape();
        // Top Right
        fill(200);
        beginShape();
        vertex(this.center2.x, this.center2.y);
        vertex(this.top.x, this.top.y);
        vertex(this.top.x + (this.shrink11 * s), this.top.y + (this.shrink12 * s));
        vertex(this.rightIn.x, this.rightIn.y);
        endShape();
        // Left Top
        fill(200);
        beginShape();
        vertex(this.center2.x, this.center2.y);
        vertex(this.leftIn.x, this.leftIn.y);
        vertex(this.left.x + (1 * s), this.left.y - (this.shrink21 * s));
        vertex(this.left.x, this.left.y);
        endShape();
        // Left Bottom
        fill(200);
        beginShape();
        vertex(this.center2.x, this.center2.y);
        vertex(this.bottomIn.x, this.bottomIn.y);
        vertex(this.left.x + (7 * s), this.left.y + (this.shrink22 * s));
        vertex(this.left.x, this.left.y);
        endShape();
        // Right Top
        fill(200);
        beginShape();
        vertex(this.center2.x, this.center2.y);
        vertex(this.rightIn.x, this.rightIn.y);
        vertex(this.right.x - (1 * s), this.right.y - (this.shrink21 * s));
        vertex(this.right.x, this.right.y);
        endShape();
        // Right Bottom
        fill(200);
        beginShape();
        vertex(this.center2.x, this.center2.y);
        vertex(this.bottomIn.x, this.bottomIn.y);
        vertex(this.right.x - (7 * s), this.right.y + (this.shrink22 * s));
        vertex(this.right.x, this.right.y);
        endShape();
    }
}



















/*
class Logo {
    constructor() {
        this.endLine1 = createVector(0, -150);
        this.endLine2 = createVector(-165, 95);
        this.endLine3 = createVector(165, 95);
        this.scale = 1.2;
        this.up = true;
    }
    
    display() {
        let s = this.scale;
        let mag = 220 * s;
        let min = 5 * s;
        let dimater = 2 * s;
        let startLine1 = createVector(0 * dimater, 20 * dimater);
        let startLine2 = createVector(17 * dimater,  -9.78787 * dimater);
        let startLine3 = createVector(-17 * dimater, -9.78787 * dimater);
        let circle1 = 420 * s;
        let circle2 = 440 * s;
        let circle3 = 460 * s;
        noFill();
        translate(width / 2, height / 2);
        this.endLine1.setMag(mag - min);
        this.endLine2.setMag(mag - min);
        this.endLine3.setMag(mag - min);
      
        //stroke(73, 255, 246);
        stroke(200, mag / 22, mag);
        strokeWeight(2 * s);
        // Principle Lines
        line(startLine1.x, startLine1.y, this.endLine1.x, this.endLine1.y);
        line(startLine2.x, startLine2.y, this.endLine2.x, this.endLine2.y);
        line(startLine3.x, startLine3.y, this.endLine3.x, this.endLine3.y);
        // Side Lines
        let d = 1;
        line(startLine3.x, startLine3.y, this.endLine1.x - (6/d * s), this.endLine1.y + (5/d * s));
        line(startLine2.x, startLine2.y, this.endLine1.x + (6/d * s), this.endLine1.y + (5/d * s));
        line(startLine3.x, startLine3.y, this.endLine2.x + (1/d * s), this.endLine2.y - (7/d * s));
        line(startLine1.x, startLine1.y, this.endLine2.x + (7/d * s), this.endLine2.y + (3/d * s));
        line(startLine2.x, startLine2.y, this.endLine3.x - (1/d * s), this.endLine3.y - (7/d * s));
        line(startLine1.x, startLine1.y, this.endLine3.x - (7/d * s), this.endLine3.y + (3/d * s));
        // Edges Lines
        line(this.endLine1.x - (6/d * s), this.endLine1.y + (5/d * s), this.endLine1.x, this.endLine1.y);
        line(this.endLine1.x + (6/d * s), this.endLine1.y + (5/d * s), this.endLine1.x, this.endLine1.y);
        line(this.endLine2.x + (1/d * s), this.endLine2.y - (7/d * s), this.endLine2.x, this.endLine2.y);
        line(this.endLine2.x + (7/d * s), this.endLine2.y + (3/d * s), this.endLine2.x, this.endLine2.y);
        line(this.endLine3.x - (1/d * s), this.endLine3.y - (7/d * s), this.endLine3.x, this.endLine3.y);
        line(this.endLine3.x - (7/d * s), this.endLine3.y + (3/d * s), this.endLine3.x, this.endLine3.y);
        // Circles
        strokeWeight(2 * s);
        ellipse(0, 0, circle1, circle1);
        strokeWeight(1 * s);
        ellipse(0, 0, circle2, circle2);
        strokeWeight(2 * s);
        ellipse(0, 0, circle3, circle3);
        strokeWeight(6 * s);
        point(0, 0);
        // Limits check
        if(circle3 >= 500) {
            this.up = false;
        }
        if(circle3 <= 300){
            this.up = true;
        }
    }

    update() {
        if(this.up){
            this.scale += .002;
        } else {
            this.scale -= .02;
        }
    }
}

























/*
class Logo {
    constructor() {
        this.scale = .8;
        this.dimater = 2 * this.scale;
        this.center = createVector(0, 0);
        this.top = createVector(0 * this.scale, -215 * this.scale);
        this.left = createVector(-186.323 * this.scale, 107.277 * this.scale);
        this.right = createVector(186.323 * this.scale, 107.277 * this.scale);
        this.bottomIn = createVector(0 * this.dimater, 20 * this.dimater);
        this.rightIn = createVector(17 * this.dimater,  -9.78787 * this.dimater);
        this.leftIn = createVector(-17 * this.dimater, -9.78787 * this.dimater);
        this.circle1 = createVector(420 * this.scale, 420 * this.scale);
        this.circle2 = createVector(440 * this.scale, 440 * this.scale);
        this.circle3 = createVector(460 * this.scale, 460 * this.scale);
        this.shrink11 = 6;
        this.shrink12 = 5;
        this.shrink21 = 7;
        this.shrink22 = 3;
        this.size = 1;
        this.point = 6 * this.scale;
        this.direction = true;
        this.fadeIn = true;
    }

    display() {
        let s = this.scale; 
        noFill();
        translate(width / 2, height / 2);
        
        stroke(73, 255, 246);
        strokeWeight(3 * s);
        // Principle Lines
        line(this.center.x, this.center.y, this.top.x, this.top.y);
        line(this.center.x, this.center.y, this.left.x, this.left.y);
        line(this.center.x, this.center.y, this.right.x, this.right.y);
        // Inner Lines
        line(this.bottomIn.x, this.bottomIn.y, this.center.x, this.center.y);
        line(this.rightIn.x, this.rightIn.y, this.center.x, this.center.y);
        line(this.leftIn.x, this.leftIn.y, this.center.x, this.center.y);
        // Side Lines
        line(this.leftIn.x, this.leftIn.y, this.top.x - (this.shrink11 * s), this.top.y + (this.shrink12 * s));
        line(this.rightIn.x, this.rightIn.y, this.top.x + (this.shrink11 * s ), this.top.y + (this.shrink12 * s ));
        line(this.leftIn.x, this.leftIn.y, this.left.x + (1 * s), this.left.y - (this.shrink21 * s));
        line(this.bottomIn.x, this.bottomIn.y, this.left.x + (7 * s), this.left.y + (this.shrink22 * s));
        line(this.rightIn.x, this.rightIn.y, this.right.x - (1 * s), this.right.y - (this.shrink21 * s));
        line(this.bottomIn.x, this.bottomIn.y, this.right.x - (7 * s), this.right.y + (this.shrink22 * s));
        // Edges Lines
        line(this.top.x - (this.shrink11 * s), this.top.y + (this.shrink12 * s), this.top.x, this.top.y);
        line(this.top.x + (this.shrink11 * s), this.top.y + (this.shrink12 * s), this.top.x, this.top.y);
        line(this.left.x + (1 * s), this.left.y - (this.shrink21 * s), this.left.x, this.left.y);
        line(this.left.x + (7 * s), this.left.y + (this.shrink22 * s), this.left.x, this.left.y);
        line(this.right.x - (1 * s), this.right.y - (this.shrink21 * s), this.right.x, this.right.y);
        line(this.right.x - (7 * s), this.right.y + (this.shrink22 * s), this.right.x, this.right.y);
        // Circles
        strokeWeight(this.size * s);
        ellipse(0, 0, this.circle1.x, this.circle1.y);
        strokeWeight(this.size * s);
        ellipse(0, 0, this.circle2.x, this.circle2.y);
        strokeWeight(2 * s);
        ellipse(0, 0, this.circle3.x, this.circle3.y);
        strokeWeight(this.point);
        point(this.center.x, this.center.y);
        // Logo text
        noStroke()
        textSize(50)
        fill(73, 255, 246)
        text('Mercedes-Benz', -180, 230);
    }

    animate(){
        if(this.direction){
            if(this.fadeIn){
                this.rightInward();
                
                if(this.circle1.x <= 60 * this.scale){
                    this.fadeIn = false;
                }
            } else {
                this.rightOutward();
                if(this.circle1.x >= 420 * this.scale){
                    this.fadeIn = true;
                    this.direction = false;
                }
            }
        } else {
            if(this.fadeIn){
                this.leftInward();
                if(this.circle1.x <= 60 * this.scale){
                    this.fadeIn = false;
                }
            } else {
                this.leftOutward();
                if(this.circle1.x >= 420 * this.scale){
                    this.fadeIn = true;
                    this.direction = true;
                }
            }
        }
    }

    rightInward() {
        this.circle1.x -= 2.3;
        this.circle2.x -= 2.3;
        this.circle3.x -= 2.3;
        this.size += .05;

        this.left.x += 1;
        this.rightIn.x -= .19;
    
        this.right.x -= 1;
        this.leftIn.x += .19;

        this.center.x += .17;
        
        this.shrink11 -= 0.03;
        this.shrink12 -= 0.03;

        this.shrink21 -= 0.03;
        this.shrink22 -= 0.06;
    }
    rightOutward() {
        this.circle1.x += 2.3;
        this.circle2.x += 2.3;
        this.circle3.x += 2.3;
        this.size -= .05;

        this.left.x -= 1;
        this.rightIn.x += .19;

        this.right.x += 1;
        this.leftIn.x -= .19;

        this.center.x -= .17;
    
        this.shrink11 += 0.03;
        this.shrink12 += 0.03;

        this.shrink21 += 0.03;
        this.shrink22 += 0.06;
    }

    leftInward() {
        this.circle1.x -= 2.3;
        this.circle2.x -= 2.3;
        this.circle3.x -= 2.3;
        this.size += .05;

        this.left.x += 1;
        this.rightIn.x -= .19;
    
        this.right.x -= 1;
        this.leftIn.x += .19;

        this.center.x -= .17;
        
        this.shrink11 -= 0.03;
        this.shrink12 -= 0.03;

        this.shrink21 -= 0.03;
        this.shrink22 -= 0.06;
    }
    leftOutward() {
        this.circle1.x += 2.3;
        this.circle2.x += 2.3;
        this.circle3.x += 2.3;
        this.size -= .05;

        this.left.x -= 1;
        this.rightIn.x += .19;

        this.right.x += 1;
        this.leftIn.x -= .19;

        this.center.x += .17;
    
        this.shrink11 += 0.03;
        this.shrink12 += 0.03;

        this.shrink21 += 0.03;
        this.shrink22 += 0.06;
    }
}
*/