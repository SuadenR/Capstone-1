const newTasksContainer = document.querySelector("#To-Do-List-Right-Side-Container")
const newTaskForm = document.getElementById("AddToDoBtn")

const baseURL = `http://localhost:4000/api/ToDoList`

const newTaskCallBack = ({ data: notes }) => displayTasks(notes)
const errCallback = err => console.log(err)

// const getAllTasks = () => axios.get(baseURL).then(newTaskCallBack).catch(errCallback)
const createTask = body => axios.post(baseURL, body).then(newTaskCallBack).catch(errCallback)
const deleteTask = id => axios.delete(`${baseURL}/${id}`).then(newTaskCallBack).catch(errCallback)

function submitHandler(e) {
    e.preventDefault()

    let tasks = document.querySelector('#AddToDo')
    let notes = document.querySelector(`#AddToDoNotes`)
    let due_date = document.querySelector('#AddToDoDate')

    let bodyObj = {
        tasks: tasks.value,
        notes: notes.value,
        due_date: due_date.value,
         
    }

    addTask(bodyObj)

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

// function getAllTasks(arr) {

//     newTasksContainer.innerHTML = ''

//     for (let i = 0; i < arr.length; i++) {
//         createTaskCard(arr[i])
//     }
// }



newTaskForm.addEventListener('submit', submitHandler)

// getAllTasks()