function moveElevators() {

    
    const divForEl=document.querySelector(".elevators");
    
    const floorDiv= document.getElementById("floors");
    const divLift= document.querySelectorAll(".elevator_lift")
    
    
    
     for(let i = 1;i<=20;i++){
      const div=document.createElement("div");
      div.classList.add("floor");
      div.innerHTML=`${i} floor`;
      
      const img = document.createElement("img");
      img.src="smile.png";
      div.appendChild(img);
      floorDiv.appendChild(div);
      const divEl=document.createElement("div");
      divEl.classList.add("elevator");
    
      divForEl.appendChild(divEl);
      if(divLift[i-1]){
        divEl.appendChild(divLift[i-1])
      }

    
     }
    
     const elavators= document.querySelectorAll(".elevator");

     const floors= document.querySelectorAll(".floor");
    
     let diffArr;
    floors.forEach((fl,i)=>{
    
      fl.onclick=function(){
    
        diffArr=[];
        const floor= i+1;
        
        divLift.forEach((elevator,j)=>{
          elevator.style.backgroundColor="orange";
          
          let diff= Math.abs(floor-(Number(elevator.innerHTML)));
          diffArr.push(diff);
          
    
    
        })
        let nearElevator=Math.min(...diffArr);
        console.log(diffArr,"diffArr")
        let nearIndx=diffArr.indexOf(nearElevator);
        let secondIndx=diffArr.lastIndexOf(nearElevator);
        // console.log(nearIndx,"near");
        // console.log(secondIndx, "second")
        if(nearIndx!==secondIndx){
        
          alert(`Avaible elevators in floor ${divLift[nearIndx].innerHTML} and ${divLift[secondIndx].innerHTML}`)
        }
        divLift[nearIndx].innerHTML=floor;
        divLift[nearIndx].style.backgroundColor="red";
        //   console.log(floor,"floor")
        elavators[i].appendChild(divLift[nearIndx])
    
    
        
      }
    })
    }
    moveElevators();