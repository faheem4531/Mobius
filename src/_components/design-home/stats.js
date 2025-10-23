"use client";
import Review from "@/app/homePage/_sections/clilents/ReviewCard";
import { Box, Typography, Grid, useTheme } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import ReviewTestmonial from "./textimonial";

const stats = [
  {
    label: "Happy Clients",
    subLabel: "Brands That Keep Coming Back For More",
    value: 145,
    suffix: "+",
  },
  {
    label: "Projects Delivered",
    subLabel: "Creative Work That Drives Real Result",
    value: 328,
    suffix: "+",
  },
  {
    label: "Years Of Experience",
    subLabel: "Master The Art Of Product Design",
    value: 10,
    suffix: "+",
  },
  {
    label: "Client Satisfaction",
    subLabel: "We Mostly Focus On Exceeding Expectation",
    value: 99,
    suffix: "%",
  },
];

export default function StatsSection() {
  const theme = useTheme();
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
  const [counts, setCounts] = useState(stats.map(() => 0));

  // Detect section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => setVisible(entry.isIntersecting)),
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Animate numbers when visible
  useEffect(() => {
    if (!visible) return;

    const duration = 2000; // 2 seconds
    const startTime = performance.now();

    const update = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const newCounts = stats.map((item, i) =>
        Math.floor(progress * item.value)
      );
      setCounts(newCounts);
      if (progress < 1) requestAnimationFrame(update);
    };

    requestAnimationFrame(update);
  }, [visible]);

  return (
    <Box
      ref={ref}
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
        Testimonials
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
        See what peoples say about us
      </Typography>
      <Grid
        container
        spacing={{ xs: 5, md: 6 }}
        // alignItems="\"
        justifyContent="center"
        py={{ xs: "16px", md: "48px" }}
      >
        {stats.map((item, index) => (
          <Grid item xs={6} md={3} key={index}>
            <Box textAlign="center">
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 600,
                  color: "#FAFAFA",
                  fontSize: { xs: "40px", md: "56px" },
                }}
              >
                {counts[index]}
                {item.suffix}
              </Typography>

              <Box
                sx={{
                  display: "inline-block",
                  mt: { xs: "12px", md: "16px" },
                  px: 3,
                  py: { xs: "6px", md: "8px" },
                  borderRadius: "999px",
                  border: "1px solid #646268",
                  backgroundColor: "#212123",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "#A7A4AD",
                    fontSize: { xs: "10px", md: "12px" },
                  }}
                >
                  {item.label}
                </Typography>
              </Box>

              <Typography
                variant="body2"
                sx={{
                  color: "#EDEDEF",
                  mt: { xs: "12px", md: "16px" },

                  lineHeight: 1.6,
                  fontSize: { xs: "12px", md: "18px" },
                }}
              >
                {item.subLabel}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Box
        sx={{
          width: "100vw",
          overflowX: "auto",
          mt: 3,
          "&::-webkit-scrollbar": {
            width: 0,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: { xs: "20px", lg: "30px" },
            width: { xs: "fit-content", lg: "100%" },
            mb: { md: "40px", xs: "20px" },
            ml: { xs: 3, md: 6, lg: 0 },
          }}
        >
          <ReviewTestmonial name="Hale Allon" />
          <ReviewTestmonial name="Hale Allon" />
          <ReviewTestmonial name="Hale Allon" />
        </Box>
      </Box>
    </Box>
  );
}
