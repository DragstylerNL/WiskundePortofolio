const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

for (var i = 0; i < 10000; i++){
    let a = new Point(GetRNGsus(canvas.width),GetRNGsus(canvas.height),GetRNGsus(20)+10 , 'red');  
    a.draw(context);
}

function GetRNGsus(max){
    return Math.random()*max;
}