const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const { addTask } = require('./controller')

app.post(`/api/ToDoList`, addTask)


app.listen(5432, () => console.log('running on 5432'));






