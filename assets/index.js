document.getElementById("speaker_on").addEventListener("click", showSpeaker);
document.getElementById("speaker_off").addEventListener("click", hideSpeaker);

function showSpeaker() {
  document.getElementById("speaker_on").classList.add("hide");
  document.getElementById("speaker_off").classList.add("show");
  document.getElementById("speaker_on").classList.remove("show");
  document.getElementById("corona").muted = true;
}

function hideSpeaker() {
  document.getElementById("speaker_on").classList.add("show");
  document.getElementById("speaker_off").classList.remove("hide");
  document.getElementById("speaker_off").classList.remove("show");
  document.getElementById("corona").muted = false;
}

function openNav() {
  document.getElementById("myNav").style.height = "100%";
  document.getElementById("span-nav").style.display = "none";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
  document.getElementById("span-nav").style.display = "block";
}

if (screen.width <= 1100) {
  openNav();
  closeNav();
}

// function openNav() {
//   let query = window.matchMedia("(max-width: 1024px)");

//   if (query.matches) {

//   }
// }

// var x = window.matchMedia("(min-width: 1024px)");
// openNav(x);
// x.addListener(closeNav);

// console.log(x);

// document.getElementById("span-nav").addEventListener("click", showNav);
// document.getElementById("span-nav-hide").addEventListener("click", hideNav);

// function showSpeaker() {
//   document.getElementById("#span-nav").classList.add("span-nav-hide");
//   document.getElementById("speaker_off").classList.add("show");

// document.getElementById("span-nav").onclick = function() {
//   document.getElementById("span-nav").style.display = "none";
// };

// function openNav() {
//   document.getElementById("span-nav").style.display = "none";
// }
