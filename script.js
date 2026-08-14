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

// Log if the video fails to load
video.addEventListener("error", () => {
  console.error("Video failed to load. Check the filename and path.");
  alert(
    "Error: Could not load the video. Make sure the .mp4 file is in the same folder as index.html and the filename matches exactly.",
  );
});

btn.addEventListener("click", () => {
  if (!isPlaying) {
    container.classList.add("active");
    video.loop = true;

    // Try to play and catch any errors
    video.play().catch((err) => {
      console.error("Play error:", err);
      alert("Video play failed: " + err.message);
    });

    btn.textContent = "⏸ Hide Video";
    isPlaying = true;
  } else {
    container.classList.remove("active");
    video.pause();
    video.currentTime = 0;
    btn.textContent = "▶ Don't Click Me!";
    isPlaying = false;
  }
});
