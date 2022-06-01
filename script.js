const canvas = document.getElementById('myCanvas');
canvas.width=200;

//car
const ctx = canvas.getContext("2d");
const car = new Car(100,100,30,50);
car.draw(ctx);

animate();

function animate(){
    car.update();
    //so the canvas is updayted always 
    canvas.height=window.innerHeight;
    car.draw(ctx);
    //updates every second
    requestAnimationFrame(animate);
}













