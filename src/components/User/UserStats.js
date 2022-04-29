import React from "react";
import { STATS_GET } from "../../api";

import useFetch from "../../Hooks/useFetch";
import Loading from "../../components/Helper/Loading";
import Error from "../../components/Helper/Error";
import Head from "../Helper/Head";

const UserStatsGraphs = React.lazy(() => import("./UserStatsGraphs"));

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
      <React.Suspense fallback={<div></div>}>
        <Head title="Estatísticas" />
        <UserStatsGraphs data={data} />
      </React.Suspense>
    );
  }

  return null;
};

export default UserStats;
