const fs = require("fs");

fs.readFile("./test1.txt", "utf-8", (err, data1) => {
  fs.readFile("./test2.txt", "utf-8", (err, data2) => {
  console.log(data1, data2)
})
})