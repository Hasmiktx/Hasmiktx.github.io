const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
const circles=[];
const deltaTime=0.1;


const draw=()=>{
    ctx.clearRect(0,0,canvas.width,canvas.height)
  circles.forEach((ball)=>{
    ctx.beginPath();
    ctx.arc(ball.x,ball.y, ball.radius, 0, 2 * Math.PI);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.closePath();
  })  

}

const update=()=>{
    circles.forEach((ball) =>{
       
            
            ball.yDelta += 0.5 * deltaTime;
        
        ball.y += ball.yDelta

        if (ball.y + ball.radius > canvas.height) {
            ball.y = canvas.height - ball.radius;
            ball.yDelta *= -0.8; // Dampening effect on bounce
        }
        
      });
}




function tick() {
    requestAnimationFrame(tick);
    update();
    draw();
  }
  
  tick();

  document.addEventListener("click",(evt)=>{
   circles.push({
    yDelta:0,
    x:evt.clientX,
    y:evt.clientY,
    radius:30
   })
  })