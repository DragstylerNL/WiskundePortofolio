const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let object = [{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},
    {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}];

function SetUp(){

    for(let i = 0; i < 200; i++){
        object[i].object = new Point(100 ,100 ,50,"Red");
        object[i].pos = new Vector2D(GetRNGsus(1700) + object[i].object.r,GetRNGsus(800) + object[i].object.r);
        object[i].vel = new Vector2D(4,4);
        object[i].acc = new Vector2D(0,0.25);
        console.log("spawned");
    }

    Update();
}

function Update(){
    context.fillStyle = 'rgba(66, 134, 244, 0.05)';
    context.fillRect(0,0,canvas.width,canvas.height);
    requestAnimationFrame(Update);
    
    // context.beginPath();
    // context.strokeStyle = "grey";
    // context.moveTo(object[0].pos.x, object[0].pos.y);
    // for (let i = 1; i < object.length; i++) {
    //     context.lineTo(object[i].pos.x,object[i].pos.y);
    // }
    // context.closePath();
    // context.fill();
    // context.stroke();


    for(let i = 0; i < 200; i++){
        
        if (object[i].pos.x >= canvas.width - object[i].object.r|| object[i].pos.x <= 0 + object[i].object.r){
            object[i].vel.x = -object[i].vel.x;
             object[i].pos.add(object[i].vel);
            
        }
        else if (object[i].pos.y >= canvas.height - object[i].object.r|| object[i].pos.y <= 0 + object[i].object.r){
            object[i].vel.y = -object[i].vel.y;
             object[i].pos.add(object[i].vel);
            
        }

        object[i].vel.add(object[i].acc);        
        object[i].pos.add(object[i].vel);
        object[i].object.position = object[i].pos;
        object[i].object.draw(context);
        
    }

}

SetUp();

function GetRNGsus(max){
    return Math.random()*max;
}