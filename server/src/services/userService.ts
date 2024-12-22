import axios from 'axios'

/**
 * Fetches user data from the GitHub API.
 * @param username - The GitHub username to retrieve data for
 * @returns A promise that resolves to the user data object returned by the GitHub API
 */
export const fetchUserData = async (username: string) => {
  // Read the token from environment variables
  const token = process.env.GITHUB_TOKEN

  // Build headers if token exists
  const headers = token ? { Authorization: `token ${token}` } : {}

  // Make the request to GitHub API with conditional headers
  const response = await axios.get(
    `${process.env.GITHUB_API_URL}/users/${username}`,
    { headers }
  )

  return response.data
}
