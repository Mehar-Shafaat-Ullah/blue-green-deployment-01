const express = require("express");
const app = express();

const port = 3002;
const version = process.env.VERSION || "green"; // identify blue/green

app.get("/", (req, res) => {
  res.send(`Hello from ${version} version!`);
});

app.listen(port, () => {
  console.log(`Server running on port ${port} (${version})`);
});
