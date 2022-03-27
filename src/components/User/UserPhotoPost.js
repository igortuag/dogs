import React from "react";
import styles from "./UserPhotoPost.module.css";
import Input from "../Forms/Input";
import Button from "../Forms/Button";

const UserPhotoPost = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleImgChange = (e) => {
    const img = e.target.files[0];
  };

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="nome" />
        <Input label="Peso" type="text" name="peso" />
        <Input label="Idade" type="text" name="idade" />
        <input type="file" name="img" id="img" onChange={handleImgChange} />
        <Button>Enviar</Button>
      </form>
    </section>
  );
};

export default UserPhotoPost;
