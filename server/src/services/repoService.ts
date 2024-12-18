import axios from 'axios'

const GITHUB_API_URL = 'https://api.github.com'

export const fetchUserRepositories = async (username: string) => {
  const response = await axios.get(`${GITHUB_API_URL}/users/${username}/repos?per_page=100`)
  return response.data
}
