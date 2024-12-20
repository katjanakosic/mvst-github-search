// api.ts defines functions to fetch GitHub repositories 
// and user data from the backend.

import axios from "axios"
import Repo from "../types/Repo"

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})

/**
 * Fetches a list of repositories for the given GitHub username.
 * @param username - GitHub username to fetch repos for
 * @returns A promise that resolves to an array of Repo objects
 */
export const getUserRepositories = async (
  username: string
): Promise<Repo[]> => {
  const response = await api.get(`/repos/${username}`)
  return response.data
}

/**
 * Fetches user profile data (e.g., avatar URL, login) for the given GitHub username.
 * @param username - GitHub username to fetch user data for
 * @returns A promise that resolves to the user data object
 */
export const getUserData = async (username: string) => {
  const response = await api.get(`/users/${username}`)
  return response.data
}
