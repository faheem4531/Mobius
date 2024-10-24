import { Box, Button as MUIButton } from "@mui/material";
import "./MaskButton.css";

const MaskButton = ({ text, onClick, width = "265px" }) => {
  return (
    <Box sx={{ bgcolor: "" }} className="button-container-2">
      <span class="mas">{text}</span>
      <button type="button" name="Hover">
        {text}
      </button>
    </Box>
  );
};

export default MaskButton;
