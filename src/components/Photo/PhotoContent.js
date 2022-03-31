import React from "react";
import { Link } from "react-router-dom";
import styles from "./PhotoContent.module.css";

function PhotoContent({ data }) {
  const { photo, comments } = data;

  return (
    <div className={styles.photo}>
      <div className={styles.img}>
        <img src={photo.src} alt={photo.title} />
      </div>
      <div className={styles.details}>
        <div>
          <p>
            <Link to={`/profile/${photo.author}`}>@{photo.author}</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default PhotoContent;
