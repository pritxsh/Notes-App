const btn = document.querySelector(".btn");
const notesContainer = document.querySelector(".notes-container");
let notes = document.querySelectorAll(".input");

btn.addEventListener("click", function () {
    let text = document.createElement("p");
    let img = document.createElement("img");
    text.className = "input";
    text.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    notesContainer.appendChild(text).appendChild(img);

})

notesContainer.addEventListener("click", function (e) {
    if (e.target.tagName == "IMG") {
        e.target.parentElement.remove();
        saveData();
    }
    else if (e.target.tagName == "P") {
        notes = document.querySelectorAll(".input");
        notes.forEach(nt => {
            nt.onkeyup = function () {
                saveData();
            }
        })
    }
})
getData();
function saveData() {
    localStorage.setItem("save", notesContainer.innerHTML);
}

function getData() {
    notesContainer.innerHTML = localStorage.getItem("save");
}

document.addEventListener("keydown", event => {
    if (event.key == "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})