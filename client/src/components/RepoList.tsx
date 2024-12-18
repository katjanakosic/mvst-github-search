import { FC } from 'react'
import { List, Paper } from '@mui/material'
import { RepoItem } from './RepoItem'

interface Repo {
  id: number
  name: string
  language: string | null
  html_url: string
}

interface RepoListProps {
  repos: Repo[]
}

export const RepoList: FC<RepoListProps> = ({ repos }) => {
  return (
    <Paper elevation={2}>
      <List>
        {repos.map((repo) => (
          <RepoItem
            key={repo.id}
            name={repo.name}
            language={repo.language}
            html_url={repo.html_url}
          />
        ))}
      </List>
    </Paper>
  )
}
