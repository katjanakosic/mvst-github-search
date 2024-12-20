// This component renders a list of repositories by mapping 
// each repository to a RepoItem component.

import { FC } from 'react'
import { List, Box } from '@mui/material'
import { RepoItem } from './RepoItem'

interface Repo {
  id: number
  name: string
  language: string | null
  html_url: string
  private: boolean
  updated_at: string
}

interface RepoListProps {
  repos: Repo[]
}

export const RepoList: FC<RepoListProps> = ({ repos }) => {
  return (
    <Box>
      <List>
        {repos.map((repo) => (
          <RepoItem
            key={repo.id}
            name={repo.name}
            language={repo.language}
            html_url={repo.html_url}
            isPrivate={repo.private}
            updatedAt={repo.updated_at}
          />
        ))}
      </List>
    </Box>
  )
}
