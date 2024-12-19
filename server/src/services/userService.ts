import axios from 'axios'

export const fetchUserData = async (username: string) => {
  const response = await axios.get(`${process.env.GITHUB_API_URL}/users/${username}`, {
    headers: {
      Authorization: `token ${process.env.GITHUB_TOKEN}`
    }
  })
  return response.data
}
