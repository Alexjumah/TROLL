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
