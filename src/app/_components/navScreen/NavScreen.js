"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import leftSide from "@/app/_assets/png/Trans.png";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import rightSide from "@/app/_assets/png/Solid.png";
import rightArrow from "@/app/_assets/png/Arrow.png";
import Arrowleft from "@/app/_assets/png/Arrow left.png";

import NavBar from "../navBar/NavBar";
import { useState } from "react";
import HomePage from "@/app/homePage/page";
import { useRouter } from "next/navigation";
import Link from "next/link";
import zIndex from "@mui/material/styles/zIndex";
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
    <Box sx={{ bgcolor: "#000000" }}>
      <Box
        sx={{
          maxWidth: "1440px",
          width: "100%",
          m: "auto",
        }}
      >
        {/* nav */}
        <NavBar />

        {/* hero */}
        <Box
          sx={{
            maxWidth: "1440px",
            width: "100%",
            m: "auto",
            display: "flex",
            alignItems: "center",
            mt: { sm: "-70px !important", xl: "1px" },
            "@media (min-width:1200px) and (max-width:1400px)": {},
            height: { xs: "90vh", sm: "auto" },
            justifyContent: { xs: "center" },
            overflow: { sm: "hidden" },
            flexDirection: { xs: "row", sm: "row" },
            transform: { xs: "rotate(90deg)", sm: "unset" },
            position: "relative",
          }}
        >
          {/* sm screeen.... ================--------------------------------------- */}
          <Box
            sx={{
              display: { xs: "none", sm: "block" },

              position: "relative",
              maxWidth: {
                xs: "300px",
                sm: "500px",
                md: "1000px",
                xl: "1800px",
              },

              minWidth: { xl: 900 },
              width: "100%",

              cursor: "pointer",
              "&:hover .staticImg": { opacity: 0 },
              "&:hover .hoverVid": { opacity: 1 },
              "&:hover .hoverText": { transform: "translateX(30px)" },
              "&:hover .hoverArrow": {
                opacity: 1,
                transform: "translateX(30px)",
                transition: "transform 0.3s  ease-in-out",
              },
              mt: { sm: 1, md: -10, xl: 1 },

              "&:hover .hoverText": {
                ml: { md: -1, xl: 0 },
                transform: "translateX(30px)",
                justifyContent: { sm: "space-between", xl: "end" },
                fontFamily: "Avenir5 !important",
                fontWeight: 500,
                gap: { sm: 4, md: 2, xl: "23%" },
                transition: "transform 0.3s  ease-in-out",
              },
            }}
          >
            <Typography
              className="hoverText"
              sx={{
                position: "absolute",
                bgcolor: "#000000cb",
                fontSize: { xs: 20, sm: 24, md: 34, lg: 48 },
                color: "#fff",
                top: { sm: "84%", xl: "90%" },
                textAlign: "start",
                textTransform: "uppercase",
                ml: { md: -1, xl: 0 },

                display: "flex",
                justifyContent: { sm: "center", xl: "center" },
                alignItems: "center",
                gap: { sm: 5, md: 2, xl: "20%" },

                maxWidth: { sm: "90%", md: "95%", xl: "850px" },
                width: "100%",
                zIndex: 111,
                overflow: "hidden",
                fontWeight: 300,
                fontFamily: "Avenir3 !important",
              }}
            >
              <Box
                className="hoverArrow"
                component="img"
                src={Arrowleft.src}
                alt="Arrow"
                sx={{
                  maxWidth: { xs: 20, sm: 24, md: 34, lg: 48 },
                  width: "100%",
                  height: "100%",
                  opacity: 0,
                  transform: "translateX(-10px)",
                  // transition: "transform 0.3s ease",
                }}
              />
              Product Design
            </Typography>
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
                top: { sm: -2, md: -3, lg: 0 },
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
          </Box>
          <Box
            onClick={handleClick}
            sx={{
              display: { xs: "none", sm: "block" },

              position: "relative",
              maxWidth: {
                xs: "300px",
                sm: "500px",
                md: "1000px",
                xl: "1800px",
              },

              minWidth: { xl: 900 },

              width: "100%",
              cursor: "pointer",
              "&:hover .staticImg": { opacity: 0 },
              "&:hover .hoverVid": { opacity: 1 },
              "&:hover .hoverText": { transform: "translateX(-30px)" }, // text thoda left slide
              "&:hover .hoverArrow": {
                opacity: 1,
                transform: "translateX(0)",
                transition: "transform 0.3s  ease-in-out",
              },

              mt: { sm: 1, md: -10, xl: 1 },

              "&:hover .hoverText": {
                ml: { md: -3, xl: 0 },
                transform: "translateX(30px)",
                justifyContent: { sm: "start" },
                // width: "100%",
                fontFamily: "Avenir5 !important",
                fontWeight: 500,
                gap: { sm: "14%", xl: "20%" },
              },
            }}
          >
            <Typography
              className="hoverText"
              sx={{
                position: "absolute",
                bgcolor: "#000000cb",
                fontSize: { xs: 20, sm: 24, md: 34, lg: 48 },
                color: "#fff",
                top: { sm: "84%", xl: "90%" },
                textAlign: "start",
                textTransform: "uppercase",
                ml: { md: -1, xl: 0 },

                display: "flex",
                justifyContent: { sm: "center", xl: "center" },
                alignItems: "center",
                gap: { sm: 5, md: 1, xl: "25%" },

                maxWidth: { sm: "95%", xl: "850px" },
                width: "100%",
                zIndex: 111,
                overflow: "hidden",
                fontWeight: 300,
                fontFamily: "Avenir3 !important",
              }}
            >
              3D Visual Design
              <Box
                className="hoverArrow"
                component="img"
                src={rightArrow.src}
                alt="Arrow"
                sx={{
                  maxWidth: { xs: 20, sm: 24, md: 34, lg: 48 },
                  width: "100%",
                  height: "100%",
                  opacity: 0,
                  transform: "translateX(10px)",
                  transition: "transform 0.3s  ease-in-out",
                }}
              />
            </Typography>
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
                position: "absolute",
                top: { sm: -2, md: -3, lg: 0 },
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "contain",
                opacity: 0,
                transition: "opacity 0.4s ease-in-out",
              }}
            />

            {/* Title */}
          </Box>
          {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++---mobile screen----+++++++++++++++++++++++++++++++++ */}
          <Box
            // className="hoverVid"
            sx={{
              display: { xs: "block", sm: "none" },
              maxWidth: "500px",
              minWidth: 400,
              width: "100%",
              // maxWidth: { lg: "630px", sm: "450px", sm: "550px" },
              // minWidth: { lg: "550px", md: "420px", sm: "250px", xs: "100%" },
              height: "auto",
              // transform: "rotate(90deg)",
            }}
          >
            <Link href="/design">
              <video
                src="/video/Product design _ left.webm"
                alt="3d video consumer electronics"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
                autoPlay
                loop
                muted
              />
            </Link>
          </Box>

          <Box
            sx={{
              display: { xs: "block", sm: "none" },
              // maxWidth: { lg: "630px", sm: "450px", sm: "550px" },
              maxWidth: "500px",
              minWidth: 400,
              width: "100%",
              height: "auto",
              position: "relative",
            }}
          >
            <Box sx={{ cursor: "pointer" }} onClick={handleClick}>
              <video
                src="/video/3d Animation (2).webm"
                alt="3d video consumer electronics"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
                autoPlay
                loop
                muted
              />
            </Box>
          </Box>

          <Typography
            // variant="h2"
            sx={{
              position: "absolute",
              // top: 90,
              right: 360,
              display: { xs: "block", sm: "none" },
              // maxWidth: "500px",
              width: "100%",
              fontSize: "25px",

              fontWeight: "500",
              textTransform: "uppercase",
              transform: "rotate(-90deg)",

              // bgcolor: "#4330b1ff",
              width: "100%",
              color: "#fff",
              textAlign: "center",
            }}
          >
            <Box
              // className="hoverArrow"
              component="img"
              src={Arrowleft.src}
              alt="Arrow"
              sx={{
                maxWidth: { xs: 25 },
                width: "100%",
                height: "100%",
                // opacity: 0,
                // transform: "translateX(-10px)",
                transition: "all 0.3s ease",
                mr: 10,
              }}
            />
            Product Design
          </Typography>
          <Typography
            sx={{
              position: "absolute",
              // top: 90,
              left: 360,
              display: { xs: "block", sm: "none" },
              // maxWidth: "500px",
              width: "100%",
              fontSize: "25px",

              fontWeight: "500",
              textTransform: "uppercase",
              transform: "rotate(-90deg)",

              // bgcolor: "#b13030ff",
              width: "100%",
              color: "#fff",
              textAlign: "center",
            }}
          >
            3D Visual Design
            <Box
              // className="hoverArrow"
              component="img"
              src={rightArrow.src}
              alt="Arrow"
              sx={{
                maxWidth: { xs: 25, sm: 24, md: 34, lg: 48 },
                width: "100%",
                height: "100%",
                // opacity: 0,
                // transform: "translateX(-10px)",
                transition: "all 0.3s ease",
                ml: 10,
              }}
            />
          </Typography>

          {/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
          {/* <Box
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
          </Box> */}
          {/* <Box
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
          </Box> */}
        </Box>
      </Box>
    </Box>
  );
}
