"use client";

import { useRef, useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import NavBar from "@/_components/navBar/NavBar";
import Title from "@/_assets/svg/heading.webp";
import MaskButton from "@/_components/button/MaskButton";
import ContactModal from "@/_components/modal/ContactModal";

export default function HeroIntro() {
  const headingImgRef = useRef(null);
  const textRef = useRef(null);
  const btnRef = useRef(null);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const fadeIn = (ref, delay, fromX) => {
      if (!ref) return;
      gsap.fromTo(
        ref,
        { x: fromX, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ref,
            start: "top 80%",
            end: "top 30%",
            toggleActions: "play none none reverse",
          },
          delay,
        }
      );
    };

    fadeIn(headingImgRef.current, 0, -200);
    fadeIn(textRef.current, 0.2, -350);
    fadeIn(btnRef.current, 0.4, -500);
  }, []);

  return (
    <>
      <Box sx={{ position: "relative" }}>
        {/* Background Video */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            zIndex: -1,
            opacity: 0.4,
          }}
        >
          <video
            autoPlay
            muted
            loop
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          >
            <source src="video/Showreel-2024.webm" type="video/webm" />
          </video>
        </Box>

        {/* Section */}
        <Box
          sx={{
            height: { xs: "500px", sm: "530px", md: "720px" },
            width: "100%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            position: "relative",
          }}
        >
          <NavBar />

          {/* Content */}
          <Box
            sx={{
              position: "absolute",
              left: { xs: "30px", sm: "50px", md: "90px" },
              bottom: { xs: "30px", sm: "70px", md: "120px" },
              color: "var(--text-primary)",
              fontWeight: 300,
              width: "100%",
            }}
          >
            <Box
              component="img"
              src={Title.src}
              alt="Mobius Studio"
              ref={headingImgRef}
              sx={{
                width: { xs: "90%", sm: "auto" },
                marginBottom: "10px",
                display: "block",
              }}
            />
            <Typography
              ref={textRef}
              sx={{
                width: { xs: "90%", sm: "80%", md: "50%" },
                fontSize: { xs: "16px", sm: "16px", md: "19px" },
                lineHeight: { xs: "100%", md: "120%" },
                margin: {
                  xs: "0 0 20px",
                  sm: "10px 0 20px",
                  md: "15px 0 20px",
                },
              }}
            >
              Our team of design engineers help inventors turn ideas into a
              sellable product that is visually striking and engineered to
              perfection.
            </Typography>

            <Box ref={btnRef}>
              <MaskButton
                text="Talk to Our Expert"
                onClick={() => setModal(true)}
              />
            </Box>
          </Box>
        </Box>
      </Box>

      <ContactModal open={modal} setOpen={setModal} />
    </>
  );
}
