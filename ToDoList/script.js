const toDoText = document.getElementById("to-do-input");
const context = document.querySelector(".context");
const btn = document.querySelector("button");
const ul = document.querySelector("ul");
const warningDiv = document.getElementById("warning-div");

function warningFunc() {
  if (warningDiv.innerHTML === "") {
    const warningTxtH5 = document.createElement("h5");
    warningTxtH5.append("please enter wish list");
    warningDiv.append(warningTxtH5);
    warningDiv.style.display = "block";
  } else {
    warningDiv.style.display = "block";
  }
}

function addList() {
  if (toDoText.value === "") {
    warningFunc();
  } else {
    const listDiv = document.createElement("div");

    listDiv.classList.add("listDiv");
    let checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    checkBox.classList.add("check");
    let reset = document.createElement("input");
    reset.setAttribute("type", "reset");
    reset.setAttribute("value", "x");
    reset.classList.add("delete-btn");
    listDiv.appendChild(checkBox);
    listDiv.innerHTML += toDoText.value;
    listDiv.appendChild(reset);

    context.appendChild(listDiv);
    toDoText.value = "";
  }
}

btn.addEventListener("click", addList);
toDoText.addEventListener("keydown", function () {
  warningDiv.style.display = "none";
});

const deleteList = document.getElementsByClassName("delete-btn");
deleteList.addEventListener("onclick", function (event) {
  event.target.style.backgroundColor = "orange";
});

// usersBox.innerHTML = "";

// for (user of filteredUsers)
// {
//     let userElement = document.createElement("DIV");
//     userElement.classList.add("user-item");
//     userElement.innerHTML = `
//     <h2>${user.name}</h2>
//     <p>Country: ${user.country}</p>
//     <p>Age: ${user.age}</p>
//     <p>Gender: ${user.gender}</p>
//     `;

//     usersBox.appendChild(userElement);

// }
