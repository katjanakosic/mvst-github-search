import axios from 'axios'

/**
 * Fetches user data from the GitHub API.
 * @param username - The GitHub username to retrieve data for
 * @returns A promise that resolves to the user data object returned by the GitHub API
 */
export const fetchUserData = async (username: string) => {
  const response = await axios.get(`${process.env.GITHUB_API_URL}/users/${username}`, {
    headers: {
      Authorization: `token ${process.env.GITHUB_TOKEN}`
    }
  })
  return response.data
}
