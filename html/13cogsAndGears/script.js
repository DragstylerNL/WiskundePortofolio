const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let cog = new Image();
let cog2 = new Image();
cog.src = "cog_12_1.png";
cog2.src = "cog_12_2.png";
cog.rotation = 0;
cog2.rotation = 0;


cog.addEventListener('load',()=>{
    animate();
})

function animate(){
    context.clearRect(-400,-400,canvas.width,canvas.height);
    requestAnimationFrame(animate);

    context.save();
    context.translate(400,300);
    context.rotate(cog.rotation);
    context.drawImage(cog,-0.5 * cog.width,-0.5 * cog.height);
    context.translate(1,1);
    context.restore();

    context.save();
    context.translate(400,700);
    context.rotate(cog2.rotation);
    context.drawImage(cog2,-0.5 * cog2.width,-0.5 * cog2.height);
    context.translate(1,1);
    context.restore();

    cog.rotation += 0.01;
    cog2.rotation -= 0.01;
}


function GetRNGsus(max){
    return Math.random()*max;
}