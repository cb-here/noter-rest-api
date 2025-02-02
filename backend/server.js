import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js'
import noteRoutes from './routes/note.route.js'

const app = express()

app.use(express.json())
app.use(cors())

app.use("/api/notes", noteRoutes)

const PORT = 4000

app.listen(PORT, ()=> {
    connectDB()
    console.log("Server is running now!")
})