let notes = []
let note_id = 1

module.exports = {

    getTasks: (req, res) => res.status(200).send(notes),

    createTask: (req, res) => {

        let { tasks, due_date, notes } = req.body

        console.log(req.body)

        let newNote = {

        id: note_id,
        tasks: tasks,
        due_date: due_date,
        notes: notes

        }

        notes.push(newNote)

        console.log(newNote)

        rollbar.info('Someone added a note!')

        note_id++

        res.status(200).send(notes)
        
    },

    deleteTask: (req, res) => {

        let index = notes.findIndex(elem => elem.id === +req.params.id)

        notes.splice(index, 1)

        res.status(200).send(notes)

    },

    }
