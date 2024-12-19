import axios from 'axios'

export const fetchUserRepositories = async (username: string) => {
  const response = await axios.get(`${process.env.GITHUB_API_URL}/users/${username}/repos?per_page=100`, {
    headers: {
      Authorization: `token ${process.env.GITHUB_TOKEN}`
    }
  })
  return response.data
}
