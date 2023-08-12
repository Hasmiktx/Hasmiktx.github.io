const col= document.querySelectorAll(".col");
// const txt=document.querySelectorAll(".col-h2");
const locker=document.querySelectorAll(".material-symbols-rounded");

const range ="0123456abcdef";
document.addEventListener("keydown",(e )=>{
    if(e.code.toLowerCase()=== "space"){
        chooseColor(col);
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
function chooseColor(col){
    col.forEach((col,i) => {
        const backColor = generateColor();
        const text= col.querySelector("h2");
        const spanLock=col.querySelector("span").innerHTML;
        // console.log(spanLock,"spantext")
        if(spanLock=== "lock"){
            return;
        }
        text.innerHTML=backColor;
        // txt[i].innerHTML=backColor;
        
        col.style.backgroundColor = backColor;
    });
}

chooseColor(col);
lockOrNo();