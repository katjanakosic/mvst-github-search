import axios from 'axios'

/**
 * Fetches public repositories of a given GitHub username.
 * @param username - The GitHub username to retrieve repositories for
 * @returns A promise that resolves to an array of repository objects returned by the GitHub API
 */
export const fetchUserRepositories = async (username: string) => {
  // Get the token from the environment variables
  const token = process.env.GITHUB_TOKEN

  // Build headers if token exists
  const headers = token ? { Authorization: `token ${token}` } : {}

  // Make the request to GitHub API
  const response = await axios.get(
    `${process.env.GITHUB_API_URL}/users/${username}/repos?per_page=100`,
    { headers }
  )

  return response.data
}
