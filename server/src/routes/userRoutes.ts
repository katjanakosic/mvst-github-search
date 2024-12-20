import express from "express"
import { getUserData } from "../controllers/userController"

const router = express.Router()

// Route for retrieving GitHub user data by username
router.get('/:username', getUserData)

export default router
