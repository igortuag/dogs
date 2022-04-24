import React from "react";
import { useDispatch } from "react-redux";
import { USER_POST } from "../../api";
import useFetch from "../../Hooks/useFetch.js";
import useForm from "../../Hooks/useForm";
import { userLogin } from "../../store/user";
import Button from "../Forms/Button";
import Input from "../Forms/Input";
import Error from "../Helper/Error";
import Head from "../Helper/Head";

const LoginCreate = () => {
  const userName = useForm();
  const email = useForm("email");
  const password = useForm("password");
  const dispatch = useDispatch();
  const { loading, error, request } = useFetch();

  async function handleSubmit(e) {
    e.preventDefault();
    const { url, options } = USER_POST({
      username: userName.value,
      email: email.value,
      password: password.value,
    });

    const { response } = await request(url, options);
    if (response.ok)
      dispatch(
        userLogin({ userName: userName.value, password: password.value })
      );
  }

  return (
    <section className="animeLeft">
      <Head title="Crie sua conta" />
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...userName} />
        <Input label="E-mail" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />

        {loading ? (
          <Button disabled>Cadastrando...</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}

        <Error error={error} />
      </form>
    </section>
  );
};

export default LoginCreate;
