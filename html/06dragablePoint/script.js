const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let myPoints = [];
let counter = 0;

function SetUp(){

    for(let i = 0; i < 3; i++){
        let point = new Point(GetRNGsus(canvas.width), GetRNGsus(canvas.height),
                                20, "#" + Math.floor(GetRNGsus(255*255*255)).toString(16));
            myPoints.push(point);
            myPoints[i].drag();
    }

    Update();
}

function Update(){
    context.clearRect(0,0,canvas.width,canvas.height);
    requestAnimationFrame(Update);
    
    context.beginPath();
    context.strokeStyle = "grey";
    context.moveTo(myPoints[0].x, myPoints[0].y);
    for (let i = 0; i < myPoints.length; i++) {
        context.lineTo(myPoints[i].x,myPoints[i].y);
    }
    context.closePath();
    context.stroke();

    for(let i = 0; i < 3; i++){
        
        myPoints[i].draw(context);
    }
}

// document.addEventListener('mousedown',(evt)=>{
//     var x = event.clientX;     
//     var y = event.clientY;
    
//     for(let i = 0; i < myPoints.length; i++){
//         let tempCalc = myPoints[i].distanceToOtherPoint(x,y);
//         let pointRadius = Math.sqrt((myPoints[i].r *myPoints[i].r) + (myPoints[i].r *myPoints[i].r));
//         if( tempCalc < 0){ tempCalc *= -1;}if( tempCalc < pointRadius){
//             myPoints[i].drag = true;
//         }
//     }
// });

SetUp();

function GetRNGsus(max){
    return Math.random()*max;
}