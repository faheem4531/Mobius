import styles from './Input.module.css'

const Input = ({ type, placeHolder, onChange, margin, name, value }) => {

  const inputStyle = {
    backgroundColor: 'transparent',
    color: 'var(--text-main)',
    borderRadius: '4px',
    padding: '15px',
    fontSize: '12px',
    border: "var(--border-lite-2)",
    margin: margin || "0px",
    width: "100%"
  }

  return (
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeHolder}
      onChange={onChange}
      style={inputStyle}
      className={styles.input}
    />
  )
};

export default Input;
