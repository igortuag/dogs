import React from "react";

const types = {
  email: {
    regex:
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(( {2}[a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Preencha um email válido",
  },
};

const useForm = (type) => {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState("");

  function validate(value) {
    if (type === false) return true;

    if (value.length === 0) {
      setError("Preencha um valor.");
      return false;
    } else if (types[type] && types[type].regex.test(value)) {
      setError(types[type].message);
    } else {
      setError("");
      return true;
    }
  }

  function onChange({ target }) {
    setValue(target.value);
  }

  return {
    value,
    setValue,
    onChange,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};

export default useForm;
