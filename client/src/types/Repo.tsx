export default interface Repo {
  id: number
  name: string
  language: string | null
  html_url: string
  private: boolean
  updated_at: string
}
