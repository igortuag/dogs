import React from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../UserContext";
import { ReactComponent as Feed } from "../../Assets/feed.svg";
import { ReactComponent as Stats } from "../../Assets/estatisticas.svg";
import { ReactComponent as Add } from "../../Assets/adicionar.svg";
import { ReactComponent as Logout } from "../../Assets/sair.svg";
import styles from "./UserHeaderNav.module.css";

const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);

  return (
    <nav className={styles.nav}>
      <NavLink to="/user">
        <Feed /> Minhas Fotos
      </NavLink>
      <NavLink to="/user/stats">
        <Stats />
        Estatísticas
      </NavLink>
      <NavLink to="/user/post">
        <Add />
        Adicionar Foto
      </NavLink>
      <button onClick={userLogout}>
        <Logout />
        Sair
      </button>
    </nav>
  );
};

export default UserHeaderNav;
