const content = document.getElementById("content");
const conteiner = document.getElementById("conteiner");

const portfolio = document.getElementById("portfolio");
const contact = document.getElementById("contact");
const links = [
  "https://hasmiktx.github.io/Search-APP/",
  "https://hasmiktx.github.io/Tetris/",
  "https://hasmiktx.github.io/Carusel/",
  "https://hasmiktx.github.io/ToDoList/",
];
function skillFunc() {
  content.remove();
  document.body.style.backgroundColor = "#08F4D2";
  const ul = document.createElement("ul");
  const div = document.createElement("div");
  div.classList.add("links");
  links.forEach((link) => {
    const a = document.createElement("a");
    a.text = `${link}`;

    a.setAttribute("href", `${link}`);
    const li = document.createElement("li");
    li.append(a);
    ul.append(li);
  });

  conteiner.style.backgroundImage = "none";
  div.append(ul);
  conteiner.style.justifyContent = "space-evenly";
  conteiner.append(div);

  div.style.fontSize = "30px";
}

portfolio.addEventListener("click", skillFunc);
