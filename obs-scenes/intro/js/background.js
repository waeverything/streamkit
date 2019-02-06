let amount = 20;

for (let i = 0; i < amount; i++) {
  let elem = document.createElement("img");
  elem.setAttribute("src", "svg/3dbar.svg");
  elem.style.animationDelay = Math.floor(Math.random() * -60) + "s"
  elem.style.opacity = Math.random() * 1
  document.getElementById("objects").appendChild(elem);
}
