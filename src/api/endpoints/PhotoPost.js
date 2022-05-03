import React from "react";

const PhotoPost = () => {
  const [token, setToken] = React.useState("");
  const [nome, setNome] = React.useState("");
  const [peso, setPeso] = React.useState("");
  const [idade, setIdade] = React.useState("");
  const [img, setImg] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append("nome", nome);
    formData.append("peso", peso);
    formData.append("idade", idade);
    formData.append("img", img);

    fetch("https://dogsapi.origamid.dev/json/api/photo", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
      body: formData,
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        return json;
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="token"
        type="text"
        value={token}
        onChange={({ target }) => setToken(target.value)}
      />
      <input
        placeholder="nome"
        type="text"
        value={nome}
        onChange={({ target }) => setNome(target.value)}
      />
      <input
        placeholder="peso"
        type="text"
        value={peso}
        onChange={({ target }) => setPeso(target.value)}
      />
      <input
        placeholder="age"
        type="text"
        value={idade}
        onChange={({ target }) => setIdade(target.value)}
      />
      <input type="file" onChange={({ target }) => setImg(target.files[0])} />
      <button>Send</button>
    </form>
  );
};

export default PhotoPost;
