import express from "express"
import { getUserRepositories } from '../controllers/repoController'

const router = express.Router()

// Route for retrieving GitHub usernames
router.get('/:username', getUserRepositories)


export default router
