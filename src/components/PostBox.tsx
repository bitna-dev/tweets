import { PostProps } from '@models/posts'
import { CgProfile } from 'react-icons/cg'
import { FaRegHeart } from 'react-icons/fa'
import { FaRegCommentDots } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const PostBox = ({ post }: { post: PostProps }) => {
  const navigate = useNavigate()
  const handleSubmit = () => {}
  const handleFileUpload = () => {}
  const handleDelete = () => {}
  const handleEdit = () => {}
  return (
    <div className="post__box">
      <div className="post__box-profile">
        <div className="post__flex">
          {post?.profileUrl ? (
            <img
              src={post.profileUrl}
              alt="profile"
              className="post__box-profile-img"
            />
          ) : (
            <CgProfile className="post__box-profile-icon" />
          )}
          <div className="post__email">{post?.email}</div>
          <div className="post__date">{post?.updatedAt}</div>
        </div>

        <div className="post__box-content">{post?.content}</div>
      </div>
      <div className="post__box-footer">
        <button type="button" className="post__delete" onClick={handleDelete}>
          삭제
        </button>
        <button
          type="button"
          className="post__edit"
          onClick={() => {
            handleEdit()
          }}
        >
          수정
        </button>
        <button type="button" className="post__box-footer__likes">
          <FaRegHeart />
          {post?.likeCount ? post.likeCount : '0'}
        </button>
        <button
          type="button"
          className="post__box-footer__comments"
          onClick={() => {
            handleEdit()
          }}
        >
          <FaRegCommentDots />
          {post?.comments?.length > 0 ? post.comments.length : '0'}
        </button>
      </div>
    </div>
  )
}

export default PostBox
