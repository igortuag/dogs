import React from "react";

import styles from "./FeedPhotos.module.css";

function FeedPhotosItem({ photo }) {
  return (
    <li className={styles.photo}>
      <img src={photo.src} alt={photo.title} />
      <span>{photo.acessos}</span>
    </li>
  );
}

export default FeedPhotosItem;
