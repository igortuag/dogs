import React from "react";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../Hooks/useForm";
import useFetch from "../../Hooks/useFetch";
import { PASSWORD_LOST } from "../../api";

const LoginLostPassword = () => {
  const login = useForm("");
  const { data, loading, error, request } = useFetch();

  const handleSubmit = (event) => {
    event.preventDefault();

    const { url, options } = PASSWORD_LOST({
      login: login.value,
      url: window.location.href.replace("forgot", "resetar"),
    });
    request(url, options);
  };

  return (
    <section>
      <h1 className="title">Perdeu a senha?</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Email / Usuário" type="text" name="email" {...login} />
        <Button type="submit">Enviar Email</Button>
      </form>
    </section>
  );
};

export default LoginLostPassword;
