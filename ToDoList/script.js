const toDoInput = document.getElementById("to-do-input");
const contextDiv = document.querySelector(".context");
const btnAdd = document.querySelector("#add");
const ul = document.querySelector("#ul");
const warningDiv = document.getElementById("warning-div");

function warningFunc() {
  if (warningDiv.innerHTML === "") {
    const warningTxt = document.createElement("h5");
    warningTxt.append("please enter wish list");
    warningDiv.append(warningTxt);
    warningDiv.style.display = "block";
  } else {
    warningDiv.style.display = "block";
  }
}

function addList() {
  if (toDoInput.value === "") {
    warningFunc();
  } else {
    const li = document.createElement("li");
    const textnode = document.createTextNode(`${toDoInput.value}`);

    li.appendChild(textnode);
    const liDiv = document.createElement("div");
    liDiv.append(li);
    const del = document.createElement("input");
    del.setAttribute("type", "button");
    del.setAttribute("value", "x");
    del.classList.add("deleteBtn");

    liDiv.classList.add("flex");
    const div = document.createElement("div");

    div.append(liDiv);
    div.appendChild(del);
    div.classList.add("listDivs");
    ul.appendChild(div);
    contextDiv.appendChild(ul);
    toDoInput.value = "";
    const listDivs = document.querySelectorAll(".listDivs");
    const deleteBtn = document.querySelectorAll(".deleteBtn");

    for (let i = 0; i < deleteBtn.length; i++) {
      deleteBtn[i].addEventListener("click", function () {
        listDivs[i].style.display = "none";
      });
    }
  }
}
// const listDivs = document.querySelectorAll(".listDivs");
// for (let i = 0; i < listDivs.length; i++) {
//   listDivs[i].addEventListener("onclick", (e) => {
//     e.terget.classList.toggle("check");
//   });
// }

btnAdd.addEventListener("click", addList);
toDoInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addList();
  }
});
toDoInput.addEventListener("keydown", () => {
  warningDiv.style.display = "none";
});

ul.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("check");
  }
});
