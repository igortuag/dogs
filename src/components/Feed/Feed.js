import React from "react";
import FeedModal from "./FeedModal";
import FeedPhotos from "./FeedPhotos";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { loadNewPhotos, resetFeedState } from "../../store/feed";
import Loading from "../Helper/Loading";
import Error from "../Helper/Error";

const Feed = ({ user }) => {
  const { infinite, loading, list, error } = useSelector((state) => state.feed);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(resetFeedState());
    dispatch(loadNewPhotos({ user, total: 6 }));
  }, [dispatch, user]);

  React.useEffect(() => {
    function infiniteScroll() {
      if (infinite) {
        let wait = false;
        const scroll = window.scrollY;
        const height = document.body.offsetHeight - window.innerHeight;
        if (scroll > height * 0.75 && !wait) {
          dispatch(loadNewPhotos({ user, total: 6 }));
          wait = true;
          setTimeout(() => {
            wait = false;
          }, 500);
        }
      }
    }

    window.addEventListener("wheel", infiniteScroll);
    window.addEventListener("scroll", infiniteScroll);

    return () => {
      window.removeEventListener("wheel", infiniteScroll);
      window.removeEventListener("scroll", infiniteScroll);
    };
  }, [infinite, dispatch, user]);

  return (
    <div>
      <FeedModal />
      {loading && <Loading />}
      {error && <Error error={error} />}
      {list.length > 0 && <FeedPhotos />}
    </div>
  );
};

Feed.defaultProps = {
  user: 0,
};

Feed.propType = {
  user: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.string.isRequired,
  ]),
};

export default Feed;
