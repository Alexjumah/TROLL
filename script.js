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

// ---- Video popup logic (one block, matching your HTML) ----
const btn = document.getElementById("showVideoBtn");
const overlay = document.getElementById("overlay");
const video = document.getElementById("video");
const closeBtn = document.getElementById("closeBtn");

// Log if the video fails to load
video.addEventListener("error", () => {
  console.error("Video failed to load. Check the filename and path.");
  alert(
    "Error: Could not load the video. Make sure the .mp4 file is in the same folder as index.html and the filename matches exactly.",
  );
});

btn.addEventListener("click", () => {
  // Toggle: if already open, close instead
  if (overlay.classList.contains("show")) {
    close();
    return;
  }
  overlay.classList.add("show");
  video.loop = true;
  video.play().catch((err) => console.error("Play error:", err));
});

function close() {
  overlay.classList.remove("show");
  video.pause();
  video.currentTime = 0;
}
closeBtn.addEventListener("click", close);

// Click anywhere on the dark backdrop also closes it
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) close();
});

// Esc key closes too
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") close();
});
