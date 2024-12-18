import React, { FC } from 'react'
import { Box, TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material'

interface FilterBarProps {
  onFilter: (name: string, language: string) => void
  languages: string[]
}

export const FilterBar: FC<FilterBarProps> = ({ onFilter, languages }) => {
  const [name, setName] = React.useState('')
  const [language, setLanguage] = React.useState('All')

  const handleFilter = () => {
    onFilter(name.trim(), language)
  }

  return (
    <Box display="flex" gap={2} justifyContent="center" flexWrap="wrap">
      <TextField
        label="Filter by name"
        variant="outlined"
        size="small"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <FormControl size="small" sx={{ minWidth: 120 }}>
        <InputLabel>Language</InputLabel>
        <Select
          value={language}
          label="Language"
          onChange={(e) => setLanguage(e.target.value)}
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
          backgroundColor: '#b195db', 
          color: '#FFFFFF', 
          '&:hover': { 
            backgroundColor: '#d5b7f0',
          }       
        }} 
        onClick={handleFilter}
      >
        Filter
      </Button>
    </Box>
  )
}
