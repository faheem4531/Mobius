"use client";

import { Box, Grid2, Typography } from "@mui/material";
import Image from "next/image";
import camera from "@/_assets/png/camera2.png";
import workrow1 from "@/_assets/png/workrow1.png";
import workrow2 from "@/_assets/png/workrow2.png";
import { useEffect, useState } from "react";
import MaskButton from "../button/MaskButton";

const ProductIdea = () => {
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
            backgroundImage: { xs: "none", sm: `url(${camera.src})` },
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right",
            width: "100%",
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            // bgcolor: "#9999ff",
            alignItems: "center",
            borderRadius: "32px",

            p: { xs: "32px 24px", md: "80px 64px" },
            justifyContent: "space-between",
            border: "1px solid #434245 ",
          }}
        >
          <Box
            sx={{
              display: { xs: "block", sm: "none" },
              width: { xs: "338px", sm: "488px" },
              height: { xs: "200px", sm: "300px" },
              // aspectRatio: "1/1 ",
            }}
          >
            <Image
              src={camera}
              alt="camera"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </Box>
          <Box sx={{}}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "24px", md: "30px", lg: "40px" },
                textTransform: "capitalize",
                fontWeight: 500,
                color: "var(--text-main)",
                mb: { xs: "16px", md: "24px" },
                fontFamily: "Avenir5 !important",
              }}
            >
              Got a product idea?
            </Typography>
            <MaskButton text="Talk to Our Expert" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductIdea;
