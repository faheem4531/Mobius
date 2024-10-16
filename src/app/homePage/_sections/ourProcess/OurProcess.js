import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Step1 from "@/app/_assets/png/step1-icon.png";
import Line from "@/app/_assets/svg/process-line.svg";

const OurProcess = () => {
  return (
    <Box
      sx={{
        backgroundImage: "url('/bg-services.png')",
        backgroundSize: { md: "100% 100%", sm: "cover", xs: "cover" },
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: {
          lg: "100px 70px",
          sm: "170px 20px",
          xs: "140px 20px",
        },
      }}
    >
      <Typography
        sx={{
          fontSize: { lg: "20px", sm: "18px", xs: "16px" },
          fontWeight: 300,
        }}
      >
        Our Services
      </Typography>
      <Typography
        sx={{
          fontSize: { lg: "38px", md: "32px", xs: "32px" },
          fontWeight: 800,
          color: "#FFFFFF",
          lineHeight: "45.6px",
          m: "20px 0",
        }}
      >
        Boost Engagement With Viral CGI Videos
      </Typography>
      <Box
        sx={{
          display: "flex",
          m: "0px 0 120px",
          gap: "80px",
          position: "relative",
        }}
      >
        <ProcessStep />
        <ProcessStep mt="170px" />
        <ProcessStep mt="-50px" />
        <ProcessStep mt="100px" />
        <ProcessStep mt="200px" />
        <Box
          sx={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Image src={Line} alt="line" />
        </Box>
      </Box>
    </Box>
  );
};

export default OurProcess;

const ProcessStep = ({ mt }) => {
  return (
    <Box
      sx={{
        maxWidth: "210px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        mt: mt,
        position: "relative",
        zIndex: 1,
      }}
    >
      <Box
        sx={{
          width: "160px",
          height: "160px",
          borderRadius: "50%",
          border: "1px solid #2E2E2E",
          outline: "1px solid #5F5F5F",
          outlineOffset: "8px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Box
          sx={{
            bgcolor: "#000",
            width: "90%",
            height: "90%",
            borderRadius: "50%",
            outline: "1px solid #5F5F5F",
            outlineOffset: "3px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image src={Step1} alt="icon" />
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "-15px",
            left: "0",
            fontSize: "12px",
            fontWeight: 300,
            color: "#fff",
            bgcolor: "#716E69",
            borderRadius: "50%",
            width: "37px",
            height: "37px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          02
        </Box>
      </Box>
      <Typography
        sx={{ fontSize: "20px", fontWeight: 500, m: "12px 0", color: "#fff" }}
      >
        Consultation
      </Typography>
      <Typography fontWeight={500}>
        We begin by understanding your project goals and creating a detailed
        roadmap, complete with storyboards to align with your vision.
      </Typography>
    </Box>
  );
};
