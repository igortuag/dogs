import React from "react";
import UserContext from "../../UserContext";
import PhotoCommentsForm from "./PhotoCommentsForm";

function PhotoComments({ id, comments }) {
  const [comments, setComments] = React.useState(comments);
  const { login } = React.useContext(UserContext);

  return (
    <div>
      <ul>
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {login && <PhotoCommentsForm id={id} />}
    </div>
  );
}

export default PhotoComments;
