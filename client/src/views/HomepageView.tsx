import { Box, Button, Container, TextField, Typography } from "@mui/material"
import React from "react"
import { getUserRepositories } from "../services/api"
import { FilterBar } from "../components/FilterBar"
import { RepoList } from "../components/RepoList"

interface Repo {
  id: number
  name: string
  language: string | null
  html_url: string
}

function HomepageView() {
  const [username, setUsername] = React.useState("")
  const [repos, setRepos] = React.useState<Repo[]>([])
  const [filteredRepos, setFilteredRepos] = React.useState<Repo[]>([])

  const handleSearch = async () => {
    if (!username.trim()) return
    try {
      const data = await getUserRepositories(username.trim())
      setRepos(data)
      setFilteredRepos(data)
    } catch (err) {
      console.error("Error fetching repositories:", err)
    }
  }

  const handleFilter = (name: string, language: string) => {
    let updated = [...repos]
    if (name) {
      updated = updated.filter((r) => r.name.toLowerCase().includes(name.toLowerCase()))
    }
    if (language) {
      updated = updated.filter((r) =>
        (r.language || '').toLowerCase().includes(language.toLowerCase())
      )
    }
    setFilteredRepos(updated)
  };

  return (
    <Container maxWidth="xl">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="20vh"
      >
        <Typography variant="h4">GitHub Repositories</Typography>
      </Box>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="auto"
        minHeight="60vh"
        width="60%"
        bgcolor="#e4c7da"
        mx="auto"
        borderRadius="16px"
        flexDirection="column"
        p={4}
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap={3}
          width="100%"
          maxWidth="sm"
        >
          <Box width="100%">
            <Typography mb={2}>Enter a GitHub Username:</Typography>
            <TextField 
              fullWidth 
              label="Username" 
              required 
              value={username} 
              onChange={(e) => setUsername(e.target.value)}
              onKeyDown={(e) => { if(e.key === 'Enter') handleSearch() }}
            />
          </Box>

          <Button 
            variant="contained" 
            sx={{
              backgroundColor: '#a193c9', 
              color: '#FFFFFF', 
              '&:hover': { 
                backgroundColor: '#d5b7f0',
              }       
            }}
            onClick={handleSearch}
          >
            Search
          </Button>
        </Box>

        {repos.length > 0 && (
          <Box width="100%" maxWidth="sm" mt={4}>
            <Typography mb={2}>Filter Repositories:</Typography>
            <FilterBar onFilter={handleFilter} />

            <Box mt={4}>
              <RepoList repos={filteredRepos} />
            </Box>
          </Box>
        )}
      </Box>
    </Container>
  )
}

export default HomepageView
