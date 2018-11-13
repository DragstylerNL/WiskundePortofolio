const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let myPoints = [];

function SetUp(){
    Update();
}

function Update(){
    context.clearRect(0,0,canvas.width,canvas.height);
    requestAnimationFrame(Update);
    let point = new Point(GetRNGsus(canvas.width), GetRNGsus(canvas.height),
                          GetRNGsus(10) + 10, "#" + Math.floor(GetRNGsus(255*255*255)).toString(16));
    myPoints.push(point);

    context.beginPath();
    context.strokeStyle = "grey";
    context.moveTo(myPoints[0].x, myPoints[0].y);
    for (let i = 0; i < myPoints.length; i++) {
        context.lineTo(myPoints[i].x,myPoints[i].y);
    }
    context.closePath();
    context.stroke();

    for (let i = 0; i <myPoints.length; i++){
        myPoints[i].draw(context);
        myPoints[i].print(context, i)
    }
}

SetUp();

function GetRNGsus(max){
    return Math.random()*max;
}