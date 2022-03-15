import React from "react";

export const UserContext = React.createContext();

export const UserStorage = () => {
  return <UserContext.Provider>UserStorage</UserContext.Provider>;
};
