import React from "react";

import styles from "./FeedPhotosItem.module.css";

function FeedPhotosItem({ photo }) {
  return (
    <li className={styles.photo}>
      <img src={photo.src} alt={photo.title} />
      <span className={styles.view}>{photo.acessos}</span>
    </li>
  );
}

export default FeedPhotosItem;
