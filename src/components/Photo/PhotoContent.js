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
            <span className={styles.view}>{photo.acessos}</span>
          </p>
          <h1 className="title">
            <Link to={`/photo/${photo.id}`}>{photo.title}</Link>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default PhotoContent;
