
const col= document.querySelectorAll(".col");

const locker=document.querySelectorAll(".material-symbols-rounded");

const range ="0123456abcdef";

document.addEventListener("keydown",(e )=>{
    if(e.code.toLowerCase()=== "space"){
        chooseColor();
    }
})
 document.addEventListener("click",(e)=>{
    e.preventDefault();

    if(e.target.dataset.type === "copy"){
    //    console.log( e.target.childNodes[0].data)
      navigator.clipboard.writeText(e.target.childNodes[0].data)
    }
 })
function lockOrNo(){
locker.forEach((span)=>{
    span.onclick=function(){
        
      span.innerHTML= (span.innerHTML=== "lock" ? "lock_open":"lock");
    //   console.log(span.innerHTML,"span");

    }
})
}
function generateColor(){
     let color="#";
    for(let i=0;i<6;i++){
        let indx =Math.floor(Math.random()*range.length);
        color+=range[indx];
    }
    return color;
}
function chooseColor(isStart=false){
    
    const colorArr=isStart? getColorsFromHash():[];
    col.forEach((col,i) => {
        const text= col.querySelector("h2");
        const spanLock=col.querySelector("span").innerHTML;
        if(spanLock=== "lock"){
            colorArr.push(text.innerHTML)
            return;
        }
        const backColor = isStart && document.location.hash.length >1 ? colorArr[i] : generateColor();
        if(!isStart){
         colorArr.push(backColor);
        }
        text.innerHTML=backColor;
        
        
        col.style.backgroundColor = backColor;
        
         
         
    });
    
    updateHash(colorArr)
    lockOrNo(); 

     function updateHash(arr=[]){
        document.location.hash =arr.map((color) =>{
            
           return color.substring(1);
          }).join("-")
        
     }

    function getColorsFromHash(){
        if(document.location.hash.length>1){
            return document.location.hash.substring(1).split("-").map(color=>`#${color}`)
        }
    }
   
}

chooseColor(true);

