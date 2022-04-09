import React from "react";
import styles from "./UserStatsGraphs.module.css";

function UserStatsGraphs({ data }) {
  const [graph, setGraph] = React.useState([]);
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    setTotal(data.reduce((a, b) => a + b.acessos, 0));
  }, [data]);

  return (
    <section className={`${styles.graph} animeLeft`}>
      <div className={styles.total}>
        <p>Acessos: {total}</p>
      </div>
    </section>
  );
}

export default UserStatsGraphs;
