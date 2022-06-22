const array = [
  "images/img1.jpg",
  "images/img2.jpg",
  "images/img3.jpg",
  "images/img4.jpg",
  "images/img5.jpg",
];

const playBtn = document.getElementById("playbtn");
const pauseBtn = document.getElementById("pausebtn");
const slide = document.getElementsByClassName("child")[0];
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
let timerId;
let indx = 0;

function slideShowNext() {
  if (indx < array.length - 1) {
    indx++;
  } else {
    indx = 0;
  }
  slide.style.backgroundImage = "url(" + array[indx] + ")";
}
function slideShowPrev() {
  if (indx > 0 && indx <= array.length - 1) {
    indx--;
  } else {
    indx = array.length - 1;
  }
  slide.style.backgroundImage = "url(" + array[indx] + ")";
}

nextBtn.addEventListener("click", slideShowNext);
prevBtn.addEventListener("click", slideShowPrev);

playBtn.addEventListener("click", function () {
  clearInterval(timerId);
  timerId = setInterval(slideShowNext, 1500);
});
pauseBtn.addEventListener("click", function () {
  clearInterval(timerId);
});
