import { Box } from "@mui/material";

const Dividers = () => {
  return (
    <Box
      sx={{
        m: "5px auto",
        maxWidth: { sm: "200px", xs: "90px" },
        width: "100%",
        height: { sm: "0.5px", xs: "0.1px" },
        maxHeight: { sm: "0.5px", xs: "0.1px" },
        bgcolor: "#D9D9D9",
      }}
    />
  );
};
export default Dividers;
