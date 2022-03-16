import React from "react";
import { Link } from "react-router-dom";
import useForm from "../../Hooks/useForm";
import { UserContext } from "../../UserContext";
import Button from "../Forms/Button";
import Input from "../Forms/Input";

const LoginForm = () => {
  const userName = useForm();
  const password = useForm();
  const { userLogin, error, loading } = React.useContext(UserContext);

  async function handleSubmit(e) {
    e.preventDefault();
    if (userName.validate() && password.validate()) {
      userLogin(userName.value, password.value);
    }
  }

  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...userName} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Button disabled={loading}>
          {loading ? "Carregando..." : "Entrar"}
        </Button>
        {error && <p dangerouslySetInnerHTML={{ __html: error }} />}
      </form>
      <Link to="/login/create">Cadastro</Link>
    </section>
  );
};

export default LoginForm;
