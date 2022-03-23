import React from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../UserContext";

const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);

  return (
    <nav>
      <NavLink to="/user">Minhas Fotos</NavLink>
      <NavLink to="/user/stats">Estatísticas</NavLink>
      <NavLink to="/user/post">Adicionar Foto</NavLink>
      <button onClick={userLogout}>Sair</button>
    </nav>
  );
};

export default UserHeaderNav;
