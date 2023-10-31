const express = require("express");
const cors = require("cors");
const app = express();


app.use(cors());
app.use(express.json());
app.use(express.static(`${__dirname}/public`))

const { addTask, deleteTask, getTasks } = require('./controller')

app.post(`/api/ToDoList`, addTask)
app.delete(`/api/ToDoList/:id`, deleteTask)
app.get(`/api/ToDoList`, getTasks)


app.listen(4000, () => console.log(`server running on 4000`))







