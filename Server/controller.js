let note_id = 5
const notes = []

module.exports = {
    
    addTask: (req, res) => {
        let { tasks, due_date, notes } = req.body

        let newNote = {
            id: note_id,
            tasks: tasks.value,
            due_date: due_date.value,
            notes: notes.value
        }

        notes.push(newNote)

        note_id++

        res.status(200).send(notes)       
    },
    
}
