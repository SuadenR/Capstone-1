const express = require("express");
const cors = require("cors");
const app = express();

var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: 'b1370df3e9f74dc3a4fe0f7b128ed0f2',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

rollbar.log('Hello world!')

app.use(cors());
app.use(express.json());
app.use(express.static(`${__dirname}/public`))

const { createTask, deleteTask, getTasks } = require('./controller')

app.post(`/api/ToDoList`, createTask)
app.delete(`/api/ToDoList/:id`, deleteTask)
app.get(`/api/ToDoList`, getTasks)


app.listen(4000, () => console.log(`server running on 4000`))







