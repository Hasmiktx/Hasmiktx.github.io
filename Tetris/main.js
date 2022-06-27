const conteiner = document.getElementById("conteiner");
const rowCount = 15;
const colCount = 10;
function drawBoard() {
  for (let row = 0; row < rowCount; row++) {
    for (let col = 0; col < colCount; col++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.dataset.row = row;
      cell.dataset.col = col;
      conteiner.append(cell);
      if (row === 0 && col === 4) {
        cell.classList.add("active");
      }
    }
  }
}
drawBoard();

function moveDown() {
  const activeEl = document.getElementsByClassName("active")[0];
  activeEl.classList.remove("active");
  nextEl = document.querySelectorAll(
    `div[data-row="${+activeEl.dataset.row + 1}"]`
  )[+activeEl.dataset.col];
  freezeEl =
    document.querySelectorAll(`div[data-row="14"]`)[+activeEl.dataset.col];
  if (nextEl === freezeEl) {
    nextEl.classList.add("freeze");
  } else {
    nextEl.classList.add("active");
  }
}

function moveUp() {
  const activeEl = document.getElementsByClassName("active")[0];
  activeEl.classList.remove("active");
  nextEl = document.querySelectorAll(
    `div[data-row="${+activeEl.dataset.row - 1}"]`
  )[+activeEl.dataset.col];
  nextEl.classList.add("active");
}

function moveLeft() {
  const activeEl = document.getElementsByClassName("active")[0];
  activeEl.classList.remove("active");
  let nextEl = document.querySelectorAll(
    `div[data-col="${+activeEl.dataset.col - 1}"]`
  )[+activeEl.dataset.row];
  // const freezeEl = document.querySelectorAll(`div[data-col="${0 - 1}"]`)[
  //   +activeEl.dataset.row
  // ];
  // if (nextEl === freezeEl) {
  //   nextEl = freezeEl;
  //   console.log(freezeEl);
  //   nextEl.classList.add("active");
  // } else {
  nextEl.classList.add("active");
  //}
}

function moveRight() {
  const activeEl = document.getElementsByClassName("active")[0];
  activeEl.classList.remove("active");

  const nextEl = document.querySelectorAll(
    `div[data-col="${+activeEl.dataset.col + 1}"]`
  )[+activeEl.dataset.row];
  nextEl.classList.add("active");
  // const freezeEl = document.querySelectorAll(`div[data-col="${9 + 1}"]`)[
  //   +activeEl.dataset.row
  // ];
}

window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowDown") {
    moveDown();
  } else if (e.key === "ArrowLeft") {
    moveLeft();
  } else if (e.key === "ArrowRight") {
    moveRight();
  } else if (e.key === "ArrowUp") {
    moveUp();
  }
});
