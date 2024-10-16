"use client";

import { Box, Typography } from "@mui/material";
import Button from "@/app/_components/button/Button";
import Image from "next/image";
import Background from "@/app/_assets/png/discover-bg.png";
import Link from "next/link";

const Discover = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: { xs: "280px", sm: "360px", lg: "562px" },
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Image
          src={Background}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <Box
          sx={{
            textAlign: "center",
            position: "absolute",
            left: "50%",
            top: "60%",
            transform: "translate(-50%, -50%)",
            width: { xs: "70%", sm: "50%" },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: "24px", sm: "30px", lg: "50px" },
              fontWeight: 600,
              color: "var(--text-main)",
              marginBottom: { xs: "50px", sm: "30px", lg: "140px" },
            }}
          >
            Want your product to standout in the competition?
          </Typography>
          <Link href="/case-study">
            <Button text="Discover More" />
          </Link>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: { xs: "47px", sm: "60px", lg: "120px" },
          display: "flex",
          alignItems: "end",
          justifyContent: "center",
          columnGap: { xs: "60px", lg: "160px" },
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Typography
            sx={{
              color: "#FAFAFA",
              fontSize: { xs: "20px", sm: "28px", lg: "60px" },
              lineHeight: "100%",
            }}
          >
            145+
          </Typography>
          <Typography sx={{ fontSize: { xs: "6px", sm: "8px", lg: "12px" } }}>
            Clients
          </Typography>
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <Typography
            sx={{
              color: "#FAFAFA",
              fontSize: { xs: "20px", sm: "28px", lg: "60px" },
              lineHeight: "100%",
            }}
          >
            328+
          </Typography>
          <Typography sx={{ fontSize: { xs: "6px", sm: "8px", lg: "12px" } }}>
            Projects
          </Typography>
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <Typography
            sx={{
              color: "#FAFAFA",
              fontSize: { xs: "20px", sm: "28px", lg: "60px" },
              lineHeight: "100%",
            }}
          >
            67+
          </Typography>
          <Typography sx={{ fontSize: { xs: "6px", sm: "8px", lg: "12px" } }}>
            Experts
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Discover;
