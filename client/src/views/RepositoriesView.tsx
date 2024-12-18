import { Box, Container, Typography, Avatar } from "@mui/material"
import React from "react"
import { useParams } from "react-router-dom"
import { getUserRepositories, getUserData } from "../services/api"
import { FilterBar } from "../components/FilterBar"
import { RepoList } from "../components/RepoList"
import Repo from "../types/Repo"
import User from "../types/User"

function RepositoriesView() {
  const { username } = useParams<{ username: string }>()
  const [repos, setRepos] = React.useState<Repo[]>([])
  const [filteredRepos, setFilteredRepos] = React.useState<Repo[]>([])
  const [languages, setLanguages] = React.useState<string[]>([])
  const [userData, setUserData] = React.useState<User | null>(null)

  React.useEffect(() => {
    const fetchData = async () => {
      if (!username) return
      try {
        const data = await getUserRepositories(username)
        setRepos(data)
        setFilteredRepos(data)

        const langs = Array.from(
          new Set(data.map((repo) => repo.language).filter(Boolean))
        ) as string[]
        setLanguages(langs)

        const user = await getUserData(username)
        setUserData(user)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    fetchData()
  }, [username])

  const handleFilter = (name: string, language: string) => {
    let updated = [...repos]
    if (name) {
      updated = updated.filter((r) =>
        r.name.toLowerCase().includes(name.toLowerCase())
      )
    }
    if (language && language !== "All") {
      updated = updated.filter(
        (r) => (r.language || "").toLowerCase() === language.toLowerCase()
      )
    }
    setFilteredRepos(updated)
  }

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Box display="flex" flexDirection="column" gap={4}>
        <Typography variant="h4" textAlign="center">
          Repositories for {username}
        </Typography>

        <Box display="flex" flexDirection="column" gap={4}>
          <Box alignSelf="flex-end">
            <FilterBar onFilter={handleFilter} languages={languages} />
          </Box>
          <Box flex={1} display="flex" gap={2}>
            <Box display="flex" flexDirection="column" alignItems="center">
              {userData && (
                <>
                  <Avatar
                    src={userData.avatar_url}
                    alt={userData.login}
                    sx={{ width: 200, height: 200, mb: 2 }}
                  />
                  <Typography variant="body1">{userData.login}</Typography>
                </>
              )}
            </Box>
            
            <Box sx={{ width: 1 }}>
                <RepoList repos={filteredRepos} />
            </Box>
            
          </Box>
        </Box>
      </Box>
    </Container>
  )
}

export default RepositoriesView
