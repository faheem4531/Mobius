import { Box } from "@mui/material";
import Image from "next/image";
import logo from "@/app/_assets/svg/logo.svg";
import leftSide from "@/app/_assets/png/leftSide.png";
import rightSide from "@/app/_assets/png/rightSide.png";
import Link from "next/link";

export default function NavScreen() {
  return (
    <Box sx={{ bgcolor: "#000" }}>
      <Box
        sx={{
          maxWidth: "1440px",
          width: "100%",
          // p: { lg: "16px 80px" },
          m: "auto",
        }}
      >
        {/* nav */}
        <Box
          sx={{
            width: "100%",
            p: { xs: "16px", sm: "16px 80px" },
            bgcolor: "#000",
            m: "auto",
            display: "flex",
          }}
        >
          <Box
            sx={{
              width: "64px",
              height: "64px",
            }}
          >
            <Image
              src={logo}
              alt="logo"
              style={{ width: "100%", height: "100%" }}
            />
          </Box>
        </Box>

        {/* hero */}
        <Box
          sx={{
            width: "100%",
            p: { xs: "16px", sm: "16px 80px" },
            bgcolor: "#000",
            m: "auto",
            display: "flex",
            // gap: { xs: "20px", sm: "0px" },
            justifyContent: { xs: "space-between", sm: "center" },
          }}
        >
          <Box
            sx={{
              display: { xs: "none", sm: "block" },

              maxWidth: { lg: "630px", sm: "450px", sm: "550px" },
              minWidth: { lg: "550px", md: "420px", sm: "550px", xs: "100%" },
              height: "auto",
            }}
          >
            <Link href="/comingsoon">
              <video
                src="/video/Product design _ left.webm"
                alt="3d video consumer electronics"
                style={{
                  width: "100%",
                  height: "100%",
                }}
                autoPlay
                loop
                muted
              />
            </Link>
          </Box>

          <Box
            sx={{
              display: { xs: "none", sm: "block" },
              maxWidth: { lg: "630px", sm: "450px", sm: "550px" },
              minWidth: { lg: "550px", md: "420px", sm: "550px", xs: "100%" },
              height: "auto",
            }}
          >
            <Link href="/homePage">
              <video
                src="/video/3d Animation (2).webm"
                alt="3d video consumer electronics"
                style={{
                  width: "100%",
                  height: "100%",
                }}
                autoPlay
                loop
                muted
              />
            </Link>
          </Box>

          <Box
            sx={{
              display: { xs: "block", sm: "none" },
              width: "250px",
            }}
          >
            <Link href="/comingsoon">
              <Image
                src={leftSide}
                alt="logo"
                style={{ width: "100%", height: "100%" }}
              />
            </Link>
          </Box>
          <Box
            sx={{
              display: { xs: "block", sm: "none" },
              width: "250px",
            }}
          >
            <Link href="/homePage">
              <Image
                src={rightSide}
                alt="logo"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
