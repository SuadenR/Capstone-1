const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const { addTask, deleteTask, getTasks } = require('./controller')

app.post(`/api/ToDoList`, addTask)
app.delete(`/api/ToDoList/:id`, deleteTask)
app.get(`/api/ToDoList`, getTasks)


app.listen(5432, () => console.log('running on 5432'));






