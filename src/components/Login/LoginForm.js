import React from "react";
import { Link } from "react-router-dom";
import useForm from "../../Hooks/useForm";
import Button from "../Forms/Button";
import Input from "../Forms/Input";
import Error from "../Helper/Error";
import styles from "./LoginForm.module.css";
import stylesBtn from "../Forms/Button.module.css";
import Head from "../Helper/Head";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../store/user";

const LoginForm = () => {
  const userName = useForm();
  const password = useForm();

  const { token, user } = useSelector((state) => state);
  const loading = token.loading || user.loading;
  const error = token.error || user.error;
  const dispatch = useDispatch();

  async function handleSubmit(e) {
    e.preventDefault();
    if (userName.validate() && password.validate()) {
      dispatch(
        userLogin({ username: userName.value, password: password.value })
      );
    }
  }

  return (
    <section className="animeLeft">
      <Head title="Login" />
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...userName} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Button disabled={loading}>
          {loading ? "Carregando..." : "Entrar"}
        </Button>
        <Error error={error && "Dados incorretos."} />
      </form>
      <Link className={styles.lost} to="/login/lost-password">
        Perdeu a senha?
      </Link>
      <div className={styles.register}>
        <h2 className={styles.subtitle}> Sing Up</h2>
        <p>Don't have an account yet? Register on the website</p>
        <Link className={styles.buttonCreate} to="/login/lost">
          Register
        </Link>
      </div>
      <Link to="/login/register" className={stylesBtn.button}>
        Register
      </Link>
    </section>
  );
};

export default LoginForm;
