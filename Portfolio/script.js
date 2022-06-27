const conteiner = document.getElementById("conteiner");

const skills = document.getElementById("skills");
const contsct = document.getElementById("contact");

const skillText = `Skills<br><br>
Javascript<br>
HTML<br>
CSS<br><br>`;

function skillFunc() {
  document.body.style.backgroundColor = "darkgray";
  conteiner.innerHTML = skillText;

  conteiner.style.textAlign = "center";
  conteiner.style.fontSize = "30px";
  conteiner.style.margin = "30px";

  conteiner.style.backgroundImage = "url('images/pic2.jpg')";
}

skills.addEventListener("click", skillFunc);
