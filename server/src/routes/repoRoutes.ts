import express from "express"
import { getUserRepositories } from '../controllers/repoController'

const router = express.Router()

// Route for retrieving GitHub user repositories by username
router.get('/:username', getUserRepositories)

export default router
