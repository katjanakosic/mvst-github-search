import { Box, Button, Container, TextField, Typography } from "@mui/material"
import React from "react"
import { useNavigate } from "react-router-dom"

function HomepageView() {
  const [username, setUsername] = React.useState("")
  const navigate = useNavigate()

  const handleSearch = () => {
    if (!username.trim()) return
    // Navigate to the RepositoriesView
    navigate(`/repositories/${username.trim()}`)
  }

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
        minHeight="60vh"
        width="70%"
        bgcolor="#d2d8f7"
        mx="auto"
        borderRadius="16px"
        flexDirection="column"
        p={4}
      >
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          gap={3}
          width="100%"
          maxWidth="sm"
        >
          <Box width="100%">
            <Typography mb={2}>Enter a GitHub Username:</Typography>
            <Box display="flex" flexDirection="row" gap={3}>
              <TextField
                fullWidth
                label="Username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSearch()
                }}
              />
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#b195db",
                  color: "#FFFFFF",
                  "&:hover": {
                    backgroundColor: "#d5b7f0",
                  },
                  minWidth: '100px'
                }}
                onClick={handleSearch}
              >
                Search
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  )
}

export default HomepageView
