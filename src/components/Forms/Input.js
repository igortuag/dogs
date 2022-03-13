import React from "react";

import styles from "./Input.module.css";

const Input = ({ label, type, name, value, onChange, error }) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        type={type}
        className={styles.input}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Input;
