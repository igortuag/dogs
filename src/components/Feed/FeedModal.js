import React from "react";
import styles from "./FeedModal.module.css";
import useFetch from "../../hooks/useFetch";
import { PHOTO_GET } from "../../api";

function FeedModal({ photo }) {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(photo?.id);

    request(url, options);
  }, [photo, request]);

  return <div className={styles.modal}>FeedModal</div>;
}

export default FeedModal;
