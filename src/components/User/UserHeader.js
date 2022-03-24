import React from "react";

import UserHeaderNav from "./UserHeaderNav";
import styles from "./UserHeader.module.css";

const UserHeader = () => {
  return (
    <section className={styles.header}>
      <h1 className="title">Título</h1>
      <UserHeaderNav />
    </section>
  );
};

export default UserHeader;
