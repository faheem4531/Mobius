"use client";

import styles from "./Button.module.css";

const Button = ({ text, onClick, margin, color, padding, type }) => {
  const btnStyle = {
    backgroundColor: "var(--bg-lite-7)",
    color: color || "var(--text-dark)",
    borderRadius: "4px",
    fontSize: "18px",
    border: "none",
    width: "265px",
    height: "45px",
    margin: margin || "0px",
  };

  return (
    <button style={btnStyle} type={type} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
