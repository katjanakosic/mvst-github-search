import { ComponentProps } from "react"
import { Meta, StoryObj } from "@storybook/react"
import { RepoList } from "../components/RepoList"

type StoryProps = ComponentProps<typeof RepoList>

const meta: Meta<StoryProps> = {
  component: RepoList,
}

export default meta

type Story = StoryObj<StoryProps>

// Default repositories list
export const RepositoriesList: Story = {
  args: {
    repos: [
      {
        id: 1,
        name: "TS Project",
        language: "TypeScript",
        html_url: "https://github.com/user/ts-project",
        private: false,
        updated_at: "2023-02-12T10:00:00Z",
      },
      {
        id: 2,
        name: "Py Project",
        language: "Python",
        html_url: "https://github.com/user/py-project",
        private: true,
        updated_at: "2024-11-11T12:30:00Z",
      },
    ],
  },
}
