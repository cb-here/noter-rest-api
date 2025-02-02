import React, { use } from "react";
import { useState, useEffect } from "react"
import { fetchNotes, postNote, deleteNote, updateNote } from "../services/api"
import Card from "./components/Card";
import CreateNote from './components/CreateNote'

function App() {
  const [notes, setNotes] = useState([])
  const getNotes = async () => {
    try {
      const { data } = await fetchNotes()
      setNotes(data)
    } catch (error) {
      console.log("Error: " + error)
    }
  }
  useEffect(() => {
    getNotes()
  }, [])

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Do you want to delete this note?")
    if (confirmDelete) {
      try {
        await deleteNote(id)
        getNotes()
      } catch(error) {
        console.log("Error: " + error)
      }
    }
  }

  const handleUpdate = async (updatedNote) => {
    try {
      await updateNote(updatedNote)
      getNotes()
    } catch(error){
      console.log("Error: " + error)
    }
  }
  return (
    <>
    <CreateNote getNotes={getNotes} postNote={postNote}/>
      {
        (notes.length > 0) ? (
          <div className="px-10 grid grid-cols-1 gap-4 md:grid-cols-4">
            {notes.map((note) => (
              <Card key={note._id} note={note} handleDelete={handleDelete} handleUpdate={handleUpdate}/>
            ))}
          </div>
        ) : (
          <p className="text-center text-2xl font-bold bg-red-50 py-3 px-5">Notes not found!</p>
        )
      }
    </>
  )
}

export default App