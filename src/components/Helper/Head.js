import React from "react";

function Head(props) {
  React.useEffect(() => {
    document.title = props.title;
  }, [props]);

  return <></>;
}

export default Head;
