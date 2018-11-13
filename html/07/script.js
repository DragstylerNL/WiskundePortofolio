const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let myPoints = [];
let counter = 0;

let f = new LinearFunction(10,100);

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

    for(let i = 0; i < 3; i++){
        let j = i + 1; if(j==3){j=0;}
        f.calcSloInt(myPoints[i],myPoints[j]);
        f.draw(context,canvas);
        myPoints[i].draw(context);
    }
}

SetUp();

function GetRNGsus(max){
    return Math.random()*max;
}