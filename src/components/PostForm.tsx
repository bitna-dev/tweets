import { CiImageOn } from 'react-icons/ci'
import { LuSend } from 'react-icons/lu'

const PostForm = () => {
  const handleSubmit = () => {}
  const handleFileUpload = () => {}
  return (
    <div className="post-form">
      <div className="post-form__writer">
        <textarea
          className="post-form__textarea"
          required
          name="content"
          id="content"
          placeholder="what is happening?"
        />
      </div>
      <div className="post-form__submit-area">
        <label htmlFor="file-input" className="post-form__file">
          <CiImageOn className="post-form__file-icon" />
        </label>
        <input
          className="hidden"
          type="file"
          name="file-input"
          accept="image/*"
          onChange={handleFileUpload}
        />
        <button
          type="button"
          className="post-form__submit-btn"
          onClick={handleSubmit}
        >
          <LuSend />
        </button>
      </div>
    </div>
  )
}

export default PostForm
