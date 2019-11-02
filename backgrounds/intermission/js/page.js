//Background
let amount = 20;

for (let i = 0; i < amount; i++) {
  let elem = document.createElement("img");
  elem.setAttribute("src", "svg/3dbar.svg");
  elem.style.animationDelay = Math.floor(Math.random() * -60) + "s"
  elem.style.opacity = Math.random() * 1
  document.getElementById("objects").appendChild(elem);
}

//Typewriter
let typingSpeed = 150;

let url_string = window.location.href;
let url = new URL(url_string);
let txt = url.searchParams.get("s").replace(/_/g, " ");

let i = 0;

window.setInterval(function(){
  i = 0;
  typeWriter();
}, 20000);

function typeWriter() {
  if (txt != null) {
    if(i < txt.length) {
      document.getElementById("typewriter").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, typingSpeed);
    }
    setTimeout(function() {
      document.getElementById("typewriter").innerHTML = "";
    }, 15000);
  }
}

window.onload = typeWriter();
