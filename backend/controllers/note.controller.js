import Note from "../models/note.model.js"

export const getNotes = async (req, res) => {
    try {
        const notes = await Note.find()
        res.status(200).json(notes)
    } catch(error) {
        console.log("Error: " + error)
    }
}

export const postNote = async (req, res) => {
    const {title, content} = req.body
    try {
        const newNote = await Note({title, content})
        newNote.save()
        res.status(201).json(newNote)
    } catch(error){
        console.log("Error: " + error)
    }
}

export const deleteNote = async (req, res) => {
    const {id} = req.params
    try {
        const deletedNote = await Note.findByIdAndDelete(id)
        if (!deleteNote) {
            res.status(404).json({error: 'Note not found!'})
        } 
        res.status(200).json(deletedNote)
    } catch(error){
        console.log("Error: " + error)
    }
}

export const updateNote = async (req, res) => {
    const {id} = req.params
    const {title, content} = req.body
    try {
        const updatedNote = await Note.findByIdAndUpdate(id, {title, content}, {new:true})
        if (!updatedNote) {
            res.status(404).json({error: 'Note not found!'})
        }
        res.status(200).json(updatedNote)
    } catch(error) {
        console.log("Error: " + error)
    }
}