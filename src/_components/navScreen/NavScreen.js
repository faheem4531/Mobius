"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import HomePage from "@/app/homePage/page";
import leftSide from "@/_assets/png/Trans.png";
import rightSide from "@/_assets/png/Solid.png";
import rightArrow from "@/_assets/png/Arrow.png";
import Arrowleft from "@/_assets/png/Arrow left.png";
import NavBar from "../navBar/NavBar";

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
        bgcolor: "#000000",
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
        <NavBar />
        <Box
          sx={{
            width: "100%",
            m: "auto",
            p: { xs: 16, sm: "60px 20px", lg: "80px 25px" },
            display: "flex",
            alignItems: "center",
            mt: {
              xs: "-10px !important",
              sm: "-9% !important",
              lg: "-6% !important",
              xl: "1px",
            },
            height: { xs: "80vh", md: "100vh" },
            justifyContent: { xs: "center" },
            overflow: { sm: "hidden" },
            flexDirection: { xs: "row" },
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
              minWidth: { xl: 700 },
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
                display: "flex",
                left: 0,
                textAlign: "center",
                flexDirection: "row-reverse",
                justifyContent: { sm: "space-between", sm: "center" },
                gap: { xl: "12%" },
                alignItems: "center",
                top: { sm: "82%", md: "82%", lg: "80%", xl: "90%" },
              }}
            >
              <Typography
                className="hoverText"
                sx={{
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
                  maxWidth: { xs: 20, sm: 24, md: 34, lg: 48 },
                  width: "100%",
                  height: "100%",
                  zIndex: 111,
                  opacity: 0,
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
              minWidth: { xl: 700 },
              width: "100%",
              cursor: "pointer",
              "&:hover .staticImg": { opacity: 0 },
              "&:hover .hoverVid": { opacity: 1 },
              "&:hover .hoverText": {
                fontFamily: "Poppins, sans-serif !important",
                fontWeight: 700,
                transform: "translateX(-8%)",
                transition: "transform 0.3s  ease-in-out",
              },
              "&:hover .hoverArrow": {
                opacity: 1,
                transition: "transform 0.3s  ease-in-out",
              },
            }}
          >
            <Box
              sx={{
                position: "absolute",
                width: "100%",
                maxWidth: "720px",
                display: "flex",
                justifyContent: { sm: "space-between" },
                alignItems: "center",
                top: { sm: "82%", md: "81%", lg: "80%", xl: "90%" },
              }}
            >
              <Typography
                className="hoverText"
                sx={{
                  lineHeight: 1.2,
                  bgcolor: "#000",
                  fontSize: { xs: 20, sm: 24, md: 34, lg: 48 },
                  color: "#fff",
                  textAlign: "center",
                  textTransform: "uppercase",
                  width: "100%",
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
                  maxWidth: { xs: 20, sm: 24, md: 34, lg: 48 },
                  width: "100%",
                  height: "100%",
                  zIndex: 111,
                  opacity: 0,
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
          <Box
            sx={{
              display: { xs: "block", sm: "none" },
              maxWidth: "500px",
              minWidth: 360,
              width: "100%",
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
                  objectFit: "contain",
                }}
                autoPlay
                loop
                muted
                playsInline
              />
            </Link>
          </Box>
          <Box
            sx={{
              display: { xs: "block", sm: "none" },
              maxWidth: "500px",
              minWidth: 360,
              width: "100%",
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
                  objectFit: "contain",
                }}
                autoPlay
                loop
                muted
                playsInline
              />
            </Box>
          </Box>

          <Typography
            sx={{
              position: "absolute",
              right: 260,
              display: { xs: "block", sm: "none" },
              width: "100%",
              fontSize: "25px",
              fontWeight: "500",
              textTransform: "uppercase",
              transform: "rotate(-90deg)",
              width: "100%",
              color: "#fff",
              textAlign: "center",
            }}
          >
            <Box
              component="img"
              src={Arrowleft.src}
              alt="Arrow"
              sx={{
                maxWidth: { xs: 25 },
                width: "100%",
                height: "100%",
                transition: "all 0.3s ease",
                mr: 10,
              }}
            />
            Product Design
          </Typography>
          <Typography
            sx={{
              position: "absolute",
              left: 240,
              display: { xs: "block", sm: "none" },
              width: "100%",
              fontSize: "25px",
              fontWeight: "500",
              textTransform: "uppercase",
              transform: "rotate(-90deg)",
              width: "100%",
              color: "#fff",
              textAlign: "center",
            }}
          >
            3D Visual Design
            <Box
              component="img"
              src={rightArrow.src}
              alt="Arrow"
              sx={{
                maxWidth: { xs: 25, sm: 24, md: 34, lg: 48 },
                width: "100%",
                height: "100%",
                transition: "all 0.3s ease",
                ml: 10,
              }}
            />
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
