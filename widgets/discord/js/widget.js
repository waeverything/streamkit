// This script makes use of Discord's Server Widget feature which has a integrated json api.
// For this to work, make sure that you have enabled Server Widget for your Discord server.


// Put your guild ID here
let guildID = '95873997861834752';

// Delay in seconds before the code will be executed for the first time
let initialDelay = 3;

// Time in seconds of how long the member counter is shown on the screen
let displayTime = 7;

// Time in seconds of how long should we wait before showing the counter again
let fetchInterval = 80;


let div = document.getElementById("onlineCounter").classList;
let elem = document.getElementById("memberCount");

// Fetch and show the member counter
function showOnlineMembers() {
  fetch('https://discordapp.com/api/guilds/' + guildID + '/widget.json')
    .then(res => res.json())
    .then((out) => {
      elem.innerHTML = out.presence_count;
      div.add("show");
      setTimeout(function () {
        div.remove("show");
      }, displayTime * 1000);
    })
    .catch(err => {
      throw err;
    });
}

setTimeout(function () {
  showOnlineMembers();
  setInterval(showOnlineMembers, fetchInterval * 1000);
}, initialDelay * 1000);