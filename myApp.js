let express = require('express');
let app = express();
console.log('Hello World');

app.get("/", (req, res) => {
  let absolutePath = __dirname + '/views/index.html'
  res.sendFile(absolutePath);
})

let newPath = __dirname + '/public'
app.use("/public", express.static(newPath))





































module.exports = app;
