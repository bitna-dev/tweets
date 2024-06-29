export interface PostProps {
  email: string
  content: string
  createdAt: string
  uid: string
  updatedAt: string
  profileUrl?: string
  likes?: string[]
  likeCount?: number
  comments?: any
}
