const flipBox = document.getElementById("flipBox");

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

if (urlParams.get("position") == "right") {
    flipBox.classList.add("float-right");
}

const fontSize = urlParams.get("size");
if (fontSize != null) {
    document.documentElement.style.fontSize = fontSize + "px";
}