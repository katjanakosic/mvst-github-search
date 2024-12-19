import express from "express"
import { getUserData } from "../controllers/userController"

const router = express.Router()

// Route for retrieving GitHub usernames
router.get('/:username', getUserData)


export default router
