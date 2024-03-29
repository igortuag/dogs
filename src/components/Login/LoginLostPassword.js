import React from "react";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../Hooks/useForm";
import useFetch from "../../Hooks/useFetch";
import { PASSWORD_LOST } from "../../api";
import Error from "../Helper/Error";
import Head from "../Helper/Head";

const LoginLostPassword = () => {
  const login = useForm("");
  const { data, loading, error, request } = useFetch();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace("lost-password", "reset-password"),
      });
      request(url, options);
    }
  };

  return (
    <section className="animeLeft">
      <Head title="Lost your password?" />
      <h1 className="title">Lost your password?</h1>
      {data ? (
        <p style={{ color: "#4c1" }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email / Usuário" type="text" name="email" {...login} />
          {loading ? (
            <Button disabled>Sending...</Button>
          ) : (
            <Button type="submit">Send email</Button>
          )}
        </form>
      )}
      <Error error={error} />
    </section>
  );
};

export default LoginLostPassword;
