import React from "react";
import { useParams } from "react-router-dom";

function Photo() {
  const { id } = useParams();

  return <div>{id}</div>;
}

export default Photo;
