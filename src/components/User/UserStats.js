import React from "react";

import useFetch from "../../hooks/useFetch";

const UserStats = () => {
  const { data, error, loading, request } = useFetch();

  return (
    <div>
      <h1>UserStats</h1>
    </div>
  );
};

export default UserStats;
