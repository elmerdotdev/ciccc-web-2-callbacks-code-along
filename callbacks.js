// Example 1: Basic callback
function greetUser(name, callback) {
  console.log("Hello, " + name);
  callback();
}

greetUser("JR", () => {
  console.log("This is a callback!");
});

// Example 2: Callback after math operation
function add(a, b, callback) {
  const result = a + b;
  callback(result);
}

add(2, 3, (sum) => {
  console.log("Sum is:", sum);
});

// Example 3: DOM + callback
function changeText(id, newText, callback) {
  const el = document.getElementById(id);
  el.innerText = newText;
  callback();
}

changeText("title", "Updated!", () => {
  console.log("Text updated on the page.");
});

// Example 4: Simulate API response with callback
function fetchData(callback) {
  setTimeout(() => {
    const data = { user: "Elmer" };
    callback(data);
  }, 1000);
}

fetchData((result) => {
  console.log("Received:", result);
});