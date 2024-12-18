import axios from 'axios'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL
})

export const getUserRepositories = async (username: string) => {
  const response = await api.get(`/repos/${username}`)
  return response.data
}
