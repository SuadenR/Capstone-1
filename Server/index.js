const express = require("express");
const cors = require("cors");
const app = express();
const path = require('path')
app.use(express.static(path.join(__dirname, '../Client')))

app.use(cors());
app.use(express.json());


const { createTask, deleteTask, moveToCompleted, getTasks, getCompletedTasks } = require('./controller')

app.get(`/api/ToDoList`, getTasks)
app.get(`/api/ToDoList/completed/`, getCompletedTasks)
app.post(`/api/ToDoList`, createTask)
app.delete(`/api/ToDoList/:id`, deleteTask)
app.put(`/api/ToDoList/completed/:id`, moveToCompleted)


app.listen(4000, () => console.log(`server running on 4000`))







