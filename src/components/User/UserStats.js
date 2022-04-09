import React from "react";
import { STATS_GET } from "../../api";

import useFetch from "../../hooks/useFetch";

const UserStats = () => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function getData() {
      const { url, options } = STATS_GET();
      await request(url, options);
    }
    getData();
  }, [request]);

  return (
    <div>
      <h1>UserStats</h1>
    </div>
  );
};

export default UserStats;
