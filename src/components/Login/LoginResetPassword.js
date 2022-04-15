import React from "react";

const LoginResetPassword = () => {
  const [login, setLogin] = React.useState("");
  const [key, setKey] = React.useState("");

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const login = params.get("login");
    const key = params.get("key");
    if (login && key) {
      setLogin(login);
      setKey(key);
    }
  }, []);

  return <div>LoginResetPassword</div>;
};

export default LoginResetPassword;
