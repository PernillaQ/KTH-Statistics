let myCanvas = document.getElementById("myCanvas");
let myCanvas2 = document.getElementById("myCanvas2");
 
let ctx = myCanvas.getContext("2d");

function drawLine(ctx, startX, startY, endX, endY)
{
    ctx.beginPath();
    ctx.moveTo(startX,startY);
    ctx.lineTo(endX,endY);
    ctx.stroke();
}
function drawArc(ctx, centerX, centerY, radius, startAngle, endAngle){
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.stroke();
}
function drawPieSlice(ctx,centerX, centerY, radius, startAngle, endAngle, color ){
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(centerX,centerY);
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.closePath();
    ctx.fill();
}
let colorChart1 = {
    "color1": 8,
    "color2": 18,
    "color3": 2,
    "color4": 20
};
let myData = {
	"color1": 12, 
	"color2": 30,
	"color3": 1, 
	"color4": 18
};

let Piechart = function(options){
    this.options = options;
    this.canvas = options.canvas;
    this.ctx = this.canvas.getContext("2d");
    this.colors = options.colors;
 
    this.draw = function(){
        let total_value = 0;
        let color_index = 0;
        for (let categ in this.options.data){
            let val = this.options.data[categ];
            total_value += val;
        }
 
        let start_angle = 0;
        for (categ in this.options.data){
            val = this.options.data[categ];
            let slice_angle = 2 * Math.PI * val / total_value;
 
            drawPieSlice(
                this.ctx,
                this.canvas.width/2,
                this.canvas.height/2,
                Math.min(this.canvas.width/2,this.canvas.height/2),
                start_angle,
                start_angle+slice_angle,
                this.colors[color_index%this.colors.length]
            );
 
            start_angle += slice_angle;
            color_index++;
        }
 
    }
}

let myPiechart = new Piechart(
    {
        canvas:myCanvas,
        data:colorChart1,
        colors:["#f4f4f4","#00c160", "#c51f33","#126ccc"]
    }
);

myPiechart.draw();
let my2PieChart = new Piechart(
    {
		canvas:myCanvas2,
	    data:myData, 
	    colors:["#f4f4f4","#00c160", "#c51f33","#126ccc"] 
    }
);
my2PieChart.draw();
let my3Piechart = new Piechart(
    {
        canvas:myCanvas3,
        data:colorChart1,
        colors:["#f4f4f4","#00c160", "#c51f33","#126ccc"]
    }
);

my3Piechart.draw();
let my4PieChart = new Piechart(
    {
        canvas:myCanvas4,
        data:myData, 
        colors:["#f4f4f4","#00c160", "#c51f33","#126ccc"] 
    }
);
my4PieChart.draw();



