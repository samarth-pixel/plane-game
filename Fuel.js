class Fuel {
    constructor(x,y,w,h) {
        
        this.w = 50;
        this.h = 50;
        this.image = loadImage("./images/fuel-min.png");
    }

    display() {
        
        push();
        rect(x,y, w, h);
        pop();

        image(x,y,50,50);
    }
}