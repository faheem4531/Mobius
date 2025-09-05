"use client";

import { useEffect, useState, useRef } from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Coming from "@/app/_assets/png/Coming-Soon.png";

export default function Hero() {
  const targetTimeRef = useRef(
    new Date().getTime() +
      10 * 24 * 60 * 60 * 1000 + // 10 days
      24 * 60 * 60 * 1000 + // 24 hours
      30 * 60 * 1000 + // 30 minutes
      50 * 1000 // 50 seconds
  );

  const [timeLeft, setTimeLeft] = useState(
    targetTimeRef.current - new Date().getTime()
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(targetTimeRef.current - new Date().getTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // convert ms → days, hours, minutes, seconds
  const days = Math.max(0, Math.floor(timeLeft / (1000 * 60 * 60 * 24)));
  const hours = Math.max(
    0,
    Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const minutes = Math.max(
    0,
    Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
  );
  const seconds = Math.max(0, Math.floor((timeLeft % (1000 * 60)) / 1000));

  // helper to render each unit (split digits into separate boxes)
  const renderBox = (value, label) => {
    const digits = String(value).padStart(2, "0").split(""); // always 2 digits
    return (
      <Box sx={{ textAlign: "center" }}>
        <Box sx={{ display: "flex", gap: "4px", justifyContent: "center" }}>
          {digits.map((digit, idx) => (
            <Box
              key={idx}
              sx={{
                background: "#EDEDEF",
                color: "#212123",
                fontSize: { xs: "28px", sm: "56px" },
                fontWeight: 500,
                borderRadius: "12px",
                minWidth: { xs: "36px", sm: "48px" },
                height: { xs: "54px", sm: "72px" },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
              }}
            >
              {digit}
            </Box>
          ))}
        </Box>
        <Typography
          sx={{
            mt: 1,
            fontSize: { xs: "10px", sm: "16px" },
            letterSpacing: "2px",
            color: "#EDEDEF",
          }}
        >
          {label}
        </Typography>
      </Box>
    );
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "90vh",
        backgroundImage: "url('/backgorund.png')",
        backgroundSize: "cover",

        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        // justifyContent: "center",

        alignItems: "center",
        pt: { xs: 12, sm: 16, xl: 36 },
      }}
    >
      {/* Coming Soon Image */}
      <Box sx={{ maxWidth: "700px", width: "100%" }}>
        <Image
          src={Coming}
          alt="Coming Soon"
          style={{ width: "100%", height: "auto", objectFit: "contain" }}
        />
      </Box>

      {/* Countdown Timer */}
      <Box
        sx={{
          display: "flex",
          gap: { xs: "8px", md: "32px" },
          justifyContent: "center",
          mt: { xs: 4, md: 8 },
        }}
      >
        {renderBox(days, "DAYS")}
        {renderBox(hours, "HOURS")}
        {renderBox(minutes, "MINUTES")}
        {renderBox(seconds, "SECONDS")}
      </Box>

      {/* Subtitle */}
      <Typography sx={{ color: "#EDEDEF", mt: 4, fontSize: "16px" }}>
        Stay Tuned, Something Special is Coming
      </Typography>
    </Box>
  );
}
