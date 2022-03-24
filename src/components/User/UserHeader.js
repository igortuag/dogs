import React from "react";

import UserHeaderNav from "./UserHeaderNav";
import styles from "./UserHeader.module.css";
import { useLocation } from "react-router-dom";

const UserHeader = () => {
  const [title, setTitle] = React.useState("");
  const { pathname } = useLocation();

  React.useEffect(() => {
    switch (pathname) {
      case "/user":
        setTitle("Minha Conta");
        break;
      case "/user/post":
        setTitle("Poste sua foto");
        break;
      case "/user/stats":
        setTitle("Estatísticas");
        break;
      default:
        setTitle("");
    }
  }, [pathname]);

  return (
    <section className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </section>
  );
};

export default UserHeader;
