// two functions,
// 1. to give current array of tasks
// 2. other that pushes data to array
const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;
let tasks = ["clean the bedroom", "mop the floor"];
app.use(express.json());

app.use(cors());

app.get("/tasks", (req, res) => {
  res.send(tasks);
  console.log(tasks)
});

app.get("/remove", (req, res) => {
    tasks = []
    console.log(tasks)
  });

app.post("/tasks", (req, res) => {
  const task = req.body.task;
  if (task !== "") {
    tasks.push(task)
  }
  console.log(tasks)
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
