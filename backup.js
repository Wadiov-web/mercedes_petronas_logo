/*
class Logo {
    constructor() {
        this.sline = createVector(width / 2, height / 2);
        this.eline1 = createVector(0, -150);
        this.eline2 = createVector(-165, 95);
        this.eline3 = createVector(165, 95);

        this.dimater = 2;
        this.startLine1 = createVector(0 * this.dimater, 20 * this.dimater);
        this.startLine2 = createVector(17 * this.dimater, -10 * this.dimater);
        this.startLine3 = createVector(-17 * this.dimater, -10 * this.dimater);


        this.fadeIn = true;
        this.dim = .2;
    }
    
    show() {
        
        noFill();
        if(this.fadeIn) {

            

            // translate(mouseX, mouseY);
            translate(width / 2, height / 2);
            let m = 220;
            this.eline1.setMag(m-5);
            this.eline2.setMag(m-5);
            this.eline3.setMag(m-5);
            

            
            // stroke(20, 190, 250);
            stroke(200-mouseY, mouseX, mouseY);
            strokeWeight(3);
            
            line(this.startLine1.x, this.startLine1.y, this.eline1.x, this.eline1.y);
            line(this.startLine2.x, this.startLine2.y, this.eline2.x, this.eline2.y);
            line(this.startLine3.x, this.startLine3.y, this.eline3.x, this.eline3.y);

            //additional lines
            line(this.startLine3.x, this.startLine3.y, this.eline1.x - 6, this.eline1.y + 5);
            line(this.startLine2.x, this.startLine2.y, this.eline1.x + 6, this.eline1.y + 5);

            line(this.startLine3.x, this.startLine3.y, this.eline2.x+1 , this.eline2.y -7);
            line(this.startLine1.x, this.startLine1.y, this.eline2.x+7 , this.eline2.y +3);

            line(this.startLine2.x, this.startLine2.y, this.eline3.x-1 , this.eline3.y -7);
            line(this.startLine1.x, this.startLine1.y, this.eline3.x-7 , this.eline3.y +3);
            
            // edges lines
            line(this.eline1.x - 6, this.eline1.y + 5, this.eline1.x, this.eline1.y);
            line(this.eline1.x + 6, this.eline1.y + 5, this.eline1.x, this.eline1.y);

          
            line(this.eline2.x+1 , this.eline2.y -7 , this.eline2.x, this.eline2.y);
            line(this.eline2.x+7 , this.eline2.y +3 , this.eline2.x, this.eline2.y);

            line(this.eline3.x-1 , this.eline3.y -7 , this.eline3.x, this.eline3.y);
            line(this.eline3.x-7 , this.eline3.y +3 , this.eline3.x, this.eline3.y);


            strokeWeight(2);
            ellipse(0, 0, 420, 420);
            strokeWeight(1);
            ellipse(0, 0, 440, 440);
            strokeWeight(2);
            ellipse(0, 0, 460, 460);
            strokeWeight(10);
            point(0, 0);

          
            // triangle
            // strokeWeight(1);
            // line(this.eline3.x, this.eline3.y, this.eline1.x, this.eline1.y);
            // line(this.eline2.x, this.eline2.y, this.eline1.x, this.eline1.y);
            // line(this.eline2.x, this.eline2.y, this.eline3.x, this.eline3.y);

           
            

        } else {
            
            
            
        }
        
    }
}
*/












class Logo {
    constructor(scale, x, y, michroma, openSans, img) {
        this.scale = scale;
        this.x = x;
        this.y = y;
        this.speed = 1;
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
        this.fillCircle1 = createVector(430 * this.scale, 430 * this.scale);
        this.fillCircle2 = createVector(450 * this.scale, 450 * this.scale);
        this.shrink11 = 6;
        this.shrink12 = 5;
        this.shrink21 = 7;
        this.shrink22 = 3;
        this.size = 1;
        this.point = 6 * this.scale;
        this.direction = true;
        this.fadeIn = true;

        this.michroma = michroma;
        this.openSans = openSans;
        this.img = img;
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
        stroke(80);
        strokeWeight(8 * s);
        ellipse(0, 0, this.fillCircle1.x, this.fillCircle1.y);
        noStroke();
        stroke(255);
        strokeWeight(8 * s);
        ellipse(0, 0, this.fillCircle2.x, this.fillCircle2.y);
        noStroke();
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
    }

    animate() {
        if(this.direction){
            if(this.fadeIn){
                this.rightInward();
                if(this.circle1.x <= 0 * this.scale){
                    this.fadeIn = false;
                }
            } else {
                this.rightOutward();
                if(this.circle1.x >= 440 * this.scale){
                    this.fadeIn = true;
                    this.direction = false;
                }
            }
        } else {
            if(this.fadeIn){
                this.leftInward();
                if(this.circle1.x <= 0 * this.scale){
                    this.fadeIn = false;
                }
            } else {
                this.leftOutward();
                if(this.circle1.x >= 440 * this.scale){
                    this.fadeIn = true;
                    this.direction = true;
                }
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
        //this.size += .05;

        this.left.x += 1 * this.speed;
        this.rightIn.x -= .19 * this.speed;
    
        this.right.x -= 1 * this.speed;
        this.leftIn.x += .19 * this.speed;

        this.center.x += .17 * this.speed;
        
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
        //this.size -= .05;

        this.left.x -= 1 * this.speed;
        this.rightIn.x += .19 * this.speed;

        this.right.x += 1 * this.speed;
        this.leftIn.x -= .19 * this.speed;

        this.center.x -= .17 * this.speed;
    
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
        fill(255 + this.center.x);
        beginShape();
        vertex(this.center.x, this.center.y);
        vertex(this.top.x, this.top.y);
        vertex(this.top.x - (this.shrink11 * s), this.top.y + (this.shrink12 * s));
        vertex(this.leftIn.x, this.leftIn.y);
        endShape();
        // Top Right
        fill(150 + this.center.x);
        beginShape();
        vertex(this.center.x, this.center.y);
        vertex(this.top.x, this.top.y);
        vertex(this.top.x + (this.shrink11 * s), this.top.y + (this.shrink12 * s));
        vertex(this.rightIn.x, this.rightIn.y);
        endShape();
        // Left Top
        fill(255);
        beginShape();
        vertex(this.center.x, this.center.y);
        vertex(this.leftIn.x, this.leftIn.y);
        vertex(this.left.x + (1 * s), this.left.y - (this.shrink21 * s));
        vertex(this.left.x, this.left.y);
        endShape();
        // Left Bottom
        fill(30);
        beginShape();
        vertex(this.center.x, this.center.y);
        vertex(this.bottomIn.x, this.bottomIn.y);
        vertex(this.left.x + (7 * s), this.left.y + (this.shrink22 * s));
        vertex(this.left.x, this.left.y);
        endShape();
        // Right Top
        fill(170 + this.center.x);
        beginShape();
        vertex(this.center.x, this.center.y);
        vertex(this.rightIn.x, this.rightIn.y);
        vertex(this.right.x - (1 * s), this.right.y - (this.shrink21 * s));
        vertex(this.right.x, this.right.y);
        endShape();
        // Right Bottom
        fill(80 + this.center.x);
        beginShape();
        vertex(this.center.x, this.center.y);
        vertex(this.bottomIn.x, this.bottomIn.y);
        vertex(this.right.x - (7 * s), this.right.y + (this.shrink22 * s));
        vertex(this.right.x, this.right.y);
        endShape();
    }
}
