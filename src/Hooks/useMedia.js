import React from "react";

const UseMedia = (media) => {
  const [match, setMatch] = React.useState(null);

  React.useEffect(() => {
    function changeMatch() {
      setMatch(window.matchMedia(media).matches);
    }
    window.addEventListener("resize", changeMatch);
    return () => window.removeEventListener("resize", changeMatch);
  }, []);

  return <div></div>;
};

export default UseMedia;
