import { Request, Response } from "express"
import asyncHandler from "express-async-handler"
import { fetchUserData } from "../services/userService"


export const getUserData = asyncHandler(
    async (req: Request, res: Response) =>{
        const { username } = req.params

        // Fetch user data from GitHub API
        const userData = await fetchUserData(username)

        // Return the user data as JSON
        res.json(userData)
    }
)