// function play() {
//   const willHide = document.getElementById("home-screen");
//   willHide.classList.add("hidden");
//   const willShow = document.getElementById("ground-screen");
//   willShow.classList.remove("hidden");
// }
function continueGame() {
  const alphabet = getRandomAlphabet();
  const currentAlphabet = document.getElementById("display");
  currentAlphabet.innerText = alphabet;
  setBackgroundColorById(alphabet);
}

function play() {
  hideElementById("home-screen");
  showElementById("ground-screen");
  continueGame();
}
