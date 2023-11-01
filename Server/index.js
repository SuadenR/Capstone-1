const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.static(`${__dirname}/Server`))

app.use(cors());
app.use(express.json());


const { createTask, deleteTask, moveToCompleted } = require('./controller')

app.post(`/api/ToDoList`, createTask)
app.delete(`/api/ToDoList/:id`, deleteTask)
app.put(`/api/ToDoList/completed/:id`, moveToCompleted)


app.listen(4000, () => console.log(`server running on 4000`))







