import React from "react";

function FeedPhotosItem({ photo }) {
  return (
    <li>
      <img src={photo.src} alt={photo.title} />
      <span>{photo.acessos}</span>
    </li>
  );
}

export default FeedPhotosItem;
