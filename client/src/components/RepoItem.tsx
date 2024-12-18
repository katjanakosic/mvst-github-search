import { FC } from 'react'
import { ListItem, ListItemText, Link } from '@mui/material'

interface RepoItemProps {
  name: string
  language: string | null
  html_url: string
}


export const RepoItem: FC<RepoItemProps> = ({ name, language, html_url }) => {
  return (
    <ListItem>
      <ListItemText
        primary={
          <Link href={html_url} target="_blank" rel="noopener noreferrer">
            {name}
          </Link>
        }
        secondary={language || 'No Language Specified'}
      />
    </ListItem>
  )
}
