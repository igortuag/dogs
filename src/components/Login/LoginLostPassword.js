import React from "react";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../Hooks/useForm";

const LoginLostPassword = () => {
  const email = useForm("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section>
      <h1 className="title">Perdeu a senha?</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Email / Usuário" type="text" name="email" {...email} />
        <Button type="submit">Enviar Email</Button>
      </form>
    </section>
  );
};

export default LoginLostPassword;
