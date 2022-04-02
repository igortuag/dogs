import React from "react";
import { ReactComponent as Enviar } from "../../Assets/enviar.svg";

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
      <button>
        <Enviar />
      </button>
    </form>
  );
}

export default PhotoCommentsForm;
