const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let myPoints = [];
let s = new Point(0, 0, 20, "#" + Math.floor(GetRNGsus(255*255*255)).toString(16));
let counter = 0;

let l = new LinearFunction(10,100);
let m = new LinearFunction(10,100);

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

    l.calcSloInt(myPoints[0],myPoints[1]);
    // m.calcSloInt(myPoints[2],s);

    s.x = l.intersection(m).x;
    s.y = l.intersection(m).y;

    m.slope = -1/l.slope;
    m.intercept = myPoints[2].y - m.slope * myPoints[2].x;

    for(let i = 0; i < 3; i++){
        myPoints[i].draw(context);
        myPoints[i].print(context, i);
    }
    l.draw(context,canvas);
    m.draw(context,canvas);
    s.draw(context);
    s.print(context, "S");
}

SetUp();

function GetRNGsus(max){
    return Math.random()*max;
}