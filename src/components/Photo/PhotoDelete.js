import React from "react";
import styles from "./PhotoComments.module.css";

function PhotoDelete({ id }) {
  return (
    <div>
      <button className={styles.delete}>Deletar</button>
    </div>
  );
}

export default PhotoDelete;
