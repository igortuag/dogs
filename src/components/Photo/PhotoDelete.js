import React from "react";
import { PHOTO_DELETE } from "../../api";
import useFetch from "../../Hooks/useFetch";
import styles from "./PhotoComments.module.css";

function PhotoDelete({ id }) {
  const { loading, request } = useFetch();

  async function handleClick(e) {
    e.preventDefault();
    const { url, options } = PHOTO_DELETE(id);
    const { response } = await request(url, options);
    if (response.ok) {
      window.location.reload();
    }
  }

  return (
    <div>
      <button onClick={handleClick} className={styles.delete}>
        Deletar
      </button>
    </div>
  );
}

export default PhotoDelete;
