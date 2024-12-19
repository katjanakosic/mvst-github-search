import { Box, Container, Typography, Avatar, Button } from "@mui/material"
import React from "react"
import { useParams } from "react-router-dom"
import { getUserRepositories, getUserData } from "../services/api"
import { FilterBar } from "../components/FilterBar"
import { RepoList } from "../components/RepoList"
import Repo from "../types/Repo"
import User from "../types/User"
import { useNavigate } from "react-router-dom"
import Grid from "@mui/material/Grid2"

function RepositoriesView() {
  const { username } = useParams<{ username: string }>()
  const [repos, setRepos] = React.useState<Repo[]>([])
  const [filteredRepos, setFilteredRepos] = React.useState<Repo[]>([])
  const [languages, setLanguages] = React.useState<string[]>([])
  const [userData, setUserData] = React.useState<User | null>(null)
  const navigate = useNavigate()

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

  const handleBack = () => {
    navigate(`/`)
  }

  return (
    <Container maxWidth="xl">
      <Grid container  justifyContent="center" spacing={2} pb={4}>
        <Grid
          size={{ xs: "auto", sm: 3 }}
          display="flex"
          justifyContent="center"
          alignItems="center"
          pt={{ xs: 4, sm: 0 }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#5991f1",
              color: "#FFFFFF",
              "&:hover": {
                backgroundColor: "#78a6f5",
              },
              minWidth: "80px",
            }}
            onClick={handleBack}
          >
            Back
          </Button>
        </Grid>
        <Grid
          size={{ xs: 12, sm: 6 }}
          sx={{ fontWeight: "bold", height: { xs: "auto", sm: "20vh" } }}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography variant="h4" textAlign="center">
            Repositories for {username}
          </Typography>
        </Grid>
        <Grid size={{ xs: "auto", sm: 3 }} />

        <Grid
          size={12}
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
        >
          <FilterBar onFilter={handleFilter} languages={languages} />
        </Grid>

        <Grid size={{ xs: 12, md: 3 }}>
          {userData && (
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="flex-start"
              height="100%"
            >
              <Avatar
                src={userData.avatar_url}
                alt={userData.login}
                sx={{ width: { xs: "30%", md: "auto" }, height: "auto", mb: 2, maxWidth: "300px" }}
              />
              <Typography variant="body1">{userData.login}</Typography>
            </Box>
          )}
        </Grid>

        <Grid size={{ xs: 12, md: 9 }}>
          <RepoList repos={filteredRepos} />
        </Grid>
      </Grid>
    </Container>
  )
}

export default RepositoriesView
