let notes = []
let completedTasks = []
let note_id = 1

var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: 'b1370df3e9f74dc3a4fe0f7b128ed0f2',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

module.exports = {

    createTask: (req, res) => {

        if ( notes.length > 20 ) {

        res.status(400).send('You cannot add anymore tasks! Complete some!')

        rollbar.info('Fix your website! You can only have 12 tasks! I am busy!')

        }    else   {

        let { tasks, due_date, exnotes } = req.body

        let newNote = {

        id: note_id,
        tasks: tasks,
        notes: exnotes,
        due_date: due_date,

        }

        notes.push(newNote)

        note_id++

        res.status(200).send(notes)
    }

    },

    deleteTask: (req, res) => {

        let index = notes.findIndex(elem => elem.id === +req.params.id)

        notes.splice(index, 1)

        res.status(200).send(notes)

    },

    moveToCompleted: (req, res) => {

        let index = notes.findIndex(elem => elem.id === +req.params.id)

        completedTasks.push(notes.splice(index, 1))

        console.log(completedTasks)

        res.status(200).send(notes)

    
     }


    }
