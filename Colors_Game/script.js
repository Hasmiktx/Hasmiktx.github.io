const cols=document.querySelectorAll(".col");
const divs =document.querySelectorAll(".div");

let clickedDivs=[];
let indexes=[];
cols.forEach((col,i) => {
  col.onclick = ()=>{ 
    
    startGame(i);
    

    // console.log(cols,"cols");
    // console.log(divs,"divs")
    // console.log(indexes,"indexes");
    // console.log(clickedDivs,"clicked")
    
    
    
  }
});
   




function onDivClick(i){
  
    divs[i].style.display="block";
    divs[i].style.transform="scale(1.1)";
    divs[i].style.zIndex = "3";
  }
    
   
   function startGame(i){
    onDivClick(i);
  
   if(clickedDivs.length<2 ){
    clickedDivs.push(divs[i]);
    indexes.push(i);
    
  }
       

  if(clickedDivs.length===2 ){
    
    

    if(clickedDivs[0].classList[1]===clickedDivs[1].classList[1]){
      
      // console.log("wow",clickedDivs);
      setTimeout(() => {
         
        //  console.log(indexes[0],"ind0")
        //  console.log(indexes[1],"ind1")
         if(cols[indexes[0]] !== cols[indexes[1]]) { 
          cols[indexes[0]].remove();
          cols[indexes[1]].remove();
          clickedDivs=[];
          indexes=[]; 
        }else{
          indexes.pop();
          clickedDivs.pop();
        }

        

    
      }, 1000);
     
      
    } else{
      setTimeout(() => {
        
        
       divs[indexes[0]].style.display="none";
       divs[indexes[1]].style.display="none";
       clickedDivs=[];
       indexes=[];


   
     }, 1000);
    }
    
  }


}