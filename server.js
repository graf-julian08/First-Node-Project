const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;
const fs = require("fs");   

app.use(express.static("public"));
app.use(express.json());

app.get("/api/tasks", (req, res) => {
  const data = fs.readFileSync("data/tasks.json");
  const tasks = JSON.parse(data);
  res.json(tasks);
});

app.post("/api/tasks", (req, res) => {
  const newTask = req.body.text;

  const data = fs.readFileSync("data/tasks.json");
  const tasks = JSON.parse(data);

  tasks.push({ text: newTask });

  fs.writeFileSync("data/tasks.json", JSON.stringify(tasks));

  res.json({ status: "ok" });
});

app.listen(PORT, () => {
 console.log(`Server läuft auf http://localhost:${PORT}`);
});