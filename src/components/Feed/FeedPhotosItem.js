import React from "react";

import styles from "./FeedPhotosItem.module.css";

function FeedPhotosItem({ photo, setModalPhoto }) {
  return (
    <li className={styles.photo} onClick={() => setModalPhoto(photo)}>
      <img src={photo.src} alt={photo.title} />
      <span className={styles.view}>{photo.acessos}</span>
    </li>
  );
}

export default FeedPhotosItem;
