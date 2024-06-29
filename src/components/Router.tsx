import Home from '@pages/Home'
import LoginPage from '@pages/auth/login'
import SignupPage from '@pages/auth/signup'
import PostListPage from '@pages/posts'
import EditPost from '@pages/posts/edit'
import NewPost from '@pages/posts/new'
import postDetail from '@pages/posts/postDetail'
import ProfilePage from '@pages/profile'
import EditProfile from '@pages/profile/edit'
import Search from '@pages/utils/search'
import Notification from '@pages/utils/notification'
import { Navigate, Route, Routes } from 'react-router-dom'

interface RouterProps {
  isAuthenticated: boolean
}
const Router = ({ isAuthenticated }: RouterProps) => {
  return (
    <Routes>
      {isAuthenticated ? (
        <>
          <Route path="/" Component={Home} />
          <Route path="/posts" Component={PostListPage} />
          <Route path="/posts/:id" Component={postDetail} />
          <Route path="/posts/new" Component={NewPost} />
          <Route path="/posts/edit/:id" Component={EditPost} />
          <Route path="/profile" Component={ProfilePage} />
          <Route path="/profile/edit" Component={EditProfile} />
          <Route path="/notifications" Component={Notification} />
          <Route path="/search" Component={Search} />
          <Route path="/*" element={<Navigate to="/" />} />
        </>
      ) : (
        <>
          <Route path="/login" Component={LoginPage} />
          <Route path="/signup" Component={SignupPage} />
          <Route path="/*" element={<Navigate to="/login" />} />
        </>
      )}
    </Routes>
  )
}

export default Router
