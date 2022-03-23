import React from "react";

import styles from "./User.module.css";
import UserHeaderNav from "./UserHeaderNav";

const UserHeader = () => {
  return (
    <section className={styles.container}>
      <h1 className="title">Título</h1>
      <UserHeaderNav />
    </section>
  );
};

export default UserHeader;
