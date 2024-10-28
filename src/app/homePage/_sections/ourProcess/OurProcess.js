import { Box, Typography } from "@mui/material";
import Image from "next/image";

import Step1 from "@/app/_assets/png/step1-icon.png";
import Line from "@/app/_assets/svg/process-line.svg";
import Consultation from "@/app/_assets/svg/process/Consultation.svg";
import Modal from "@/app/_assets/svg/process/3d-model.svg";
import Storyboarding from "@/app/_assets/svg/process/Storyboarding.svg";
import Rendering from "@/app/_assets/svg/process/rendering.svg";
import Animation from "@/app/_assets/svg/process/animation.gif";

const OurProcess = () => {
  const processStepData = [
    {
      img: Consultation,
      title: "Consultation",
      content:
        "We begin by understanding your project goals and creating a detailed roadmap, complete with storyboards to align with your vision.",
      mt: "0",
    },
    {
      img: Storyboarding,
      title: "Story boarding",
      content:
        "Here, our efforts officially jump in, and we collaborate on conceiving creative ideas and approaches to make your project unique and impactful.",
      count: "02",
      mt: "110px",
    },
    {
      img: Modal,
      title: "3D Modeling",
      content:
        "Our professional and dedicated team builds the 3D models and sets the stage with backgrounds and other elements to tell your product’s story.",
      mt: "-50px",
    },
    {
      img: Animation,
      title: "Animation",
      content:
        "It’s time to production by using advanced animation techniques, we bring your scene to life, and make sure every detail is captured.",
      count: "04",
      mt: "20px",
    },
    {
      img: Rendering,
      title: "Rendering",
      content:
        "The final video is crafted with precision, combining animation, lighting, and textures. We render out a 4k video to take your product to new heights.",
      count: "05",
      mt: "220px",
    },
  ];

  return (
    <Box
      sx={{
        backgroundImage: "url('/process.png')",
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
          xs: "190px 20px",
        },
        m: { sm: "0", xs: "-70px 0" },
      }}
    >
      <Typography
        sx={{
          fontSize: { lg: "20px", sm: "18px", xs: "16px" },
          fontWeight: 300,
        }}
      >
        Our Easy Peasy Process
      </Typography>
      <Typography
        sx={{
          fontSize: { lg: "38px", md: "32px", xs: "30px" },
          fontWeight: 800,
          color: "#FFFFFF",
          lineHeight: { sm: "45.6px", xs: "120%" },
          maxWidth: "1270px",
          m: "25px 0",
          textAlign: "center",
        }}
      >
        Discover how we turn your product or even just an idea from you into
        appealing and meaningful animations.
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { md: "row", sm: "column", xs: "column" },
          alignItems: "center",
          m: { lg: "0 0 50px", md: "0 30px 0", sm: "50px 0", xs: "20px 0" },
          gap: { lg: "80px", sm: "40px", xs: "50px" },
          position: "relative",
        }}
      >
        {processStepData.map((data, index) => (
          <ProcessStep
            key={index}
            img={data.img}
            title={data.title}
            content={data.content}
            count={data.count}
            mt={data.mt}
          />
        ))}
        <Box
          sx={{
            position: "absolute",
            left: "50%",
            top: "40%",
            transform: "translate(-50%, -40%)",
            display: { xs: "none", lg: "block", sm: "none" },
          }}
        >
          <Image src={Line} alt="line" />
        </Box>
      </Box>
    </Box>
  );
};

export default OurProcess;

const ProcessStep = ({ mt, img, title, content, count }) => {
  return (
    <Box
      sx={{
        maxWidth: { lg: "210px", md: "150px", sm: "300px", xs: "280px" },
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        mt: { md: mt, sm: "0", xs: "0" },
        position: "relative",
        zIndex: 1,
      }}
    >
      <Box
        sx={{
          width: { lg: "160px", md: "120px", sm: "160px", xs: "160px" },
          height: { lg: "160px", md: "120px", sm: "160px", xs: "160px" },
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
          <Box
            sx={{
              width: "80px",
            }}
          >
            <Image
              src={img}
              alt="icon"
              style={{ width: "100%", height: "100%" }}
            />
          </Box>
        </Box>
        {count && (
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
              display: { md: "flex", sm: "none", xs: "none" },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {count}
          </Box>
        )}
      </Box>
      <Typography
        sx={{ fontSize: "20px", fontWeight: 500, m: "12px 0", color: "#fff" }}
      >
        {title}
      </Typography>
      <Typography fontWeight={500}>{content}</Typography>
    </Box>
  );
};
