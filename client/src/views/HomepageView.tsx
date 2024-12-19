import { Box, Container, Typography } from "@mui/material"
import githubLogo from "../assets/github-logo.png"
import { SearchBar } from "../components/SearchBar"

function HomepageView() {
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
            <SearchBar/>
          </Box>
        </Box>
      </Box>
    </Container>
  )
}

export default HomepageView
