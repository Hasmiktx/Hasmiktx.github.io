const input = document.getElementById("input");
const context = document.getElementsByClassName("context")[0];
const btn = document.getElementsByTagName("button")[0];
btn.addEventListener("click", function () {
  const list = document.createElement("ul");
  list.classList.add("ul");
  list.textContent = input.value;
  context.appendChild(list);
});
