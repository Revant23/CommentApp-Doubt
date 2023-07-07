import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import {formatDistanceToNow} from 'date-fns'

import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  state = {nameText: '', commentText: '', commentsList: [], commentsCount: 0}

  NameTextInput = event => {
    this.setState({nameText: event.target.value})
  }

  commentTextInput = event => {
    this.setState({commentText: event.target.value})
  }

  deleteComment = id => {
    const {commentsList} = this.state
    const FilteredComments = commentsList.filter(
      eachComment => eachComment.id !== id,
    )

    this.setState({commentsList: FilteredComments})
    this.setState(prevState => ({commentsCount: prevState.commentsCount - 1}))
  }

  CheckingLikeBtn = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (eachComment.id === id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  submitBtnClicked = event => {
    event.preventDefault()
    const {commentText, nameText} = this.state
    const initialBackgroundColorClassName = `${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`
    const newComment = {
      id: uuidv4(),
      nameText,
      date: formatDistanceToNow(new Date()),
      commentText,
      isLiked: false,
      initialClassName: initialBackgroundColorClassName,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      nameText: '',
      commentText: '',
    }))
    this.setState(prevState => ({commentsCount: prevState.commentsCount + 1}))
  }

  NameTextInput = event => {
    this.setState({nameText: event.target.value})
  }

  commentTextInput = event => {
    this.setState({commentText: event.target.value})
  }

  render() {
    const {commentsList, commentsCount, nameText, commentText} = this.state

    return (
      <div>
        <div className="main-container">
          <div className="app-container">
            <h1>Comments</h1>
            <p>Say something about 4.0 Tecnologies</p>
            <form className="input-container" onSubmit={this.submitBtnClicked}>
              <input
                rows="8"
                onChange={this.NameTextInput}
                placeholder="Your Name"
                className="nameInput"
                value={nameText}
              />
              <textarea
                onChange={this.commentTextInput}
                placeholder="Your Comment"
                rows="8"
                value={commentText}
              >
                {commentText}
              </textarea>
              <button type="sumbit" className="button">
                Add Comment
              </button>
            </form>
          </div>
          <div>
            <img
              alt="comments"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png "
            />
          </div>
        </div>
        <hr />
        <p>{commentsCount} comments</p>

        <ul>
          {commentsList.map(eachComment => (
            <CommentItem
              CommentDetails={eachComment}
              CheckingLikeBtn={this.CheckingLikeBtn}
              deleteComment={this.deleteComment}
              key={eachComment.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
