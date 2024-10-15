import { Box, Typography } from "@mui/material";
import Image from "next/image";
import GifImage from "@/app/_assets/gif/3d-video-consumer-electronics.webp";
import Button from "@/app/_components/button/Button";

const Service2 = () => {
  return (
    <Box
      sx={{
        display: "flex",
        position: "relative",
        justifyContent: "center",
        flexDirection: { md: "row-reverse", sm: "column", xs: "column" },
        alignItems: "center",
        padding: {
          lg: "100px 0 100px 70px",
          sm: "100px 20px",
          xs: "90px 20px",
        },
        columnGap: { lg: "50px", md: "20px" },
        overflow: "hidden",
      }}
    >
      <video
        autoPlay
        loop
        muted
        alt="explosion 3d animation"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: -1,
          opacity: 0.5,
        }}
      >
        <source src="video/explosion-3d-animation.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <Box
        sx={{
          maxWidth: { lg: "630px", sm: "450px", sm: "550px" },
          minWidth: { lg: "550px", md: "420px", sm: "550px", xs: "100%" },
          height: "auto",
        }}
      >
        <Image
          src={GifImage}
          alt="3d video consumer electronics"
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </Box>
      <Box
        sx={{
          maxWidth: { lg: "680px", md: "450px", sm: "550px" },
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
            m: "20px 0 10px",
          }}
        >
          HCurate the perfect 3d videos
        </Typography>
        <Typography
          sx={{
            fontSize: { sm: "22px", xs: "20px" },
            fontWeight: 600,
            color: "#FFFFFF",
            mb: "20px",
          }}
        >
          Brand focused customized product animations
        </Typography>
        <Box sx={{ width: "100px", bgcolor: "#A7A4AD", height: "1px" }}></Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { lg: "25px", md: "16px", sm: "20px", xs: "15px" },
            m: "20px 0 30px",
          }}
        >
          <Typography
            sx={{
              fontSize: { lg: "20px", md: "16px", sm: "18px", xs: "16px" },
              fontWeight: 300,
            }}
          >
            Depicting your brand identity with the product animation is the key
            to a successful campaign. We offer a wide range of animation styles
            for you to choose from.
          </Typography>
          <Box
            sx={{
              fontSize: { lg: "20px", md: "16px", sm: "18px", xs: "16px" },
              fontWeight: 300,
            }}
          >
            <Typography
              sx={{
                fontSize: { lg: "20px", md: "16px", sm: "18px", xs: "16px" },
                fontWeight: 700,
                display: "inline-block",
              }}
            >
              - Product Reveal:
            </Typography>{" "}
            Build up the hype for the viewers with product silhouette building
            up to the product reveal
          </Box>
          <Box
            sx={{
              fontSize: { lg: "20px", sm: "18px", xs: "16px" },
              fontWeight: 300,
            }}
          >
            <Typography
              sx={{
                fontSize: { lg: "20px", sm: "18px", xs: "16px" },
                fontWeight: 700,
                display: "inline-block",
              }}
            >
              - Hyper-Realistic:
            </Typography>{" "}
            Cover intricate details and explosion shots to show modularity of
            the product
          </Box>
          <Box
            sx={{
              fontSize: { lg: "20px", sm: "18px", xs: "16px" },
              fontWeight: 300,
            }}
          >
            <Typography
              sx={{
                fontSize: { lg: "20px", sm: "18px", xs: "16px" },
                fontWeight: 700,
                display: "inline-block",
              }}
            >
              - Particle Animations:
            </Typography>{" "}
            Simulate particles to showcase building up a product or even a city
            in an intricate way
          </Box>
          <Box
            sx={{
              fontSize: { lg: "20px", sm: "18px", xs: "16px" },
              fontWeight: 300,
            }}
          >
            <Typography
              sx={{
                fontSize: { lg: "20px", sm: "18px", xs: "16px" },
                fontWeight: 700,
                display: "inline-block",
              }}
            >
              - Explainer Animations:
            </Typography>{" "}
            Explain every part with engaging call outs for educational or tech
            products
          </Box>
          <Box
            sx={{
              fontSize: { lg: "20px", sm: "18px", xs: "16px" },
              fontWeight: 300,
            }}
          >
            <Typography
              sx={{
                fontSize: { lg: "20px", sm: "18px", xs: "16px" },
                fontWeight: 700,
                display: "inline-block",
              }}
            >
              - Character Animation:
            </Typography>{" "}
            Animate a character or brand mascot that resonates with brand
            positioning
          </Box>
          <Typography
            sx={{
              fontSize: { lg: "20px", md: "16px", sm: "18px", xs: "16px" },
              fontWeight: 300,
            }}
          >
            Discuss your product concept with our animation expert to identify
            the best suited animation style
          </Typography>
        </Box>
        <Button text={"Hire the best"} />
      </Box>
    </Box>
  );
};

export default Service2;
