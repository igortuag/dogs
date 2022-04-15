import React from "react";
import Button from "../Forms/Button";
import Input from "../Forms/Input";
import useForm from "../../Hooks/useForm";
import useFetch from "../../Hooks/useFetch";
import { PASSWORD_RESET } from "../../api";
import Error from "../Helper/Error";

const LoginResetPassword = () => {
  const [login, setLogin] = React.useState("");
  const [key, setKey] = React.useState("");
  const password = useForm();
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const login = params.get("login");
    const key = params.get("key");
    if (login && key) {
      setLogin(login);
      setKey(key);
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password.validate()) {
      const { url, options } = PASSWORD_RESET({
        login,
        key,
        password: password.value,
      });
      await request(url, options);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          label="Nova Senha"
          type="password"
          name="password"
          {...password}
        />
        <Button>Resetar</Button>
        {loading ? (
          <Button disabled>Resetando...</Button>
        ) : (
          <Button type="submit">Resetar</Button>
        )}
      </form>
      <Error error={error} />
    </div>
  );
};

export default LoginResetPassword;
