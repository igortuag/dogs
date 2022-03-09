import React from "react";

import styles from "./Input.module.css";

const Input = ({ label, type, name }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input type={type} className={styles.button} name={name} id={name} />;
    </div>
  );
};

export default Input;
