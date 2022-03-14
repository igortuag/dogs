import React from "react";
import { Link } from "react-router-dom";
import { TOKEN_POST } from "../../api";
import useForm from "../../Hooks/useForm";
import Button from "../Forms/Button";
import Input from "../Forms/Input";

const LoginForm = () => {
  const userName = useForm();
  const password = useForm();

  async function handleSubmit(e) {
    e.preventDefault();
    if (userName.validate() && password.validate()) {
      const { url, options } = TOKEN_POST({
        username: userName.value,
        password: password.value,
      });

      const response = await fetch(url, options);
      const json = await response.json();

      window.localStorage.setItem("token", json.token);
    }
  }

  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...userName} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Button>Entrar</Button>
      </form>
      <Link to="/login/create">Cadastro</Link>
    </section>
  );
};

export default LoginForm;
