import { ComponentProps } from "react"
import { Meta, StoryObj } from "@storybook/react"
import { RepoItem } from "../components/RepoItem"

type StoryProps = ComponentProps<typeof RepoItem>

const meta: Meta<StoryProps> = {
  component: RepoItem,
}

export default meta

type Story = StoryObj<StoryProps>

// Public repository
export const PublicRepo: Story = {
  args: {
    name: "My Public Repo",
    language: "TypeScript",
    html_url: "https://github.com/user/my-public-repo",
    isPrivate: false,
    updatedAt: "2023-01-01T12:00:00Z",
  },
}

// Public repository 
// (not visible in actual web app as it it not possible to fetch provate repos from GitHub)
export const PrivateRepo: Story = {
  args: {
    name: "My Private Repo",
    language: "JavaScript",
    html_url: "https://github.com/user/my-private-repo",
    isPrivate: true,
    updatedAt: "2024-12-22T08:30:00Z",
  },
}
