import { PostProps } from '@models/posts'
import { useState } from 'react'
import PostBox from '@components/PostBox'
import PostForm from '@components/PostForm'

const posts: PostProps[] = [
  {
    email: 'test1@gmail.com',
    content: '내용',
    createdAt: '2024-09-11',
    updatedAt: '2024-09-11',
    uid: '111111',
  },
  {
    email: 'test5@gmail.com',
    content: '내용1',
    createdAt: '2024-09-12',
    updatedAt: '2024-09-12',
    uid: '1',
  },
  {
    email: 'test4@gmail.com',
    content: '내용2',
    createdAt: '2024-09-13',
    updatedAt: '2024-09-13',
    uid: '33',
  },
  {
    email: 'test3@gmail.com',
    content: '내용3',
    createdAt: '2024-09-14',
    updatedAt: '2024-09-14',
    uid: '222',
  },
  {
    email: 'test2@gmail.com',
    content: '내용4',
    createdAt: '2024-09-15',
    updatedAt: '2024-09-15',
    uid: '9',
  },
]

const Home = () => {
  const [isClicked, setIsClicked] = useState()

  return (
    <>
      <div className="home">
        <div className="home__title">TWEETS</div>
        <div className="home__tabs">
          <div className="home__tab home__tab--active">For You</div>
          <div className="home__tab home__tab">Following</div>
        </div>
      </div>
      <PostForm />
      <div className="post">
        {posts?.map((post) => <PostBox key={post.updatedAt} post={post} />)}
      </div>
    </>
  )
}

export default Home
