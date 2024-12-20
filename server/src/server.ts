import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import repoRoutes from './routes/repoRoutes'
import userRoutes from './routes/userRoutes'

// Use .env data
dotenv.config()

// Create Express app object and use to define routes
const app = express()

// Enable cross-origin resource sharing so that frontend can call these endpoints
app.use(cors())

// Tells app to parse incoming JSON request bodies => JSON data available under req.body
app.use(express.json())

// Tells the app to use the respective router for any requests that start with /api
app.use('/api/repos', repoRoutes)
app.use('/api/users', userRoutes)

const PORT = process.env.PORT || 4000

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`)
})
