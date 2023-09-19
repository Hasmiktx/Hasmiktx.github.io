const widthInput = document.getElementById("width");
const heightInput = document.getElementById("height");
const colorsInput = document.getElementById("colors");
const generateButton = document.getElementById("generate");

const wallContainer = document.getElementById("wall");
let colorsArr=[];

generateButton.addEventListener("click", generateWall);


function generateWall() {
    colorsArr=[];
    const width = parseInt(widthInput.value);
    const height = parseInt(heightInput.value);
    const colors = parseInt(colorsInput.value);
    
    wallContainer.style.setProperty("--width", width);
    
    wallContainer.innerHTML = "";
    while(colorsArr.length < colors){
        
      const newColor=getRandomColor();
      if(!colorsArr.includes(newColor)){
        colorsArr.push(newColor)
      }
     
    }
    // console.log(colorsArr,"colorArr")
    let k=0;
    for (let i = 0; i < height; i++) {
        
        for (let j = 0; j < width; j++) {
            const brick = document.createElement("div");
            brick.classList.add("brick");
            
            
             brick.style.backgroundColor = k<colorsArr.length? colorsArr[k]:colorsArr[Math.floor(Math.random() * colorsArr.length)];

            brick.addEventListener("click", () => toggleColor(brick));

            wallContainer.appendChild(brick);
            k++;
            
        }
    }
}

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function toggleColor(brick) {
    
        brick.style.backgroundColor=colorsArr[Math.floor(Math.random() * colorsArr.length)]
        

    
}



// Initial wall generation
generateWall();



