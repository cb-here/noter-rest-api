import axios from 'axios'

export const fetchNotes = async () => {
    try {
        const response = await axios.get("http://localhost:4000/api/notes")
        return response
    } catch(error) {
        console.log("Error: " + error)
    }
}

export const postNote = async (data) => {
    try {
        const response = await axios.post("http://localhost:4000/api/notes", data)
        return response
    } catch(error) {
        console.log("Error: " + error)
    }
}

export const deleteNote = async (id) => {
    try {
        const response = await axios.delete(`http://localhost:4000/api/notes/${id}`)
        return response
    } catch(error){
        console.log("Error: " + error)
    }
}

export const updateNote = async (data) => {
    try {
        const response = await axios.put(`http://localhost:4000/api/notes/${data._id}`, data)
        return response
    } catch(error) {
        console.log("Error: " + error)
    }
}