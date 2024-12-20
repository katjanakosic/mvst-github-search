// This component provides an input field and a dropdown menu to 
// filter the displayed repositories by name and programming language.

import React, { FC } from "react"
import {
  Box,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material"

interface FilterBarProps {
  onFilter: (name: string, language: string) => void
  languages: string[]
}

export const FilterBar: FC<FilterBarProps> = ({ onFilter, languages }) => {
  // State to track the repository name filter input
  const [name, setName] = React.useState("")

  // State to track the selected programming language filter
  const [language, setLanguage] = React.useState("All")

  // Calls the parent filter function with the current name and language values
  const handleFilter = () => {
    onFilter(name.trim(), language)
  }

  return (
    <Box display="flex" gap={2} justifyContent="center" flexWrap="wrap">
      <TextField
        label="Filter by name"
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
        size="small"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <FormControl
        size="small"
        sx={{
          minWidth: 120,
          "& .MuiOutlinedInput-root": {
            color: "#e0e0e0", 
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#e0e0e0", 
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#ffffff", 
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "primary.main", 
            },
          },
          "& .MuiInputLabel-root": {
            color: "#e0e0e0", 
            "&.Mui-focused": {
              color: "primary.main", 
            },
          },
        }}
      >
        <InputLabel>Language</InputLabel>
        <Select
          value={language}
          label="Language"
          onChange={(e) => setLanguage(e.target.value)}
          sx={{
            color: "#e0e0e0", 
            "& .MuiSelect-icon": {
              color: "#e0e0e0", 
            },
            "&:hover .MuiSelect-icon": {
              color: "#ffffff", 
            },
            "&.Mui-focused .MuiSelect-icon": {
              color: "primary.main", 
            },
          }}
        >
          <MenuItem value="All">All</MenuItem>
          {languages.map((lang) => (
            <MenuItem key={lang} value={lang}>
              {lang}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Button
        variant="contained"
        sx={{
          backgroundColor: "#5991f1",
          color: "#FFFFFF",
          "&:hover": {
            backgroundColor: "#78a6f5",
          },
        }}
        onClick={handleFilter}
      >
        Filter
      </Button>
    </Box>
  )
}
