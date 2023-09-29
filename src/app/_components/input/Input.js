import styles from './Input.module.css'

const Input = ({ type, placeHolder, onChange, margin }) => {

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
    <input className={styles.input} style={inputStyle} type={type} placeholder={placeHolder} onChange={onChange} />
  )
};

export default Input;
