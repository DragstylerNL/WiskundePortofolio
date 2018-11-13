class Point {

    constructor(x, y, r,color){
        this.x = x;
        this.y = y;
        this.r = r;
        this.color = color;
    }

    draw(context){
        this.context = context;
        context.beginPath();
        context.arc(this.x, this.y, this.r, 0, 2*Math.PI);
        context.fillStyle = this.color;
        context.fill();
        context.lineWidth = "1";
        context.stroke();
        context.closePath();
    }

    print(context, string){
        context.fillStyle = "black";
        context.font = "30px arial";
        context.fillText(string, this.x + 25, this.y + 10);
    }

    addX(addon){
        this.x += addon;
    }
    addY(addon){
        this.y += addon;
    }

    set position(vector){
        this.x = vector.x;
        this.y = vector.y;
    }

    get getPos(){
        let temp = new Vector2d(this.x,this.y);
        return(temp);
    }

    distanceToOtherPoint(x,y){
        let tempX = this.x - x;
        let tempY = this.y - y;
        let distance = Math.sqrt((tempX * tempX) + (tempY * tempY));
        return(distance);
    }

    drag(){
        let mousePos = [];
        let dragstatus = false;
        document.addEventListener('mousedown',(evt)=>{
            mousePos.x = event.clientX;
            mousePos.y = event.clientY;
            console.log(this.distanceToOtherPoint(mousePos.x,mousePos.y),this.r)
            if(this.distanceToOtherPoint(mousePos.x,mousePos.y)<=this.r){
                dragstatus = true;
            } else {
                dragstatus = false;
            }
        });
        document.addEventListener('mouseup',(evt)=>{
            dragstatus = false;
        });
        document.addEventListener('mousemove',(evt)=>{
            if(dragstatus){
            this.x = event.clientX;
            this.y = event.clientY;}
        });
    }
}