import React from "react";
import styles from "./Image.module.css";

function Image({ alt, ...props }) {
  const [skeleton, setSkeleton] = React.useState(true);

  function handleLoad({ target }) {
    setSkeleton(false);
    target.styles.opacity = 1;
  }

  return (
    <div className={styles.wrapper}>
      {skeleton && <div className={styles.skeleton} />}
      <img onLoad={handleLoad} className={styles.img} alt={alt} {...props} />
    </div>
  );
}

export default Image;
