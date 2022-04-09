import React from "react";
import { STATS_GET } from "../../api";

import useFetch from "../../hooks/useFetch";
import Loading from "../../components/Helper/Loading";
import Error from "../../components/Helper/Error";

const UserStats = () => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function getData() {
      const { url, options } = STATS_GET();
      await request(url, options);
    }
    getData();
  }, [request]);

  if (loading) return <Loading />;

  if (error) return <Error />;

  return (
    <div>
      <h1>UserStats</h1>
    </div>
  );
};

export default UserStats;
