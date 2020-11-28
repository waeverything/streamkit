const flipBox = document.getElementById("flipBox");

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

if (urlParams.get("position") == "right") {
    flipBox.classList.add("float-right");
}