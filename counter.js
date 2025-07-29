let count = 0;
let intervalId = null;
let isRunning = false;

const counterEl = document.getElementById("counter");
const playPauseBtn = document.getElementById("playPauseBtn");
const resetBtn = document.getElementById("resetBtn");

// Play/Pause logic
playPauseBtn.addEventListener("click", () => {
  if (!isRunning) {
    // Start counting
    intervalId = setInterval(() => {
      count++;
      counterEl.textContent = count;
    }, 1000);
    playPauseBtn.textContent = "Pause";
    isRunning = true;
  } else {
    // Pause counting
    clearInterval(intervalId);
    playPauseBtn.textContent = "Play";
    isRunning = false;
  }
});

// Reset logic
resetBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  count = 0;
  counterEl.textContent = count;
  playPauseBtn.textContent = "Play";
  isRunning = false;
});