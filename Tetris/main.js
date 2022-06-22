const container = document.getElementById('container');
const xCount = 15;
const yCount = 10;
​
function drawBoard() {
    for (let i = 0; i < xCount; i++) {
        for (let j = 0; j < yCount; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.j = j;
            cell.dataset.i = i;
            container.append(cell);
            if(i === 0 && j ===4) {
                cell.classList.add('active');
            }
        }
    }
}
​
drawBoard();
​
function moveDown() {
    const activeEl = document.getElementsByClassName('active')[0];
    activeEl.classList.remove('active');
    const nextEl = document.querySelectorAll(`div[data-i="${+activeEl.dataset.i + 1}"]`)[+activeEl.dataset.j];
    nextEl.classList.add('active');
}
function moveLeft(){
    const activeEl = document.getElementsByClassName('active')[0];
    activeEl.classList.remove('active');
    const nextEl = document.querySelectorAll(`div[data-j="${+activeEl.dataset.j-1}"]`)[+activeEl.dataset.i];
    nextEl.classList.add('active');
}
​
window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
        moveDown();
    }
    else if(e.key === 'ArrowLeft'){
        moveLeft()
    }
});
​

// "use strict"

// const container = document.getElementById("container");
// const xCount = 10;
// const yCount = 15;

// function drawBoard() {
//   for (let i = 0; i < xCount; i++) {
//     for (let j = 0; j < yCount; j++) {
//       const cell = document.createElement("div");
//       cell.classList.add("cell");
//       cell.dataset.x = j;
//       cell.dataset.y = i;
//       container.append(cell);
//       if (i === 0 && j === 4) {
//         cell.classList.add("active");
//       }
//     }
//   }
// }

// drawBoard();

// function moveDown() {
//   const activeEl = document.getElementsByClassName("active")[0];
//   activeEl.classList.remove("active");
//   const nextEl = document.querySelector(
//     `div[data-y="${+activeEl.dataset.y + 1}"]`
//   );
//   nextEl.classList.add("active");
// }
// function moveUp() {
//   const activeEl = document.getElementsByClassName("active")[0];
//   activeEl.classList.remove("active");
//   const nextEl = document.querySelector(
//     `div[data-y="${+activeEl.dataset.y + 1}"]`
//   );
//   nextEl.classList.add("active");
// }
// function moveLeft() {
//   const activeEl = document.getElementsByClassName("active")[0];
//   activeEl.classList.remove("active");
//   const nextEl = document.querySelector(
//     `div[data-y="${+activeEl.dataset.y + 1}"]`
//   );
//   nextEl.classList.add("active");
// }
// function moveRight() {
//   const activeEl = document.getElementsByClassName("active")[0];
//   activeEl.classList.remove("active");
//   const nextEl = document.querySelector(
//     `div[data-y="${+activeEl.dataset.y + 1}"]`
//   );
//   nextEl.classList.add("active");
// }

// window.addEventListener("keydown", (e) => {
//   // console.log(window(keydown))
//   if (e.key === "ArrowDown") {
//     moveDown();
//   } else if (e.key === "ArrowLeft") {
//     moveLeft();
//   } else if (e.key === "ArrowRight") {
//     moveRight();
//   } else if (e.key === "ArrowUp") {
//     moveUp();
//   }
// });
