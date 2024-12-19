import { Box, Button, TextField } from "@mui/material"
import React from "react"
import { useNavigate } from "react-router-dom"

export const SearchBar = () => {
  const [username, setUsername] = React.useState("")
  const navigate = useNavigate()

  const handleSearch = () => {
    if (!username.trim()) return
    navigate(`/repositories/${username.trim()}`)
  }

  return (
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
  )
}
