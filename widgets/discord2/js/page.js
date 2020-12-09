const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const bodyElement = document.querySelector("body");

if (urlParams.get("position") == "right") {
    bodyElement.classList.add("float-right");
}

const fontSize = urlParams.get("size");
if (fontSize != null) {
    bodyElement.style.fontSize = fontSize + "px";
}

if (urlParams.get("shadow") == "false") {
    bodyElement.classList.add("noshadow");
}