import { Button as MUIButton } from "@mui/material";

const Button = ({ text, onClick, margin, color, type, width = "265px" }) => {
  return (
    <MUIButton
      onClick={onClick}
      type={type}
      sx={{
        backgroundColor: "var(--bg-lite-7)",
        color: color || "var(--text-dark)",
        fontFamily: "Avenir3 !important",
        fontSize: { lg: "18px", sm: "16px", xs: "16px" },
        border: "none",
        width: width,
        height: "45px",
        margin: margin || "0px",
        "&:hover": {
          backgroundColor: "#4B4B4B",
        },
      }}
    >
      {text}
    </MUIButton>
  );
};

export default Button;
