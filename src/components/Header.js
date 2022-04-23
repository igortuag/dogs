import React from "react";
import { Link } from "react-router-dom";

import styles from "./Header.module.css";
import { ReactComponent as Dogs } from "../Assets/dogs.svg";
import { useSelector } from "react-redux";

const Header = () => {
  const { data } = useSelector((state) => state.user);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>
        {data?.nome ? (
          <>
            <Link className={styles.login} to="/user">
              {data.nome}
            </Link>
          </>
        ) : (
          <Link className={styles.login} to="/login">
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
