import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { UserContext } from "../../UserContext";
import { ReactComponent as Feed } from "../../Assets/feed.svg";
import { ReactComponent as Stats } from "../../Assets/estatisticas.svg";
import { ReactComponent as Add } from "../../Assets/adicionar.svg";
import { ReactComponent as Logout } from "../../Assets/sair.svg";
import styles from "./UserHeaderNav.module.css";
import useMedia from "../../Hooks/useMedia";

const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);
  const mobile = useMedia("(max-width: 40rem)");
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const { pathName } = useLocation();

  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathName]);

  return (
    <>
      {mobile && (
        <button
          aria-label="menu"
          className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}
      <nav className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive}`}>
        <NavLink to="/user" end activeClassName={styles.active}>
          <Feed />
          {mobile && "Minhas Fotos"}
        </NavLink>
        <NavLink to="/user/stats" activeClassName={styles.active}>
          <Stats />
          {mobile && "Estatísticas"}
        </NavLink>
        <NavLink to="/user/post" activeClassName={styles.active}>
          <Add />
          {mobile && "Adicionar Foto"}
        </NavLink>
        <button onClick={userLogout}>
          <Logout />
          {mobile && "Sair"}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
