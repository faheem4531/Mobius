"use client";
import { Box, Typography, Grid, useTheme } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

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
        py: { xs: 10, md: 16 },
        px: 3,
        bgcolor: "#0e0e0e",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <Grid
        container
        spacing={4}
        justifyContent="center"
        maxWidth="lg"
        mx="auto"
      >
        {stats.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Box>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 600,
                  fontSize: { xs: "2.5rem", md: "56px" },
                }}
              >
                {counts[index]}
                {item.suffix}
              </Typography>

              <Box
                sx={{
                  display: "inline-block",
                  mt: 1.5,
                  px: 3,
                  py: 0.5,
                  borderRadius: "999px",
                  backgroundColor: "rgba(255,255,255,0.08)",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "rgba(255,255,255,0.8)",
                    fontSize: "12px",
                  }}
                >
                  {item.label}
                </Typography>
              </Box>

              <Typography
                variant="body2"
                sx={{
                  color: "rgba(255,255,255,0.6)",
                  mt: 1.5,
                  lineHeight: 1.6,
                  fontSize: { xs: "0.9rem", md: "1rem" },
                }}
              >
                {item.subLabel}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
