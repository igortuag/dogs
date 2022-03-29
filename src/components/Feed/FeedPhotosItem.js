import React from "react";

function FeedPhotosItem({ photo }) {
  return (
    <li>
      <img src={photo.src} alt={photo.title} />
    </li>
  );
}

export default FeedPhotosItem;
