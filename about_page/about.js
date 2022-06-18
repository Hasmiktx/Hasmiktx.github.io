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
  conteiner1.style.backgroundImage =
    "url('https://img.rawpixel.com/private/static/images/website/2022-05/p-465-td-7164.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=3cc6b165be9bad0313de3804a8dfc9bb')";
}

skills.addEventListener("click", skillFunc);
