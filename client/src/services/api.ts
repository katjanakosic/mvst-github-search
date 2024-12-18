import axios from 'axios'

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
  })

export const getUserRepositories = async (username: string) => {
  const response = await api.get(`/repos/${username}`)
  return response.data
}
