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

// Example 4: Flashing background
setInterval(() => {
  document.body.style.backgroundColor = 
    document.body.style.backgroundColor === "white" ? "yellow" : "white";
}, 300);