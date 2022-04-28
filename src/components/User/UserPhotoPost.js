import React from "react";
import styles from "./UserPhotoPost.module.css";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../Hooks/useForm";
import Error from "../Helper/Error";
import { useNavigate } from "react-router-dom";
import Head from "../Helper/Head";
import { useDispatch, useSelector } from "react-redux";
import photoPost from "../../store/photoPost";

const UserPhotoPost = () => {
  const nome = useForm();
  const peso = useForm("number");
  const idade = useForm("number");
  const [img, setImg] = React.useState("");
  const dispatch = useDispatch();
  const { data, error, loading } = useSelector((state) => state.photoPost);
  const { token } = useSelector((state) => state.token);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (data) {
      navigate("/user");
    }
  }, [data, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("img", img.raw);
    formData.append("nome", nome.value);
    formData.append("peso", peso.value);
    formData.append("idade", idade.value);

    dispatch(
      photoPost({
        formData,
        token,
      })
    );
  };

  const handleImgChange = ({ target }) => {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  };

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <Head title="Poste sua foto" />
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="nome" {...nome} />
        <Input label="Peso" type="number" name="peso" {...peso} />
        <Input label="Idade" type="number" name="idade" {...idade} />
        <input
          className={styles.file}
          type="file"
          name="img"
          id="img"
          onChange={handleImgChange}
        />
        {loading ? (
          <Button disabled>Enviando...</Button>
        ) : (
          <Button>Enviar</Button>
        )}
        <Error error={error} />
      </form>
      <div>
        {img?.preview && (
          <div
            src={img.preview}
            alt="Preview"
            className={styles.preview}
            style={{ backgroundImage: `url(${img.preview})` }}
          />
        )}
      </div>
    </section>
  );
};

export default UserPhotoPost;
