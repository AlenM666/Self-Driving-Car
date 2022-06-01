class Car{
    constructor(x,y,width,height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.speed=0;
        this.acceleration=0.2;
        this.maxSpeed = 3;
        this.friction = 0.05;

        this.controls = new Controls();
    }

    update() {
        //forward and backwards speed
        if(this.controls.forward) {
            this.speed += this.acceleration;

        }
        if(this.controls.reverse){
            this.speed -= this.acceleration;
        }

        //speed calculations
        if(this.speed > this.maxSpeed) {
            this.speed = this.maxSpeed;
        }
        if(this.speed <- this.maxSpeed/2){
            this.speed =- this.maxSpeed/2;
        }

        if(this.speed > 0){
            this.speed -= this.friction;
        }
        if(this.speed < 0){
            this.speed += this.friction;
        }

        //abs speed so the car doesnt move
        if(Math.abs(this.speed)<this.friction) {
            this.speed = 0;
        }

        //left and right controls
        if(this.controls.right){
            this.x += 2;
        }
        if(this.controls.left){
            this.x -= 2;
        }

        //so the car moves
        this.y -= this.speed;
    }


// drawing the car
    draw(ctx){
        ctx.beginPath();
        ctx.rect(
            this.x-this.width/2,
            this.y-this.height /2,
            this.width,
            this.height
        );
        ctx.fill();
    }
}