import React from "react";
import { NavLink } from "react-router-dom";

const UserHeaderNav = () => {
  return (
    <nav>
      <NavLink to="/user">Minhas Fotos</NavLink>
      <NavLink to="/user/stats">Estatísticas</NavLink>
      <NavLink to="/user/post">Adicionar Foto</NavLink>
      <button>Sair</button>
    </nav>
  );
};

export default UserHeaderNav;
