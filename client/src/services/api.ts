import axios from "axios"
import Repo from "../types/Repo"

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})

export const getUserRepositories = async (
  username: string
): Promise<Repo[]> => {
  const response = await api.get(`/repos/${username}`)
  return response.data
}

export const getUserData = async (username: string) => {
  const response = await api.get(`/users/${username}`)
  return response.data
}
