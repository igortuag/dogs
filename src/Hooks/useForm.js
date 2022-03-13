import React from "react";

const useForm = () => {
  const [value, setValue] = React.useState("");

  return {
    value,
    setValue,
  };
};

export default useForm;
