var i = 0;
var txt =
  "Do the Math Clat, Do that...BOMBOCLAT! Ya Bomboclat Mi boy! \u{1F602}";
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

const btn = document.getElementById("showVideoBtn");
const container = document.getElementById("videoContainer");
const video = document.getElementById("myVideo");
let isPlaying = false;

btn.addEventListener("click", () => {
  if (!isPlaying) {
    // Show and play
    container.classList.add("active");
    video.loop = true;
    video.play();
    btn.textContent = "⏸ Hide Video";
    isPlaying = true;
  } else {
    // Hide and pause
    container.classList.remove("active");
    video.pause();
    video.currentTime = 0;
    btn.textContent = "▶ Play Video";
    isPlaying = false;
  }
});
