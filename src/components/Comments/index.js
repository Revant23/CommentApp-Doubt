import {Component} from 'react'

import commentItem from '../CommentItem'

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
  state = {nameText: '', commentText: '', commentsList: []}

  NameTextInput = event => {
    this.setState({nameText: event.target.value})
  }

  commentTextInput = event => {
    this.setState({commentText: event.target.value})
  }

  submitBtnClicked = event => {
    event.preventDefault()
    const {commentText, nameText, commentsList} = this.state
    const newComment = {
      name: nameText,
      comment: commentText,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
    }))
  }

  NameTextInput = event => {
    this.setState({nameText: event.target.value})
  }

  commentTextInput = event => {
    this.setState({commentText: event.target.value})
  }

  render() {
    const {commentsList} = this.state

    return (
      <div>
        <div>
          <h1>Comments</h1>
          <p>Say something about 4.0 Tecnologies</p>
          <form className="input-container" onSubmit={this.submitBtnClicked}>
            <input
              rows="8"
              onChange={this.NameTextInput}
              placeholder="Your Name"
              className="nameInput"
            />
            <textarea
              onChange={this.commentTextInput}
              placeholder="Your Comment"
              rows="8"
            >
              Your Comment
            </textarea>
            <button type="sumbit" className="button">
              Add Comment
            </button>
          </form>

          <hr />
        </div>
        <ul>
          {commentsList.map(eachComment => (
            <commentItem CommentDetails={eachComment} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
