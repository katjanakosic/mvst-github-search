import { Box, Button, Container, TextField, Typography } from "@mui/material"
import React from "react"
import { useNavigate } from "react-router-dom"
import githubLogo from "../assets/github-logo.png"

function HomepageView() {
  const [username, setUsername] = React.useState("")
  const navigate = useNavigate()

  const handleSearch = () => {
    if (!username.trim()) return
    // Navigate to RepositoriesView
    navigate(`/repositories/${username.trim()}`)
  }

  return (
    <Container maxWidth="xl">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="20vh"
        sx={{ fontWeight: 'bold' }}
      >
        <Typography variant="h4">GitHub Repositories</Typography>
      </Box>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="60vh"
        width="70%"
        bgcolor="#151d2d"
        mx="auto"
        borderRadius="16px"
        flexDirection="column"
        p={4}
      >
        <img src={githubLogo} alt="GitHub Logo" width={400} height={230} />
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          gap={3}
          width="100%"
          maxWidth="sm"
          marginTop={8}
        >
          <Box width="100%">
            <Typography mb={2}>Enter a GitHub Username:</Typography>
            <Box display="flex" flexDirection="row" gap={3}>
              <TextField
                fullWidth
                label="Username"
                variant="outlined"
                color="primary"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    color: "#e0e0e0",
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#e0e0e0",
                    },
                    "&.Mui-focused": {
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "primary.main",
                      },
                    },
                    "& .MuiInputLabel-outlined": {
                      color: "#e0e0e0",
                      "&.Mui-focused": {
                        color: "primary.main",
                      },
                    },
                  },
                }}
                InputLabelProps={{
                  sx: {
                    color: "#e0e0e0",  
                    "&.Mui-focused": {
                      color: "primary.main", 
                    },
                  },
                }}
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
                  backgroundColor: "#5991f1",
                  color: "#FFFFFF",
                  "&:hover": {
                    backgroundColor: "#78a6f5",
                  },
                  minWidth: "100px",
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
