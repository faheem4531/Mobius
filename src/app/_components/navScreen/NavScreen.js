"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import leftSide from "@/app/_assets/png/Trans.png";
// import ArrowBackIos from "@mui/icons-material/ArrowBackIos";
// import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";
// import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import rightSide from "@/app/_assets/png/Solid.png";
import Link from "next/link";
import NavBar from "../navBar/NavBar";
import { useState } from "react";
import HomePage from "@/app/homePage/page";
import { useRouter } from "next/navigation";
export default function NavScreen() {
  const [showHomePage, setShowHomePage] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    setShowHomePage(true);
  };
  if (showHomePage) {
    return <HomePage />;
  }
  return (
    <Box sx={{ bgcolor: "#000" }}>
      <Box
        sx={{
          maxWidth: "1440px",
          width: "100%",

          m: "auto",
        }}
      >
        {/* nav */}
        <NavBar />
        {/* <HomePage/> */}

        {/* hero */}
        <Box
          sx={{
            width: "100%",
            p: { xs: " 16px ", md: "16px 80px" },
            bgcolor: "#000",
            m: "auto",
            display: "flex",
            alignItems: "center",
            height: { xs: "60vh", sm: "100%" },
            justifyContent: { xs: "center" },
            overflow: "hidden",
            // height: "100%",
          }}
        >
          {/* sm screeen.... ================--------------------------------------- */}

          <Box
            sx={{
              display: { xs: "none", sm: "block" },

              // bgcolor: "#ccc",
              // overflow: "hidden",
              // height: "1700px",
              position: "relative",
              width: "100%",
              maxWidth: { xs: "300px", sm: "500px", md: "800px" },
              // height: "auto",
              cursor: "pointer",
              "&:hover .staticImg": { opacity: 0 }, // hide image on hover
              "&:hover .hoverVid": { opacity: 1 }, // show video on hover
              "&:hover .hoverText": { transform: "translateX(30px)" }, // text thoda right slide
              "&:hover .hoverArrow": { opacity: 1, transform: "translateX(0)" },
            }}
          >
            {/* Default Image */}
            <Image
              src={leftSide}
              alt="Product design"
              className="staticImg"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                transition: "opacity 0.4s ease-in-out",
              }}
            />

            {/* Hover Video */}
            <Box
              component="video"
              src="/video/Product design _ left.webm"
              autoPlay
              loop
              muted
              onClick={() => router.push("/design")}
              className="hoverVid"
              sx={{
                position: "absolute",
                // top: 0,
                top: { sm: -25, md: -35, lg: -42 },
                // mt: "-1%",
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "contain",
                opacity: 0,
                transition: "opacity 0.4s ease-in-out",
              }}
            />

            {/* Title */}
            <Typography
              className="hoverText"
              sx={{
                // bgcolor: "#ccc",
                fontSize: { xs: 20, sm: 24, md: 34, lg: 48 },
                color: "#fff",
                textAlign: "center",
                textTransform: "uppercase",
                fontFamily: "Poppins, sans-serif !important",
                mt: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: { sm: 1, md: 2 },
                transition: "transform 0.3s ease", // text move
              }}
            >
              <ArrowBackIcon
                className="hoverArrow"
                sx={{
                  opacity: 0,
                  transform: "translateX(-10px)",
                  transition: "all 0.3s ease",
                  fontSize: { xs: 20, sm: 24, md: 34, lg: 48 },
                }}
              />
              Product Design
            </Typography>
          </Box>

          <Box
            onClick={handleClick}
            sx={{
              display: { xs: "none", sm: "block" },
              // bgcolor: "#ccc",
              // overflow: "hidden",
              // height: "1700px",
              position: "relative",
              maxWidth: { xs: "300px", sm: "500px", md: "800px" },
              width: "100%",
              height: "auto",
              cursor: "pointer",
              "&:hover .staticImg": { opacity: 0 },
              "&:hover .hoverVid": { opacity: 1 },
              "&:hover .hoverText": { transform: "translateX(-30px)" }, // text thoda left slide
              "&:hover .hoverArrow": { opacity: 1, transform: "translateX(0)" },
            }}
          >
            {/* Default Image */}
            <Image
              src={rightSide}
              alt="Product design"
              className="staticImg"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                transition: "opacity 0.4s ease-in-out",
              }}
            />

            {/* Hover Video */}
            <Box
              component="video"
              src="/video/3d Animation (2).webm"
              autoPlay
              loop
              muted
              className="hoverVid"
              sx={{
                // top: 0,
                position: "absolute",
                top: { sm: -25, md: -35, lg: -42 },
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "contain",
                opacity: 0,
                transition: "opacity 0.4s ease-in-out",
              }}
            />

            {/* Title */}
            <Typography
              className="hoverText"
              sx={{
                // bgcolor: "#ccc",
                fontSize: { xs: 20, sm: 24, md: 34, lg: 48 },
                color: "#fff",
                textAlign: "center",
                textTransform: "uppercase",
                fontFamily: "Poppins, sans-serif !important",
                mt: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: { sm: 1, md: 2 },
                transition: "transform 0.3s ease", // text move
              }}
            >
              3D Visual Design
              <ArrowForwardIcon
                className="hoverArrow"
                sx={{
                  opacity: 0,
                  transform: "translateX(10px)",
                  transition: "all 0.3s ease",
                  fontSize: { xs: 20, sm: 24, md: 34, lg: 48 },
                }}
              />
            </Typography>
          </Box>

          {/* mobile screen=------------------------------------------------------- */}
          <Box
            sx={{
              // bgcolor: "#ccc",
              display: { xs: "block", sm: "none" },
              width: "100%",
              maxWidth: "500px",
            }}
          >
            <Link href="/design">
              <Image
                src={leftSide}
                alt="logo"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",

                  fontFamily: "Poppins, sans-serif !important",
                }}
              />
            </Link>
            <Typography
              sx={{
                fontSize: "18px",
                // bgcolor: "#49494990",
                pr: "3px",
                width: "100%",
                color: "#fff",
                textAlign: "center",
                textTransform: "uppercase",
              }}
            >
              Product Design
            </Typography>
          </Box>

          <Box
            onClick={handleClick}
            sx={{
              cursor: "pointer",
              display: { xs: "block", sm: "none" },
              width: "100%",
              maxWidth: "500px",
            }}
          >
            <Image
              src={rightSide}
              alt="logo"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />

            <Typography
              sx={{
                fontSize: "18px",
                // bgcolor: "#49494990",
                width: "100%",
                color: "#fff",
                textAlign: "center",
                textTransform: "uppercase",
                fontFamily: "Poppins, sans-serif !important",
              }}
            >
              3D Visual Design
            </Typography>
          </Box>

          {/* <Box
            className="hoverVid"
            sx={{
              display: { xs: "none", sm: "none" },

              maxWidth: { lg: "630px", sm: "450px", sm: "550px" },
              minWidth: { lg: "550px", md: "420px", sm: "250px", xs: "100%" },
              height: "auto",
            }}
          >
            <Link href="/design">
              <video
                src="/video/Product design _ left.webm"
                alt="3d video consumer electronics"
                style={{
                  width: "100%",
                  height: "100%",
                }}
                autoPlay
                loop
                muted
              />
            </Link>
            <Typography
              // variant="h2"
              sx={{
                fontSize: { sm: 28, md: 38, lg: 48 },
                fontWeight: "400",
                textTransform: "uppercase",

                // bgcolor: "#4a4949ff",

                width: "100%",
                color: "#fff",
                textAlign: "center",
                // mt: "-10px",
                mx: "auto",
              }}
            >
              Product Design
            </Typography>
          </Box> */}

          {/* <Box
            sx={{
              display: { xs: "none", sm: "block" },
              maxWidth: { lg: "630px", sm: "450px", sm: "550px" },
              minWidth: { lg: "550px", md: "420px", sm: "250px", xs: "100%" },
              height: "auto",
            }}
          >
            <Box sx={{ cursor: "pointer" }} onClick={handleClick}>
              <video
                src="/video/3d Animation (2).webm"
                alt="3d video consumer electronics"
                style={{
                  width: "100%",
                  height: "100%",
                }}
                autoPlay
                loop
                muted
              />
            </Box>
            <Typography
              sx={{
                fontSize: { sm: 28, md: 38, lg: 48 },
                fontWeight: "400",
                textTransform: "uppercase",

                // bgcolor: "#4a4949ff",
                width: "100%",
                color: "#fff",
                textAlign: "center",
              }}
            >
              3D Visual Design
            </Typography>
          </Box> */}
        </Box>
      </Box>
    </Box>
  );
}
