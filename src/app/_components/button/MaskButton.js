import { Box } from "@mui/material";
import "./MaskButton.css";

const MaskButton = ({ text, onClick }) => {
  return (
    <Box className="button-container-2" onClick={onClick}>
      <span class="mas">{text}</span>
      <button type="button" name="Hover">
        {text}
      </button>
    </Box>
  );
};

export default MaskButton;
