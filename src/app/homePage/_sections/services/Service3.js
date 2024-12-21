"use client";

import React, { useEffect, useRef, useState } from "react";
import { Box, Typography } from "@mui/material";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

import Line from "@/app/_assets/svg/curve-line.webp";
import MaskButton from "@/app/_components/button/MaskButton";
import ContactModal from "@/app/_components/modal/ContactModal";

const Service3 = () => {
  const textRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const paragraphListRef = useRef(null);
  const btnRef = useRef(null);
  const [modal, setModal] = useState(false);

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
      paragraphListRef.current,
      { x: 450, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: paragraphListRef.current,
          start: "top 80%",
          end: "top 30%",
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      paragraphRef.current,
      { x: 700, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
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
      { x: 300, opacity: 0 },
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
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: { md: "row", sm: "column", xs: "column" },
          alignItems: "center",
          padding: { lg: "140px 70px", sm: "170px 20px", xs: "140px 20px" },
          columnGap: { lg: "180px", md: "80px" },
          backgroundImage: "url('/bg-services.webp')",
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
              fontFamily: "Avenir3 !important",
            }}
            ref={textRef}
          >
            Our Services
          </Typography>
          <Typography
            sx={{
              fontSize: { lg: "38px", md: "32px", xs: "32px" },
              fontFamily: "Avenir5 !important",
              color: "#FFFFFF",
              lineHeight: "45.6px",
              m: "20px 0",
            }}
            ref={headingRef}
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
              ref={paragraphListRef}
            >
              <Image src={Line} alt="image" />
            </Box>
            <Box ref={paragraphRef}>
              <Typography
                sx={{
                  fontSize: { lg: "20px", md: "16px", sm: "18px", xs: "16px" },
                  fontFamily: "Avenir3 !important",
                }}
              >
                Give us the idea for the CGI campaign you want to run and get
                free storyboard from us
              </Typography>
              <Typography
                sx={{
                  fontSize: { lg: "20px", md: "16px", sm: "18px", xs: "16px" },
                  fontFamily: "Avenir3 !important",
                  m: { sm: "90px 0", xs: "30px 0" },
                }}
              >
                We will get the real footage done on site or use stock video as
                preference
              </Typography>
              <Typography
                sx={{
                  fontSize: { lg: "20px", md: "16px", sm: "18px", xs: "16px" },
                  fontFamily: "Avenir3 !important",
                }}
              >
                Composite the 3d elements with the real footage matching the
                lighting and camera angles
              </Typography>
              <Typography
                sx={{
                  fontSize: { lg: "20px", md: "16px", sm: "18px", xs: "16px" },
                  fontFamily: "Avenir3 !important",
                  mt: { sm: "110px", xs: "30px" },
                }}
              >
                Viral CGI video for social media marketing for exponential reach
              </Typography>
            </Box>
          </Box>
          <Box ref={btnRef}>
            <MaskButton
              text={"Get free Storyboard"}
              onClick={() => setModal(true)}
            />
          </Box>
        </Box>
      </Box>

      <ContactModal open={modal} setOpen={setModal} />
    </>
  );
};

export default Service3;
