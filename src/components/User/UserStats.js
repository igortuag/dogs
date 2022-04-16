import React from "react";
import { STATS_GET } from "../../api";

import useFetch from "../../hooks/useFetch";
import Loading from "../../components/Helper/Loading";
import Error from "../../components/Helper/Error";
import UserStatsGraphs from "./UserStatsGraphs";
import Head from "../Helper/Head";

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

  if (data) {
    return (
      <div>
        <Head title="Estatísticas" />
        <UserStatsGraphs data={data} />
      </div>
    );
  }

  return null;
};

export default UserStats;
