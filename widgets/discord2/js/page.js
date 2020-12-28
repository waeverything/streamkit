const urlParams = new URLSearchParams(window.location.search);
const bodyElement = document.querySelector("body");

if (urlParams.get("position") == "right") {
    bodyElement.classList.add("float-right");
}

const fontSize = urlParams.get("size");
if (fontSize != null) {
    bodyElement.style.fontSize = fontSize + "px";
}

const tags = urlParams.get("tags");
if (tags != null) {
    const tagSplit = tags.split(",");
    for (tag of tagSplit) {
        bodyElement.classList.add(tag);
    }
}
