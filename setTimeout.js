// Example 1: Simple delay
setTimeout(() => {
  console.log("Hello after 2 seconds");
}, 2000);

// Example 2: Delay hiding a message
const msg = document.getElementById("message");
setTimeout(() => {
  msg.style.display = "none";
}, 3000);

// Example 3: Change background color after 1 second
setTimeout(() => {
  document.body.style.backgroundColor = "lightblue";
}, 1000);

// Example 4: Alert after typing
document.getElementById("name").addEventListener("input", () => {
  setTimeout(() => {
    alert("Thanks for typing!");
  }, 2000);
});