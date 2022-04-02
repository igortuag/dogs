import React from "react";

function PhotoCommentsForm({ id }) {
  const [comment, setComment] = React.useState("");

  return (
    <form>
      <textarea
        name="comment"
        id="comment"
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
    </form>
  );
}

export default PhotoCommentsForm;
