import React from "react";
import { COMMENT_POST } from "../../api";
import { ReactComponent as Enviar } from "../../Assets/enviar.svg";
import useFetch from "../../Hooks/useFetch";

function PhotoCommentsForm({ id }) {
  const { request, error } = useFetch();
  const [comment, setComment] = React.useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const { url, options } = COMMENT_POST(id, { comment });

    await request(url, options);
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        name="comment"
        id="comment"
        placeholder="Comente..."
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
