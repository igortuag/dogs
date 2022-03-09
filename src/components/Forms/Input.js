import React from "react";

import styles from "./Input.module.css";

const Input = ({ label }) => {
  return (
    <div>
      <label htmlFor="">{label}</label>
      <input className={styles.button} />;
    </div>
  );
};

export default Input;
