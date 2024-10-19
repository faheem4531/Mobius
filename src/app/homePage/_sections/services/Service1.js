import React, { useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Button from "@/app/_components/button/Button";

const Service1 = () => {
  const textRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      textRef.current,
      { x: 200, opacity: 0 },
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
      { x: 350, opacity: 0 },
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
      { x: 500, opacity: 0 },
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
      btnRef.current,
      { x: 500, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: btnRef.current,
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
        flexDirection: { md: "row", sm: "column", xs: "column" },
        alignItems: "center",
        background:
          "linear-gradient(180deg, #151414 0%, rgba(0, 0, 0, 0) 66.61%);",
        padding: { lg: "100px 70px", sm: "100px 20px", xs: "90px 20px" },
        columnGap: { lg: "100px", md: "50px" },
      }}
    >
      <Box
        sx={{
          maxWidth: { lg: "510px", sm: "450px" },
          width: "100%",
          height: "100%",
          minWidth: { lg: "500px", md: "350px", sm: "", xs: "" },
        }}
      >
        <video
          src="/video/3d-product-animation-cosmetics.webm"
          alt="3d product animation cosmetics"
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
          ref={textRef}
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
          ref={headingRef}
        >
          Helping Brands Grow Using 3d Product Animation Videos
        </Typography>
        <Box sx={{ width: "100px", bgcolor: "#A7A4AD", height: "1px" }}></Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { lg: "25px", md: "16px", sm: "20px", xs: "15px" },
            m: "20px 0 30px",
          }}
          ref={paragraphRef}
        >
          <Typography
            sx={{
              fontSize: { lg: "20px", md: "16px", sm: "18px", xs: "16px" },
              fontWeight: 300,
            }}
          >
            From corporations to start-ups. we create stunning product
            animations for any product and transform them into living, breathing
            stories that inspire. Imagine your product not just displayed but
            showcased with a flair that grabs attention.
          </Typography>
          <Typography
            sx={{
              fontSize: { lg: "20px", md: "16px", sm: "18px", xs: "16px" },
              fontWeight: 300,
            }}
          >
            Costly and environment damaging product shoots are a thing of past.
            Our 3D product animations are crafted with the perfect blend of
            artistry and technology, making your product the hero of its own
            narrative.
          </Typography>
          <Typography
            sx={{
              fontSize: { lg: "20px", md: "16px", sm: "18px", xs: "16px" },
              fontWeight: 700,
            }}
          >
            The benefits are immense
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
              - Increased Engagement:
            </Typography>{" "}
            Drive and immerse more audience in dynamic content
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
              - Intricate Details:
            </Typography>{" "}
            Display intricate details and processes with dazzling details
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
              - Foster Sales:
            </Typography>{" "}
            Carry viewers to a experienceable journey, fostering informed buying
            decisions
          </Box>
        </Box>
        <Box ref={btnRef}>
          <Button text={"Get in touch now!"} />
        </Box>
      </Box>
    </Box>
  );
};

export default Service1;
