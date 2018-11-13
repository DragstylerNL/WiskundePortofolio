class LinearFunction{
    constructor(slope,intercept){
        this.slope = slope;
        this.intercept = intercept;
    }

    calcY(x){
        return this.slope*x+this.intercept;
    }

    calcSloInt(p1,p2){
        this.slope = (p2.y - p1.y)/(p2.x - p1.x);
        this.intercept = p1.y - (p1.x * this.slope);
    }

    draw(context, canvas){
        context.beginPath();
        context.strokeStyle = "grey";
        
        context.moveTo(0, this.intercept);
        context.lineTo(canvas.width, (canvas.width * this.slope) + this.intercept);
        
        context.closePath();
        context.stroke();
    }

    intersection(m){
        let ans = {};
        ans.x = (this.intercept - m.intercept) / (m.slope - this.slope);
        ans.y = this.slope * ans.x + this.intercept;
        return ans;
    }
}