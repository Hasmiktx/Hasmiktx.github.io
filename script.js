const conteiner1 = document.getElementById("conteiner1");

const skills = document.getElementById("skills");
const contsct = document.getElementById("contact");

const skillText = `Skills<br><br>
Javascript<br>
HTML<br>
CSS<br><br>`;

function skillFunc() {
  conteiner1.innerHTML = skillText;

  conteiner1.style.textAlign = "center";
  conteiner1.style.fontSize = "30px";
  conteiner1.style.margin = "30px";

  conteiner1.style.backgroundImage = "url('images/pic2.jpg')";
}

skills.addEventListener("click", skillFunc);
