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
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}
