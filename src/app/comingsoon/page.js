import { Box } from "@mui/material";
import NavBar from "../_components/navBar/NavBar";
import Hero from "./_sections/comingSoon";

export default function comingSoonpage() {
  return (
    <>
      <Box sx={{ maxWidth: "1440px", width: "100%", m: "auto" }}>
        <NavBar />
      </Box>
      <Hero />
    </>
  );
}
