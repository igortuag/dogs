import React from "react";
import styles from "./FeedModal.module.css";
import Error from "../Helper/Error";
import Loading from "../Helper/Loading";
import PhotoContent from "../Photo/PhotoContent";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhoto } from "../../store/photo";

function FeedModal({ photo, setModalPhoto }) {
  const { modal } = useSelector((state) => state.ui);
  const { data, loading, error } = useSelector((state) => state.photo);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchPhoto(photo?.id));
  }, [dispatch, photo?.id]);

  function handleOutsideClick(e) {
    if (e.target === e.currentTarget) {
      setModalPhoto(null);
    }
  }

  if (!modal) return null;

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent />}
    </div>
  );
}

export default FeedModal;
