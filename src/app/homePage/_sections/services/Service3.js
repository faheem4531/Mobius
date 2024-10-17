import { Box, Typography } from "@mui/material";
import Image from "next/image";
import GifImage from "@/app/_assets/image.png";
import Line from "@/app/_assets/svg/curve-line.svg";
import Button from "@/app/_components/button/Button";

const Service3 = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: { md: "row", sm: "column", xs: "column" },
        alignItems: "center",
        padding: { lg: "140px 70px", sm: "170px 20px", xs: "140px 20px" },
        columnGap: { lg: "180px", md: "80px" },
        backgroundImage: "url('/bg-services.png')",
        backgroundSize: { md: "100% 100%", sm: "cover", xs: "cover" },
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Box
        sx={{
          width: { sm: "450px", xs: "100%" },
          height: "auto",
          minWidth: { lg: "450px", md: "400px", sm: "", xs: "" },
        }}
      >
        <video
          src="/video/Imi-hairs-cgi.webm"
          alt="Imi Hairs CGI"
          style={{
            width: "100%",
            height: "100%",
          }}
          autoPlay
          loop
          muted
        />
      </Box>
      <Box
        sx={{
          maxWidth: { lg: "680px", md: "450px", sm: "450px" },
          mt: { md: "0", sm: "50px", xs: "50px" },
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
            gap: { lg: "20px", md: "16px", sm: "20px", xs: "15px" },
            m: { sm: "50px 0 50px -40px", xs: "30px 0 50px" },
          }}
        >
          <Box
            sx={{
              display: { sm: "block", xs: "none" },
            }}
          >
            <Image src={Line} alt="image" />
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: { lg: "20px", md: "16px", sm: "18px", xs: "16px" },
                fontWeight: 300,
              }}
            >
              Give us the idea for the CGI campaign you want to run and get free
              storyboard from us
            </Typography>
            <Typography
              sx={{
                fontSize: { lg: "20px", md: "16px", sm: "18px", xs: "16px" },
                fontWeight: 300,
                m: { sm: "90px 0", xs: "30px 0" },
              }}
            >
              We will get the real footage done on site or use stock video as
              preference
            </Typography>
            <Typography
              sx={{
                fontSize: { lg: "20px", md: "16px", sm: "18px", xs: "16px" },
                fontWeight: 300,
              }}
            >
              Composite the 3d elements with the real footage matching the
              lighting and camera angles
            </Typography>
            <Typography
              sx={{
                fontSize: { lg: "20px", md: "16px", sm: "18px", xs: "16px" },
                fontWeight: 300,
                mt: { sm: "110px", xs: "30px" },
              }}
            >
              Viral CGI video for social media marketing for exponential reach
            </Typography>
          </Box>
        </Box>
        <Button text={"Get free Storyboard"} />
      </Box>
    </Box>
  );
};

export default Service3;
