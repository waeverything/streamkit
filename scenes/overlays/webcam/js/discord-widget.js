//JSON URL
let url = 'https://discordapp.com/api/guilds/95873997861834752/widget.json';

//Refresh interval
let interval = 80000;

let elem = document.getElementById("discordText");

document.onload = update();

//Update member counter
function update() {
  fetch(url)
    .then(res => res.json())
    .then((out) => {
      elem.style.opacity = 0;
      setTimeout(function() {
        elem.innerHTML = "Online: " + out.members.length;
        elem.style.opacity = 1;
        setTimeout(function() {
          elem.style.opacity = 0;
          setTimeout(function() {
            elem.innerHTML = "discord.gg/wae";
            elem.style.opacity = 1;
          }, 1500);
        }, 15000);
      }, 1500);
    })
    .catch(err => {
      throw err
    });
};

//Run script again every x seconds
window.setInterval(function() {
  update();
}, interval);
