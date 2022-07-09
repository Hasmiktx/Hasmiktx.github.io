function playGame() {
  const conteiner = document.getElementById("conteiner");
  const display = document.getElementById("display");
  const playBtn = document.getElementById("play");
  const pauseBtn = document.getElementById("pause");
  const scoretxt = document.getElementsByTagName("span")[0];
  scoretxt.style.color = "red";
  gameOverDiv = document.createElement("div");

  const color = ["red", "deeppink", "chartreuse", "blue", "orange"];
  let random = getRandomInt(0, color.length - 1);
  let startIndx = 3;
  let scoreNum = 0;

  let timerId;

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
      }
    }
  }
  drawBoard();

  let cells = Array.from(document.querySelectorAll(".cell"));

  const lastRow = [];
  const leftMargin = [];
  const rightMargin = [];

  for (let i = (rowCount - 1) * colCount; i < cells.length; i++) {
    lastRow.push(i);
  }
  for (let i = 0; i < cells.length; i += colCount) {
    leftMargin.push(i);
    rightMargin.push(i + 9);
  }

  /*         create        icons     5 types     */

  const lTetro = [
    [0, 1, colCount, colCount * 2],
    [0, 1, 2, colCount + 2],

    [1, colCount + 1, colCount * 2, colCount * 2 + 1],
    [0, colCount, colCount + 1, colCount + 2],
  ];
  const zTetro = [
    [0, 1, colCount + 1, colCount + 2],
    [1, colCount, colCount + 1, colCount * 2],

    [1, 2, colCount, colCount + 1],

    [0, colCount, colCount + 1, colCount * 2 + 1],
  ];

  const tTetro = [
    [0, 1, 2, colCount + 1],
    [1, colCount, colCount + 1, colCount * 2 + 1],

    [1, colCount, colCount + 1, colCount + 2],
    [0, colCount, colCount + 1, colCount * 2],
  ];

  const quadroTetro = [
    [0, 1, colCount, colCount + 1],
    [0, 1, colCount, colCount + 1],
    [0, 1, colCount, colCount + 1],
    [0, 1, colCount, colCount + 1],
  ];

  iTetro = [
    [0, colCount, colCount * 2, colCount * 3],
    [colCount, colCount + 1, colCount + 2, colCount + 3],

    [0, colCount, colCount * 2, colCount * 3],

    [colCount, colCount + 1, colCount + 2, colCount + 3],
  ];

  /* assign array of icon types, current icon type and current rotation type */

  const tetroArray = [lTetro, quadroTetro, zTetro, tTetro, iTetro];
  let rotationCount = 2;
  let current;

  /*   getRandom,   drawTetro, unDraw      functions    */

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function drawTetro() {
    current.forEach((val) => {
      cells[startIndx + val].classList.add("tetro");

      cells[startIndx + val].style.backgroundColor = color[random];
    });
  }

  function unDraw() {
    current.forEach((val) => {
      cells[startIndx + val].classList.remove("tetro");
      cells[startIndx + val].style.backgroundColor = "";
    });
  }

  /*              play                   function                */

  function play() {
    if (!display.contains(gameOverDiv)) {
      clearInterval(timerId); ////////////////////important or no???///////////////////////??
      if (!current) {
        current = tetroArray[random][rotationCount];
        drawTetro();
      }
      timerId = setInterval(moveDown, 1000);
    }
  }

  /*               moveDown   moveLeft  moveRight   functions                  */

  function moveDown() {
    unDraw();
    startIndx += colCount;
    drawTetro();
    freeze();
  }

  function moveLeft() {
    if (
      !current.some(
        (val) =>
          cells[startIndx - 1 + val].classList.contains("freeze") ||
          leftMargin.includes(startIndx + val)
      )
    ) {
      unDraw();
      startIndx--;

      drawTetro();
    }
  }

  function moveRight() {
    if (
      !current.some(
        (val) =>
          cells[startIndx + val + 1].classList.contains("freeze") ||
          rightMargin.includes(startIndx + val)
      )
    ) {
      unDraw();
      startIndx++;
      drawTetro();
    }
  }
  /*                          rotate func                                                */

  function rotate() {
    // ????? if condition????    and   iTetro ?????????????
    if (
      !current.some(
        (val) =>
          leftMargin.includes(startIndx + val) ||
          rightMargin.includes(startIndx + val) ||
          cells[startIndx + val - 1].classList.contains("freeze") ||
          cells[startIndx + val + 1].classList.contains("freeze") ||
          cells[startIndx + val + colCount].classList.contains("freeze")
      )
    ) {
      unDraw();
      rotationCount++;
      if (rotationCount === current.length) {
        rotationCount = 0;
      }

      current = tetroArray[random][rotationCount];

      drawTetro();
    }
  }

  /*                          freeze function                            */

  function freeze() {
    if (
      current.some(
        (val) =>
          current.some((val) => lastRow.includes(startIndx + val)) ||
          cells[startIndx + val + colCount].classList.contains("freeze")
      )
    ) {
      current.forEach((val) => {
        cells[startIndx + val].classList.add("freeze");
      });

      startIndx = 3;
      let nextInteger = getRandomInt(0, color.length - 1);
      random = nextInteger;
      current = tetroArray[random][rotationCount];

      drawTetro();
      score();
      gameOver();
    }
  }
  /*                                  score func                 */
  function score() {
    for (let index = 0; index < cells.length; index += 10) {
      const row = [];
      for (let div = 0; div < 10; div++) {
        row.push(index + div);
      }

      if (row.every((val) => cells[val].classList.contains("freeze"))) {
        scoreNum += 10;
        scoretxt.innerHTML = scoreNum;

        row.forEach((val) => {
          cells[val].classList.remove("freeze");
          cells[val].classList.remove("tetro");

          cells[val].style.backgroundColor = "";
        });
        const removed = cells.splice(index, colCount);
        cells = removed.concat(cells);
        cells.forEach((divCell) => conteiner.appendChild(divCell));
      }
    }
  }
  /*                 gameOver                         */

  function gameOver() {
    gameOverDiv.classList.add("gameOverDiv");
    gameOverDiv.innerHTML = "GAME OVER";
    if (
      current.some((val) => cells[startIndx + val].classList.contains("freeze"))
    ) {
      clearInterval(timerId);
      gameOverDiv.style.display = "block";
      conteiner.remove();
      display.appendChild(gameOverDiv);
    }
  }

  /*                               addEventListeners                     */

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown") {
      // setInterval or clearInterval ?????///////////////////////////////
      moveDown();
    } else if (e.key === "ArrowLeft") {
      moveLeft();
    } else if (e.key === "ArrowRight") {
      moveRight();
    } else if (e.key === "ArrowUp") {
      rotate();
    }
  });
  playBtn.addEventListener("click", play);
  pauseBtn.addEventListener("click", () => clearInterval(timerId));
}

playGame();
