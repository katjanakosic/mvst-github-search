import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import repoRoutes from './routes/repoRoutes'

// Use .env data
dotenv.config()

// Create Express app object, use to define routes
const app = express()

app.use(cors())

// Tells app to parse incoming JSON request bodies => JSON data available under req.body
app.use(express.json())

// Tells the app to use the urlRoutes router for any requests that start with /api
app.use('/api', repoRoutes)

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`)
});
