const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.height=window.innerHeight;
const backgImg=document.createElement("img");
backgImg.src="gravity.jpg"
const circles=[];




   function Circle(x,y){
    this.x=x,
    this.y=y,
    this.r=getRandom(20,50),
    this.yDelta=0;
    this.color=`rgb(${getRandom(0,255)}, ${getRandom(0,255)}, ${getRandom(0,255)})`
    this.update=function(deltaTime){
          
        this.yDelta += 0.5 * deltaTime;
        
        this.y += this.yDelta

        if (this.y + this.r> canvas.height) {
            this.y = canvas.height - this.r;
            this.yDelta *= -0.8; 
        }

    }
    this.draw=function(){
        if(this.x<this.r){
            this.x=this.x+this.r
        }else if(canvas.width-this.x<this.r){
            this.x=canvas.width-this.r
        }
       
       ctx.beginPath();
       ctx.arc(this.x,this.y, this.r, 0, 2 * Math.PI);
       ctx.fillStyle = this.color;
       ctx.fill();
    
    
    }
   }



const draw=()=>{
    canvas.width  = window.innerWidth/1.4;

    ctx.clearRect(0,0,canvas.width,canvas.height)
    ctx.drawImage(backgImg, 0, 0, canvas.width, canvas.height);
     circles.forEach((ball)=>{
        ball.draw()
    }
    )  

}

const update=()=>{
    circles.forEach((ball) =>{
       ball.update(0.1)
         });
}




function tick() {
    requestAnimationFrame(tick);
    update();
    draw();
  }
  
  tick();
  
//get random  numbers
function getRandom(min,max){
    return Math.floor(Math.random()*(max-min))+min
   }


document.addEventListener("click",(evt)=>{
    
    const ball=new Circle(evt.clientX,evt.clientY);
    
     if(circles.length>=15){
      circles.shift();
     }
      circles.push(ball)

})