const widthInput = document.getElementById("width");
const heightInput = document.getElementById("height");
const colorsInput = document.getElementById("colors");
const generateButton = document.getElementById("generate");
const toggleDiagonalButton = document.getElementById("toggleDiagonal");
const wallContainer = document.getElementById("wall");

generateButton.addEventListener("click", generateWall);
// toggleDiagonalButton.addEventListener("click", toggleDiagonal);

function generateWall() {
    const width = parseInt(widthInput.value);
    const height = parseInt(heightInput.value);
    const colors = parseInt(colorsInput.value);
    const colorsArr=[];
    wallContainer.style.setProperty("--width", width);
    
    wallContainer.innerHTML = "";
    for(let i=0;i<colors;i++){
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
            
            // brick.style.backgroundColor = colorsArr[k%colorsArr.length]
             brick.style.backgroundColor = k<colorsArr.length? colorsArr[k]:colorsArr[Math.floor(Math.random() * colorsArr.length)];

            // brick.addEventListener("click", () => toggleColor(brick, i, j));

            wallContainer.appendChild(brick);
            k++;
            // console.log(k,"k")
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

// function toggleColor(brick, row, col) {
//     if (toggleDiagonalButton.classList.contains("active")) {
//         // Toggle diagonal bricks
//         if (row === col || row === wallContainer.style.getPropertyValue("--width") - col - 1) {
//             brick.classList.toggle("diagonal");
//         }
//     } else {
//         // Toggle clicked brick
//         brick.style.backgroundColor = getRandomColor(colorsInput.value);
//     }
// }

// function toggleDiagonal() {
//     toggleDiagonalButton.classList.toggle("active");
//     generateWall();
// }

// Initial wall generation
generateWall();



/*
const widthInput = document.getElementById("width");
const heightInput = document.getElementById("height");
const generateButton = document.getElementById("generate");
const toggleDiagonalButton = document.getElementById("toggleDiagonal");
const wallContainer = document.getElementById("wall");

const colorPalette = ["red", "blue", "green"]; // Define your desired colors here

generateButton.addEventListener("click", generateWall);
toggleDiagonalButton.addEventListener("click", toggleDiagonal);

function generateWall() {
    const width = parseInt(widthInput.value);
    const height = parseInt(heightInput.value);
    
    wallContainer.style.setProperty("--width", width);
    
    wallContainer.innerHTML = "";
    
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            const brick = document.createElement("div");
            brick.classList.add("brick");
            brick.style.backgroundColor = colorPalette[Math.floor(Math.random() * colorPalette.length)];
            brick.addEventListener("click", () => toggleColor(brick, i, j));
            wallContainer.appendChild(brick);
        }
    }
}

function toggleColor(brick, row, col) {
    if (toggleDiagonalButton.classList.contains("active")) {
        // Toggle diagonal bricks
        if (row === col || row === wallContainer.style.getPropertyValue("--width") - col - 1) {
            const currentColorIndex = colorPalette.indexOf(brick.style.backgroundColor);
            const nextColorIndex = (currentColorIndex + 1) % colorPalette.length;
            brick.style.backgroundColor = colorPalette[nextColorIndex];
        }
    } else {
        // Toggle clicked brick
        const currentColorIndex = colorPalette.indexOf(brick.style.backgroundColor);
        const nextColorIndex = (currentColorIndex + 1) % colorPalette.length;
        brick.style.backgroundColor = colorPalette[nextColorIndex];
    }
}

function toggleDiagonal() {
    toggleDiagonalButton.classList.toggle("active");
    generateWall();
}

// Initial wall generation
generateWall();

 */




