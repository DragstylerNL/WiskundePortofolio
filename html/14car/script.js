const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let background = new Image();
background.src = "1.jpg";

let wheel = new Image();
wheel.src = "wheel.png";
wheel.rotation = 0;

let car = new Image();
car.src = "auto.fw.png";
car.positionX = 0;
car.positionY = 500;

car.speed = 1;

addEventListener('keydown',(evt)=>{
    console.log(evt.key);
    switch (evt.key) {
      case "ArrowRight":
        car.speed += 1;
        break;
        case "ArrowLeft":{
        car.speed -= 1;
        break;
        }
      default:
  
    }
  })
wheel.addEventListener('load',()=>{
    animate();
})

function animate(){
    context.clearRect(-400,-400,canvas.width,canvas.height);
    requestAnimationFrame(animate);

    context.drawImage(background,0,0,canvas.width,canvas.height);
    context.drawImage(car,car.positionX,car.positionY);

    context.save();
    context.translate(car.positionX + 213,700);
    context.rotate(wheel.rotation);
    context.drawImage(wheel,-0.5 * wheel.width,-0.5 * wheel.height);
    context.translate(1,1);
    context.restore();

    context.save();
    context.translate(car.positionX + 752,700);
    context.rotate(wheel.rotation);
    context.drawImage(wheel,-0.5 * wheel.width,-0.5 * wheel.height);
    context.translate(1,1);
    context.restore();

    wheel.rotation += car.speed / 80;

    car.positionX += car.speed;

    if(car.positionX >= canvas.width){
        car.positionX = -car.width;
    }

    if(car.positionX <= -10-car.width){
        car.positionX = canvas.width;
    }
}