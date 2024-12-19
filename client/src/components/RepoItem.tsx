import { FC } from 'react'
import { ListItem, ListItemText, Box, Typography, Link as MUILink } from '@mui/material'

interface RepoItemProps {
  name: string
  language: string | null
  html_url: string
  isPrivate: boolean
  updatedAt: string
}

export const RepoItem: FC<RepoItemProps> = ({ name, language, html_url, isPrivate, updatedAt }) => {
  const formattedDate = new Date(updatedAt).toLocaleDateString(undefined, {
    year: 'numeric', month: 'short', day: 'numeric'
  })

  return (
    <ListItem divider sx={{ borderColor: '#7d828a' }}>
      <ListItemText
        primary={
          <Box display="flex" alignItems="center" gap={1}>
            <MUILink href={html_url} target="_blank" rel="noopener noreferrer" underline="hover" sx={{ fontWeight: 500 }}>
              {name}
            </MUILink>
            <Box
              sx={{
                display: 'inline-block',
                borderRadius: '16px',
                px: 1,
                py: 0.25,
                backgroundColor: isPrivate ? '#78a6f5' : '#5991f1',
                color: '#ffffff',
                fontSize: '0.8rem',
                fontWeight: 500
              }}
            >
              {isPrivate ? 'Private' : 'Public'}
            </Box>
          </Box>
        }
        secondary={
          <Typography variant="body2" sx={{ color: "#7d828a" }}>
            {language || 'No Language'} • Updated on {formattedDate}
          </Typography>
        }
      />
    </ListItem>
  )
}
