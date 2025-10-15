"use client";

import { Box, Grid2, Typography } from "@mui/material";
import Image from "next/image";
import camera from "@/_assets/png/camera2.png";
import { useEffect, useState } from "react";

const OurWork = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const words = ["product.", "invention.", "patent."];
  const [index, setIndex] = useState(0);
  const [displayedWord, setDisplayedWord] = useState("");
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    let speed = 150;
    let currentWord = words[index];
    let updateText;

    if (deleting) {
      speed = 80;
      updateText = () =>
        setDisplayedWord((prev) => prev.slice(0, prev.length - 1));
    } else {
      updateText = () =>
        setDisplayedWord(currentWord.slice(0, displayedWord.length + 1));
    }

    const timeout = setTimeout(() => {
      updateText();

      if (!deleting && displayedWord === currentWord) {
        setTimeout(() => setDeleting(true), 1000);
      } else if (deleting && displayedWord === "") {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % words.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayedWord, deleting, index, words]);
  return (
    <Box
      sx={{
        bgcolor: "#000",
      }}
    >
      <Box
        sx={{
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
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: "16px", md: "20px" },
            fontFamily: "Avenir3 !important",
          }}
        >
          our work
        </Typography>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "24px", md: "30px", lg: "32px" },

            fontWeight: { xs: 400, md: 500, lg: 600 },
            color: "var(--text-main)",
            margin: { xs: "20px 0", md: "30px 0", lg: "24px 0 48px" },
            fontFamily: "Avenir !important",
            textAlign: "center",
          }}
        >
          We put life into ideas with strong engineering concepts and real world
          ergonomics to make a sellable & fundable{" "}
          <Box
            component="span"
            sx={{
              display: "inline-block",
              position: "relative",
              color: "var(--text-main)",
              fontWeight: "700",

              // borderRight: "2px solid  var(--text-main)",
              animation: "blink 0.7s infinite",
              paddingBottom: "1px",
              "&::after": {
                content: '""',
                position: "absolute",
                left: 0,
                bottom: 0,
                width: "100%",
                height: "2px",
                backgroundColor: "var(--text-main)",
                borderRadius: "2px",
                transform: "scaleX(0)",
                transformOrigin: "left",
                animation: "underline 1s ease-in-out forwards",
              },
            }}
          >
            {displayedWord}
          </Box>
          <style>
            {`
          @keyframes blink {
            0% { border-color: transparent; }
            50% { border-color:  "var(--text-main)"; }
            100% { border-color: transparent; }
          }

          @keyframes underline {
            0% { transform: scaleX(0); }
            100% { transform: scaleX(1); }
          }
        `}
          </style>
        </Typography>

        <Grid2 container spacing={{ xs: 2, md: 4, lg: 5 }}>
          <Grid2 size={{ xs: 7, md: 5.45 }}>
            <Cards
              ProName="Product Name"
              indName="Industry"
              image={camera}
              id={1}
            />
          </Grid2>
          <Grid2 size={{ xs: 5, md: 3.27 }}>
            <Cards
              ProName="Product Name"
              indName="Industry"
              image={camera}
              id={2}
            />
          </Grid2>
          <Grid2 size={{ xs: 6, md: 3.27 }}>
            <Cards
              ProName="Product Name"
              indName="Industry"
              image={camera}
              id={3}
            />
          </Grid2>
          <Grid2 size={{ xs: 6, md: 3.27 }}>
            <Cards
              ProName="Product Name"
              indName="Industry"
              image={camera}
              id={4}
            />
          </Grid2>
          <Grid2 size={{ xs: 5, md: 5.45 }}>
            <Cards
              ProName="Product Name"
              indName="Industry"
              image={camera}
              id={5}
            />
          </Grid2>
          <Grid2 size={{ xs: 7, md: 3.27 }}>
            <Cards
              ProName="Product Name"
              indName="Industry"
              image={camera}
              id={6}
            />
          </Grid2>
        </Grid2>

        <Typography
          sx={{
            fontSize: { xs: "16px", md: "18px", lg: "20px" },
            fontWeight: { xs: 400 },
            color: "#EDEDEF",
            mt: { xs: "20px ", md: "30px ", lg: " 48px" },
            fontFamily: "Avenir !important",
            textAlign: "center",
          }}
        >
          View More
        </Typography>
      </Box>
    </Box>
  );
};

export const Cards = ({ ProName, indName, image, id }) => {
  return (
    <Box
      onClick={() => console.log(id)}
      sx={{
        width: "100%",
        borderRadius: { xs: "12px", sm: "16px" },
        border: "1px solid #434245",
        height: { xs: "148px", sm: "200px", md: "280px", lg: "320px" },
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
        }}
      >
        <Image
          src={image}
          alt="logo"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 16,
            objectFit: "contain",
          }}
        />
      </Box>
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          bgcolor: "#000000CC",

          display: "flex",
          alignItems: "center",
          justifyContent: { xs: "center", md: "space-between" },
          height: { xs: "24px", sm: "43px" },
          borderRadius: {
            xs: "0px 0px 12px  12px ",
            sm: "0px 0px 16px  16px ",
          },
          p: { xs: "8px", sm: "16px 8px" },
          mt: { xs: "-24px", sm: "-43px" },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 300,
            fontSize: { xs: "12px", md: "16px" },
            fontFamily: "Avenir3 !important",
            textTransform: "uppercase",
          }}
        >
          {ProName}
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 300,
            display: { xs: "none", md: "block" },
            fontSize: { xs: "12px" },
            fontFamily: "Avenir3 !important",
          }}
        >
          {indName}
        </Typography>
      </Box>
    </Box>
  );
};
export default OurWork;
