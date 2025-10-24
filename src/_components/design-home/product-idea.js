"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import MaskButton from "../button/MaskButton";

const GenericIdeaSection = ({
  title = "Got a product idea?",
  buttonText = "Talk to Our Expert",
  imageSrc, // required image
}) => {
  return (
    <Box
      sx={{
        bgcolor: "#000",
        position: "relative",
      }}
    >
      <Box
        sx={{
          zIndex: 3,
          maxWidth: "1440px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          m: "auto",
          padding: {
            xs: "32px 20px",
            md: "40px",
            lg: "80px",
          },
        }}
      >
        <Box
          sx={{
            backgroundImage: { xs: "none", sm: `url(${imageSrc?.src})` },
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right",
            width: "100%",
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            borderRadius: "32px",
            p: { xs: "32px 24px", md: "80px 64px" },
            justifyContent: "space-between",
            border: "1px solid #434245 ",
          }}
        >
          {/* Image for small screens */}
          <Box
            sx={{
              display: { xs: "block", sm: "none" },
              width: { xs: "338px", sm: "488px" },
              height: { xs: "200px", sm: "300px" },
            }}
          >
            {imageSrc && (
              <Image
                src={imageSrc}
                alt="section image"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            )}
          </Box>

          {/* Text and button */}
          <Box sx={{ width: "100%", textAlign: "left" }}>
            <Typography
              variant="h1"
              sx={{
                width: "100%",
                maxWidth: { xs: "320px", md: "400px", lg: "640px" },
                fontSize: { xs: "24px", md: "30px", lg: "40px" },
                textTransform: "capitalize",
                fontWeight: 500,
                color: "var(--text-main)",
                mb: { xs: "16px", md: "24px" },
                fontFamily: "Avenir5 !important",
              }}
            >
              {title}
            </Typography>
            <MaskButton text={buttonText} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default GenericIdeaSection;
