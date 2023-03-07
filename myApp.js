let express = require('express');
let app = express();
console.log('Hello World');

app.get("/json", (req, res) => {
  res.json({ "message": "Hello json" });
})



























module.exports = app;
