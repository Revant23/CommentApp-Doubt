// Write your code here

const commentItem = () => {
  const {CommentDetails} = this.props
  const {nameText, commentText} = CommentDetails

  return (
    <>
      <li>
        <p>{nameText}</p>
        <p>{commentText}</p>
      </li>
    </>
  )
}

export default commentItem
