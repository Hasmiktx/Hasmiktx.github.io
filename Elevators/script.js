function moveElevators() {

    const elavators= document.querySelectorAll(".elevator");
    
    
    const floorDiv= document.getElementById("floors");
    
    
    
     for(let i = 1;i<=20;i++){
      const div=document.createElement("div");
      div.classList.add("floor");
      div.innerHTML=`${i} floor`;
      
      const img = document.createElement("img");
      img.src="smile.png";
      div.appendChild(img);
      floorDiv.appendChild(div);
    
     }
    
    
     const floors= document.querySelectorAll(".floor");
    
     let diffArr;
    floors.forEach((fl,i)=>{
    
      fl.onclick=function(){
    
        diffArr=[];
        const floor= i+1;
        
        elavators.forEach((elevator,j)=>{
          elevator.style.backgroundColor="rgb(225, 137, 247)";
          
          let diff= Math.abs(floor-(Number(elevator.innerHTML)));
          diffArr.push(diff);
          
    
    
        })
        let nearElevator=Math.min(...diffArr);
        console.log(diffArr,"diffArr")
        let nearIndx=diffArr.indexOf(nearElevator);
        let secondIndx=diffArr.lastIndexOf(nearElevator);
        console.log(nearIndx,"near");
        console.log(secondIndx, "second")
        if(nearIndx!==secondIndx){
        
          alert(`Avaible elevators in floor ${elavators[nearIndx].innerHTML} and ${elavators[secondIndx].innerHTML}`)
        }
        elavators[nearIndx].innerHTML=floor;
        elavators[nearIndx].style.backgroundColor="red";
        
        fl.appendChild(elavators[nearIndx])
    
    
        
      }
    })
    }
    moveElevators();