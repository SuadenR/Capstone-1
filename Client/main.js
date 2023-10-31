const newTasksContainer = document.querySelector("#To-Do-List-Right-Side-Container")
const newTaskForm = document.getElementById("AddToDoBtn")

const baseURL = `http://localhost:4000/api/ToDoList`

const newTaskCallBack = ({ data: notes }) => displayTasks(notes)
const errCallback = err => console.log(err)

const getAllTasks = () => axios.get(baseURL).then(newTaskCallBack).catch(errCallback)
const createTask = body => axios.post(baseURL, body).then(newTaskCallBack).catch(errCallback)
const deleteTask = id => axios.delete(`${baseURL}/${id}`).then(newTaskCallBack).catch(errCallback)

function submitHandler(e) {
    e.preventDefault()

    let tasks = document.querySelector('#AddToDo')
    let due_date = document.querySelector('#AddToDoDate')
    let notes = document.querySelector(`#AddToDoNotes`)

    let bodyObj = {
        tasks: tasks.value,
        due_date: due_date.value,
        notes: notes.value 
    }

    createTask(bodyObj)

    tasks.value = ''
    due_date.value = ''
    notes.value = ''

}

function createTaskCard(note) {
    const taskCard = document.createElement('div')
    taskCard.classList.add('task-card')

    taskCard.innerHTML = `<p class="note">${note.tasks}</p>
    <div class="btns-container">
    <button onclick="deleteTask(${note.id})">delete</button>
    `
}



newTaskForm.addEventListener('click', submitHandler)

getAllTasks()