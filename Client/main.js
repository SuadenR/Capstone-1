const newTasksContainer = document.querySelector("#To-Do-List-Right-Side-Container")
const newTaskForm = document.querySelector("#AddToDoForm")
const completedTaskContainer = document.querySelector("#Completed-Task-Container")

const baseURL = `http://localhost:4000/api/ToDoList`

const newTaskCallBack = ({ data: notes }) => displayTasks(notes)
const completeCallBack = ({ data: completedTasks }) => displayCompletedTasks(completedTasks)
const errCallback = err => console.log(err)

const createTask = body => axios.post(baseURL, body).then(newTaskCallBack).catch(errCallback)
const deleteTask = id => axios.delete(`${baseURL}/${id}`).then(newTaskCallBack).catch(errCallback)
const completeTask = id => axios.put(`${baseURL}/completed/${id}`).then(completeCallBack).catch(errCallback)

function submitHandler(e) {
    e.preventDefault()

    let tasks = document.querySelector('#AddToDo')
    let notes = document.querySelector(`#AddToDoNotes`)
    let due_date = document.querySelector('#AddToDoDate')

    let bodyObj = {
        tasks: tasks.value,
        exnotes: notes.value,
        due_date: due_date.value,
    }

    createTask(bodyObj)

    tasks.value = ''
    due_date.value = ''
    notes.value = ''
}

function createTaskCard(note) {
    const taskCard = document.createElement('div');

    taskCard.classList.add('task-card')

    taskCard.innerHTML = `<div id="new-notes"><p class="note">${note.tasks}</p>
    <p class="note">${note.notes}</p>
    <p class="note">${note.due_date}</p>
    <div class="btns-container">
    <button id="btns" onclick="deleteTask(${note.id})">❌</button><button id="btns" onclick="completeTask(${note.id})">✔</button>
    </div></div>
    `

    newTasksContainer.appendChild(taskCard)
}

function createCompletedTaskCard(note) {

   const completedCard = document.createElement('div');
   
   completedCard.classList.add('completed-card')

   completedCard.innerHTML = `<div id="completed-task"><p class="note">${note.tasks}</p>
   <p class="note">${note.notes}</p>
   <p class="note">${note.due_date}</p>
   <div class="-completedbtns-container">
   </div></div>
   `

   completedTaskContainer.appendChild(completedCard)

}

function displayTasks(arr) {

    newTasksContainer.innerHTML = ''

    for (let i = 0; i < arr.length; i++) {
        createTaskCard(arr[i])
    }
}

function displayCompletedTasks(arr) {

    completedTaskContainer.innerHTML = ''

    for (let i = 0; i < arr.length; i++) {
        createCompletedTaskCard(arr[i])
    }
}



newTaskForm.addEventListener('submit', submitHandler)