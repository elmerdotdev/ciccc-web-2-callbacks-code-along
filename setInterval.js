// Example 1: Count every second
let count = 0;
setInterval(() => {
  count++;
  console.log("Count:", count);
}, 1000);


// Example 2: Update clock every second
setInterval(() => {
  document.getElementById("clock").innerText = new Date().toLocaleTimeString();
}, 1000);


// Example 3: Animate a dot
setInterval(() => {
  document.getElementById("dot").textContent += ".";
}, 500);


// Example 4: Animate a dot, and stop after 10 dots
let dotCount = 0;
const dotInterval = setInterval(() => {
  document.getElementById("dot").textContent += ".";
  dotCount++;
  if (dotCount === 10) {
    clearInterval(dotInterval);
  }
}, 300);


// Example 5: Start and stop flashing background with buttons
let flashInterval;

document.getElementById("startFlash").addEventListener("click", () => {
  flashInterval = setInterval(() => {
    document.body.style.backgroundColor =
      document.body.style.backgroundColor === "white" ? "lightcoral" : "white";
  }, 500);
});

document.getElementById("stopFlash").addEventListener("click", () => {
  clearInterval(flashInterval);
  document.body.style.backgroundColor = "white";
  console.log("🛑 Flashing stopped.");
});