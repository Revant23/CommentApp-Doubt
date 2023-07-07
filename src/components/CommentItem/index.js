// Write your code here

import './index.css'

const CommentItem = props => {
  const {CommentDetails, CheckingLikeBtn, deleteComment} = props

  const {
    nameText,
    commentText,
    date,
    isLiked,
    initialClassName,
    id,
  } = CommentDetails

  const LikeBtnClicked = () => {
    CheckingLikeBtn(id)
  }

  const deleteBtnClicked = () => {
    deleteComment(id)
  }

  const LikeBtnImage = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  return (
    <>
      <li className="eachComment">
        <div className="container">
          <div className="nameTime">
            <p className={`initialContainer ${initialClassName}`}>
              {nameText[0]}
            </p>
            <p className="nameText">{nameText}</p>
            <p className="timeText">{date}</p>
          </div>
          <p>{commentText}</p>
        </div>

        <button onClick={LikeBtnClicked} type="button" className="likeBtn">
          <img src={LikeBtnImage} alt="like" />
        </button>
        <button
          type="button"
          testid="delete"
          className="deleteBtn"
          onClick={deleteBtnClicked}
        >
          <img
            alt="delete"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
          />
        </button>
      </li>
      <hr />
    </>
  )
}

export default CommentItem
