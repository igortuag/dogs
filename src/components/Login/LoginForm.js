import React from "react";
import { Link } from "react-router-dom";
import useForm from "../../Hooks/useForm";
import { UserContext } from "../../UserContext";
import Button from "../Forms/Button";
import Input from "../Forms/Input";
import Error from "../Helper/Error";
import styles from "./LoginForm.module.css";

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
    <section className="animeLeft">
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...userName} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Button disabled={loading}>
          {loading ? "Carregando..." : "Entrar"}
        </Button>
        <Error error={error} />
      </form>
      <Link className={styles.lost} to="/login/lost-password">
        Perdeu a senha?
      </Link>
      <div className={styles.register}>
        <h2 className={styles.subtitle}> Cadastro</h2>
        <p>Aioda não possui conta? Cadastre-se no site</p>
        <Link className={styles.buttonCreate} to="/login/register">
          Cadastre-se
        </Link>
      </div>
      <Link to="/login/create">Cadastro</Link>
    </section>
  );
};

export default LoginForm;
