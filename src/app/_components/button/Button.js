import styles from './Button.module.css'

const Button = ({ text, onClick, margin, color }) => {

  const btnStyle = {
    backgroundColor: 'var(--bg-lite-1)',
    color: color || 'var(--text-main)',
    borderRadius: '4px',
    padding: '5px 20px',
    fontSize: '11px',
    border: "none",
    margin: margin || "0px"
  }

  return (
    <button style={btnStyle} onClick={onClick}>{text}</button>
  )
};

export default Button;
