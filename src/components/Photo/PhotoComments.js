import React from "react";
import UserContext from "../../UserContext";
import PhotoCommentsForm from "./PhotoCommentsForm";

function PhotoComments({ id }) {
  const { login } = React.useContext(UserContext);

  return <div>{login && <PhotoCommentsForm id={id} />}</div>;
}

export default PhotoComments;
