"use client";

import React, { useEffect, useRef } from "react";

import Model from "@/_assets/png/aboutUs-model.webp";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Box, Typography } from "@mui/material";

const AboutUs = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      textRef.current,
      { x: -200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          end: "top 30%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      headingRef.current,
      { x: -350, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
          end: "top 30%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      paragraphRef.current,
      { x: -500, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: paragraphRef.current,
          start: "top 80%",
          end: "top 30%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      imageRef.current,
      { y: 200, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          end: "top 30%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        backgroundImage: "url(/aboutUs-bg.webp)",
        backgroundRepeat: "no-repeat",
        backgroundSize: { xs: "100% 50%", sm: "100% 90%" },
        backgroundPosition: { xs: "center top", sm: "center" },
        flexDirection: { xs: "column", sm: "row" },
        columnGap: { xs: 0, sm: "100px", md: "220px" },
        padding: {
          xs: "50px 0",
          sm: "85px 0px 70px 50px",
          md: "120px 90px 110px 50x",
          lg: "120px 90px 110px 215px",
        },
        "&::before": {
          content: '""',
          position: "absolute",
          left: 0,
          width: "100%",
          background: "linear-gradient(var(--bg-gradient))",
          zIndex: 1,
          bottom: { xs: "unset", sm: "-50px", md: "-100px" },
          height: { xs: 0, sm: "50%", md: "50%" },
          display: { xs: "none", sm: "block" },
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            display: { xs: "block", sm: "none" },
            position: "absolute",
            bottom: "-35px",
            left: 0,
            width: "100%",
            height: "20%",
            background: "linear-gradient(var(--bg-gradient))",
            zIndex: 1,
          },
        }}
      >
        <Box
          component="img"
          src={Model.src}
          alt="Metaleon 3D character"
          ref={imageRef}
          sx={{
            width: { xs: "172px", sm: "160px", md: "289px" },
            height: { xs: "308px", sm: "280px", md: "515px" },
            zIndex: 2,
          }}
        />
      </Box>
      <Box
        sx={{
          color: "var(--text-primary)",
          fontWeight: 300,
          width: { xs: "100%", sm: "50%" },
          maxWidth: { sm: "620px" },
          padding: { xs: "0 55px 0 30px", sm: 0 },
          marginTop: { xs: "25px", sm: 0 },
          position: "relative",
          zIndex: 2,
        }}
      >
        <Typography
          ref={textRef}
          variant="h6"
          sx={{
            fontSize: { xs: "16px", sm: "16px", md: "20px" },
            marginBottom: { xs: "20px", sm: "18px", md: "30px" },
          }}
        >
          About Mobius Studios
        </Typography>
        <Typography
          ref={headingRef}
          variant="h2"
          sx={{
            fontSize: { xs: "18px", sm: "20px", md: "38px" },
            color: "var(--text-main)",
            lineHeight: "120%",
          }}
        >
          Who are we?
        </Typography>
        <Box
          component="hr"
          sx={{
            margin: {
              xs: "20px 0",
              sm: "18px 0 30px",
              md: "30px 0 40px",
            },
            width: { xs: "50px", sm: "50px", md: "100px" },
          }}
        />
        <Typography
          ref={paragraphRef}
          sx={{
            fontSize: { xs: "14px", sm: "16px", md: "19px" },
            lineHeight: { xs: "130%", sm: "120%" },
            position: "relative",
            zIndex: 20,
          }}
        >
          We transform ideas into real-world products. Our end-to-end product
          design service takes your concept from an idea to a fully functional
          prototype. Whether it’s mechanical devices, health tech, consumer
          tech, wearables, or home appliances, our team delivers solutions that
          balance innovation, usability, and manufacturability.
          <br />
          <br />
          From market research and industrial design to CAD modeling,
          electronics, and prototyping, we provide a streamlined process that
          ensures your product is not only visually refined but also engineered
          for performance, compliance, and scale.
          <br />
          <br />
          We help entrepreneurs, startups, and businesses bring new inventions
          to life, faster and smarter.
        </Typography>
      </Box>
    </Box>
  );
};

export default AboutUs;
