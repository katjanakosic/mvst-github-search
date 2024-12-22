import { ComponentProps } from "react"
import { Meta, StoryObj } from "@storybook/react"
import { FilterBar } from "../components/FilterBar"

type StoryProps = ComponentProps<typeof FilterBar>

const meta: Meta<StoryProps> = {
  component: FilterBar,
  argTypes: {
    onFilter: { action: "filterCalled" },
    languages: { control: "object" },
  },
}

export default meta

type Story = StoryObj<StoryProps>

// Non-empty language list
export const LanguageList: Story = {
  args: {
    languages: ["TypeScript", "JavaScript", "Python"],
  },
}

// Empty language list
export const EmptyLanguageList: Story = {
  args: {
    languages: [],
  },
}
