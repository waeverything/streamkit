//JSON URL
let url = 'https://discordapp.com/api/guilds/95873997861834752/widget.json';

//Time online members are shown on screen
let time = 7000;

//Wait interval before showing online members again
let interval = 80000;

//Delay before the code will be executed for the first time
let delay = 3000;

let elem = document.getElementById("memberCount");
let div = document.getElementById("onlineCounter").classList;

//Start script
setTimeout(update, delay);

//Run script again every x seconds
window.setInterval(function() {
  update();
}, interval);

//Update and show online members
function update() {
  fetch(url)
    .then(res => res.json())
    .then((out) => {
      elem.innerHTML = out.members.length;
      div.add("show");
      setTimeout(function() {
        div.remove("show");
      }, time);
    })
    .catch(err => {
      throw err
    });
};
