import React from "react";

function Head(props) {
  React.useEffect(() => {
    document.title = props.title + "| Dogs";
  }, [props]);

  return <></>;
}

export default Head;
