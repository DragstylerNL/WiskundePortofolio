const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let myPoints = [];
let counter = 0;

function SetUp(){
    Update();
}

function Update(){
    context.clearRect(0,0,canvas.width,canvas.height);
    requestAnimationFrame(Update);

    while(counter == 12){
        let point = new Point(GetRNGsus(canvas.width), 0,
                            20, "#" + Math.floor(GetRNGsus(255*255*255)).toString(16));
        myPoints.push(point);
        counter = 0;
    }
    counter++

    for(let i = 0; i <= myPoints.length; i++){
        myPoints[i].addY(3);
        myPoints[i].draw(context);
        if(myPoints[i].y >= canvas.height){
            myPoints.splice(i,1);
        }
    }
}

document.addEventListener('mousedown',(evt)=>{
    var x = event.clientX;     
    var y = event.clientY;
    
    for(let i = 0; i <= myPoints.length; i++){
        let tempCalc = myPoints[i].distanceToOtherPoint(x,y);
        let pointRadius = Math.sqrt((myPoints[i].r *myPoints[i].r) + (myPoints[i].r *myPoints[i].r));
        if( tempCalc < 0){ tempCalc *= -1;}        
        if( tempCalc < pointRadius){
            myPoints.splice(i,1);
        }
    }
});

SetUp();

function GetRNGsus(max){
    return Math.random()*max;
}