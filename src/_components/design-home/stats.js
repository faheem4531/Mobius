"use client";
import Review from "@/app/homePage/_sections/clilents/ReviewCard";
import { Box, Typography, Grid, useTheme } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import ReviewTestmonial from "./textimonial";
import HeadingSection from "./heading-section";
import ImageReview from "@/_assets/png/ImageReview.png";
import ReviewTestimonial from "./textimonial";

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
const testimonials = [
  {
    name: "Marco Gallone",
    role: "CTO",
    company: "Wosler Corp",
    review:
      "The end to end design version 1 of our gel dispenser system. It's key function is to deposit ultrasound gel robotically, Mobius helped us make a functional prototype. In short, they did good work and moved fast as we expected.",
    rating: 5,
    imageSrc: "/review-Marco-Gallone.jpg",
  },
  {
    name: "Christian Blaha",
    role: "CEO",
    company: "Zpaftech LLC",
    review:
      "We wanted to make an acupressure mask that was unique as an idea. Mobius team was very professional and understanding of your vision. I believe communication is key to realizing your ideas and they definitely came through on that one.",
    rating: 5,
    imageSrc: "/review-Christian-Blaha.jpg",
  },
  {
    name: "Brandon Fullington",
    role: "CEO",
    company: "HVAC Mount LLC",
    review:
      "Haseeb and his team hit the ball out the park on our project and went above and beyond. They did a great job of communicating throughout the process and in the end came up with a great solution in a timely manner. Nothing more you could ask for.",
    rating: 5,
    imageSrc: "/review-Brandon-Fullington.jpg",
  },
  {
    name: "Moshe Chazon",
    role: "CEO",
    company: "ULYL LLC",
    review:
      "I had an outstanding experience working with Mobius on my project! They are incredibly communicative, always keeping me updated every step of the way. What really stood out was their exceptional attention to detail—they caught things I hadn't even thought of and ensured everything was polished to perfection. If you're looking for a reliable and talented design agency, I highly recommend them.",
    rating: 5,
    imageSrc: "/review-Brandon-Fullington.jpg",
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
      <HeadingSection
        heading="Testimonials"
        description="See what peoples say about us"
        sxDescription={{
          px: { xs: 7 },
          margin: { xs: "20px 0", md: "30px 0", lg: "24px 0 48px" },
        }}
      />

      <Grid
        container
        spacing={{ xs: 5, md: 6 }}
        justifyContent="center"
        py={{ xs: "16px", md: "48px" }}
      >
        {stats.map((item, index) => (
          <Grid item xs={6} md={3} key={index}>
            <Box
              textAlign="center"
              sx={{ maxWidth: { lg: "260px" }, width: "100%" }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 600,
                  color: "#FAFAFA",
                  fontSize: { xs: "40px", md: "56px" },
                  textTransform: "capitalize",
                }}
              >
                {counts[index]}
                {item.suffix}
              </Typography>

              <Box
                sx={{
                  display: "inline-block",
                  maxWidth: { xs: 172 },
                  width: "100%",
                  mt: { xs: "12px", md: "16px" },
                  px: 3,
                  py: { xs: "6px", md: "8px" },
                  borderRadius: "999px",
                  border: "1px solid #646268",
                  backgroundColor: "#212123",
                }}
              >
                <Typography
                  sx={{
                    color: "#A7A4AD",
                    fontSize: { xs: "10px", md: "12px" },
                    textTransform: "capitalize",
                    lineHeight: { xs: "10px" },
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
                  textTransform: "capitalize",
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
            width: { xs: "fit-content" },
            // maxWidth: "1440px",
            // mb: { md: "40px", xs: "20px" },
            ml: { xs: 3, md: 6, lg: 0 },
          }}
        >
          {testimonials.map((item, index) => (
            <ReviewTestimonial key={index} {...item} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
