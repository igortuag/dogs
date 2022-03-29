import React from "react";
import FeedPhotosItem from "./FeedPhotosItem";
import useFetch from "../../Hooks/useFetch";
import { PHOTOS_GET } from "../../api";
import Error from "../Helper/Error";

function FeedPhotos() {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({
        page: 1,
        total: 6,
        user: 0,
      });

      const { response, json } = await request(url, options);

      console.log("json ::>>", json);
    }
    fetchPhotos();
  }, [request]);

  if (error) return <Error error={error} />;

  return <FeedPhotosItem />;
}

export default FeedPhotos;
