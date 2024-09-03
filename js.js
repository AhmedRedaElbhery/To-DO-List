
let txt = document.querySelector(".input");
let ul = document.querySelector(".list");
let btn = document.querySelector(".btn");



btn.onclick = function () {

    if (txt.value.trim().length !== 0) {

        let li = document.createElement("li");
        li.innerHTML = txt.value;
        ul.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    else {
        alert("you must write some thing");

    }
    txt.value = "";
    save();
};

ul.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        save();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        save();
    }
}, false)

function save() {
    window.localStorage.setItem("data", ul.innerHTML);
}


function show() {
    ul.innerHTML = window.localStorage.getItem("data");
}
show();


