import { Request, Response } from "express"
import asyncHandler from "express-async-handler"
import { fetchUserRepositories } from '../services/repoService'


export const getUserRepositories = asyncHandler(
    async (req: Request, res: Response) =>{
        const { username } = req.params

        // Fetch repositories from GitHub API
        const repos = await fetchUserRepositories(username)

        // Return the repositories as JSON
        res.json(repos)
    }
)