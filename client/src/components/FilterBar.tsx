import React, { FC } from 'react'
import { Box, TextField, Button } from '@mui/material'

interface FilterBarProps {
  onFilter: (name: string, language: string) => void
}


export const FilterBar: FC<FilterBarProps> = ({ onFilter }) => {
  const [name, setName] = React.useState('')
  const [language, setLanguage] = React.useState('')

  const handleFilter = () => {
    onFilter(name.trim(), language.trim())
  }

  return (
    <Box display="flex" gap={2} justifyContent="center">
      <TextField
        label="Filter by name"
        variant="outlined"
        size="small"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        label="Filter by language"
        variant="outlined"
        size="small"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
      />
      <Button 
        variant="contained" 
        sx={{
              backgroundColor: '#a193c9', 
              color: '#FFFFFF', 
              '&:hover': { 
                backgroundColor: '#d5b7f0',
              }       
        }} 
        onClick={handleFilter}>
        Filter
      </Button>
    </Box>
  )
}
