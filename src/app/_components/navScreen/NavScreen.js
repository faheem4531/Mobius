"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import leftSide from "@/app/_assets/png/Trans.png";

import rightSide from "@/app/_assets/png/Solid.png";
import rightArrow from "@/app/_assets/png/Arrow.png";
import Arrowleft from "@/app/_assets/png/Arrow left.png";

import NavBar from "../navBar/NavBar";
import { useState } from "react";
import HomePage from "@/app/homePage/page";
import { useRouter } from "next/navigation";
import Link from "next/link";
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
    <Box
      sx={{
        bgcolor: "#000",
        height: { xs: "90vh", sm: "100vh" },
        overflow: "hidden",
      }}
    >
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
            // maxWidth: "1440px",
            width: "100%",
            m: "auto",
            p: { xs: 16, sm: "60px 20px", lg: "80px 25px" },
            display: "flex",
            // bgcolor: "#fff",
            alignItems: "center",
            mt: {
              xs: "-11% !important",
              sm: "-9% !important",
              lg: "-6% !important",
              xl: "1px",
            },
            height: { xs: "90vh", md: "100vh" },
            justifyContent: { xs: "center" },
            overflow: { xs: "hidden" },
            flexDirection: { xs: "row", sm: "row" },
            transform: { xs: "rotate(90deg)", sm: "unset" },
            position: "relative",
          }}
        >
          {/* sm screeen.... ================--------------------------------------- */}

          {/*left */}
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
              // border: "1px solid orange",
              minWidth: { xl: 700 },
              // overflow: { sm: "hidden" },
              width: "100%",
              cursor: "pointer",
              "&:hover .staticImg": { opacity: 0 },
              "&:hover .hoverVid": { opacity: 1 },
              "&:hover .hoverText": {
                fontFamily: "Poppins, sans-serif !important",
                fontWeight: 700,

                transform: "translateX(8%)",
                transition: "transform 0.3s  ease-in-out",
              },
              "&:hover .hoverArrow": {
                opacity: 1,
                transform: "translateX(5px)",
                transition: "transform 0.3s  ease-in-out",
              },
            }}
          >
            <Box
              sx={{
                position: "absolute",
                maxWidth: { sm: "720px", xl: "800px" },
                width: "100%",
                // bgcolor: "#000000",
                display: "flex",
                // height: 200,
                left: 0,
                textAlign: "center",
                // p: "1px",
                flexDirection: "row-reverse",
                justifyContent: { sm: "space-between", sm: "center" },
                // justifyContent: { sm: "center" },
                gap: { xl: "12%" },
                alignItems: "center",
                top: { sm: "82%", md: "82%", lg: "80%", xl: "90%" },
              }}
            >
              <Typography
                className="hoverText"
                sx={{
                  // height: "150px",
                  // border: "1px solid yellow",
                  // p: "1px",
                  lineHeight: 1.2,

                  bgcolor: "#000000",
                  fontSize: { xs: 20, sm: 24, md: 34, lg: 48 },
                  color: "#fff",
                  textAlign: { sm: "center" },
                  textTransform: "uppercase",
                  width: "100%",
                  zIndex: 111,
                  fontWeight: 300,
                  maxWidth: { xl: "500px" },
                  transition: "transform 0.3s  ease-in-out",
                  fontFamily: "Poppins, sans-serif !important",
                  fontWeight: 200,
                  fontStyle: "normal",
                }}
              >
                Product Design
              </Typography>
              <Box
                className="hoverArrow"
                component="img"
                src={Arrowleft.src}
                alt="Arrow"
                sx={{
                  // transition: "font-weight 0.6s ease-in-out",
                  maxWidth: { xs: 20, sm: 24, md: 34, lg: 48 },
                  width: "100%",
                  height: "100%",
                  zIndex: 111,
                  opacity: 0,
                  // transform: "translateX(10px)",
                  // transition: "transform 1s  ease-in-out",
                }}
              />
            </Box>

            {/* Default Image */}
            <Image
              src={leftSide}
              alt="Product design"
              className="staticImg"
              style={{
                overflow: "hidden",
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
                top: { sm: -2, md: -3, lg: 0, xl: -1 },
                overflow: { sm: "hidden" },
                left: 0,
                width: "100%",

                height: "100%",
                objectFit: "contain",
                opacity: 0,
                transition: "opacity 0.4s ease-in-out",
              }}
            />
          </Box>

          {/* right */}
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
              // border: "1px solid orange",
              minWidth: { xl: 700 },

              width: "100%",
              cursor: "pointer",
              "&:hover .staticImg": { opacity: 0 },
              "&:hover .hoverVid": { opacity: 1 },
              "&:hover .hoverText": {
                // fontFamily: "Avenir8 !important",
                fontFamily: "Poppins, sans-serif !important",
                fontWeight: 700,

                // transform: "translateX(-80px)",
                transform: "translateX(-8%)",
                transition: "transform 0.3s  ease-in-out",
              },
              "&:hover .hoverArrow": {
                opacity: 1,
                // transform: "translateX(-5px)",
                transition: "transform 0.3s  ease-in-out",
              },
            }}
          >
            <Box
              sx={{
                position: "absolute",
                width: "100%",
                maxWidth: "720px",
                // bgcolor: "#000000",
                display: "flex",
                // height: 200,
                justifyContent: { sm: "space-between" },
                alignItems: "center",
                top: { sm: "82%", md: "81%", lg: "80%", xl: "90%" },
              }}
            >
              <Typography
                className="hoverText"
                sx={{
                  // border: "1px solid yellow",
                  // p: "1px",
                  lineHeight: 1.2,

                  bgcolor: "#000",
                  fontSize: { xs: 20, sm: 24, md: 34, lg: 48 },
                  color: "#fff",
                  textAlign: "center",
                  textTransform: "uppercase",
                  // ml: 2,
                  width: "100%",
                  //
                  zIndex: 111,

                  transition: "transform 0.3s  ease-in-out",
                  fontFamily: "Poppins, sans-serif !important",
                  fontWeight: 200,
                  fontStyle: "normal",
                }}
              >
                3D Visual Design
              </Typography>
              <Box
                className="hoverArrow"
                component="img"
                src={rightArrow.src}
                alt="Arrow"
                sx={{
                  // transition: "font-weight 0.6s ease-in-out",
                  maxWidth: { xs: 20, sm: 24, md: 34, lg: 48 },
                  width: "100%",
                  height: "100%",
                  zIndex: 111,
                  opacity: 0,
                  // transform: "translateX(10px)",
                  // transition: "transform 1s  ease-in-out",
                }}
              />
            </Box>
            {/* Default Image */}
            <Image
              src={rightSide}
              alt="Product design"
              className="staticImg"
              style={{
                width: "100%",
                height: "100%",
                overflow: "hidden",
                objectFit: "contain",
                transition: "opacity 1s ease-in-out",
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
                top: { sm: -2, md: -3, lg: 0, xl: -1 },
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "contain",
                overflow: { sm: "hidden" },
                opacity: 0,
                transition: "opacity 1s ease-in-out",
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
              minWidth: 360,
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
              minWidth: 360,
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
              right: 260,
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
              left: 240,
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
