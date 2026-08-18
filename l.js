const fill = document.getElementById("fill");
const status = document.getElementById("status");
const scanner = document.getElementById("scanner");
const alertBox = document.getElementById("alert");
const reveal = document.getElementById("reveal");
const alertMsg = document.getElementById("alert-msg");
const alertCount = document.getElementById("alert-count");

let attempts = 0;

// Step 1: fake scan
let pct = 0;
const scanTimer = setInterval(() => {
  pct += Math.floor(Math.random() * 7) + 3; // random progress speed
  if (pct >= 100) {
    pct = 100;
    clearInterval(scanTimer);
    setTimeout(() => {
      scanner.classList.add("hidden");
      alertBox.classList.remove("hidden");
    }, 300);
  }
  fill.style.width = pct + "%";
  status.textContent = pct + "%";
}, 200);

// Step 2: the alert that keeps coming back
function annoy() {
  attempts++;
  alertCount.textContent = attempts >= 4 ? "Okay okay, fine…" : "Still there!";
  ("Are you sure?");
  alertMsg.textContent =
    attempts >= 4
      ? "You can't get rid of me that easily!"
      : "Your system is infected! Click 'Fix' to remove the threats.";
  alertBox.classList.remove("hidden");
}
document.getElementById("btn-ok").addEventListener("click", annoy);

// Step 3: "fix" → confetti reveal
document.getElementById("btn-fix").addEventListener("click", () => {
  alertBox.classList.add("hidden");
  reveal.classList.remove("hidden");
  confetti(150);
});

// Step 4: reset & rerun
document
  .getElementById("btn-again")
  .addEventListener("click", () => location.reload());

function confetti(n) {
  const colors = ["#ffd700", "#ff6b6b", "#4fc3f7", "#7bed9f", "#ff9ff3"];
  for (let i = 0; i < n; i++) {
    const c = document.createElement("div");
    c.className = "confetti";
    c.style.left = Math.random() * 100 + "vw";
    c.style.background = colors[Math.floor(Math.random() * colors.length)];
    c.style.animationDuration = Math.random() * 2 + 1.5 + "s";
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 4000);
  }
}
