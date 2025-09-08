import { Box, Typography } from "@mui/material";
import Image from "next/image";
import leftSide from "@/app/_assets/png/Trans.png";
import rightSide from "@/app/_assets/png/Solid.png";
import Link from "next/link";
import NavBar from "../navBar/NavBar";

export default function NavScreen() {
  return (
    <Box sx={{ bgcolor: "#000" }}>
      <Box
        sx={{
          maxWidth: "1440px",
          width: "100%",

          m: "auto",
        }}
      >
        {/* nav */}
        <NavBar />

        {/* <Box
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
        </Box> */}

        {/* hero */}
        <Box
          sx={{
            width: "100%",
            p: { xs: " 16px ", md: "16px 80px" },
            bgcolor: "#000",
            m: "auto",
            display: "flex",
            alignItems: "center",
            height: { xs: "80vh", sm: "90vh" },
            justifyContent: { xs: "center" },
          }}
        >
          <Box
            sx={{
              display: { xs: "none", sm: "block" },

              maxWidth: { lg: "630px", sm: "450px", sm: "550px" },
              minWidth: { lg: "550px", md: "420px", sm: "250px", xs: "100%" },
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
            <Typography
              // variant="h2"
              sx={{
                fontSize: { sm: 28, md: 38, lg: 48 },
                fontWeight: "400",
                textTransform: "uppercase",

                // bgcolor: "#4a4949ff",

                width: "100%",
                color: "#fff",
                textAlign: "center",
                // mt: "-10px",
                mx: "auto",
              }}
            >
              Product Design
            </Typography>
          </Box>

          <Box
            sx={{
              display: { xs: "none", sm: "block" },
              maxWidth: { lg: "630px", sm: "450px", sm: "550px" },
              minWidth: { lg: "550px", md: "420px", sm: "250px", xs: "100%" },
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
            <Typography
              sx={{
                fontSize: { sm: 28, md: 38, lg: 48 },
                fontWeight: "400",
                textTransform: "uppercase",

                // bgcolor: "#4a4949ff",
                width: "100%",
                color: "#fff",
                textAlign: "center",
              }}
            >
              3D Visual Design
            </Typography>
          </Box>

          <Box
            sx={{
              // bgcolor: "#ccc",
              display: { xs: "block", sm: "none" },
              width: "100%",
              maxWidth: "300px",
            }}
          >
            <Link href="/comingsoon">
              <Image
                src={leftSide}
                alt="logo"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </Link>
            <Typography
              sx={{
                fontSize: "20px",
                // bgcolor: "#49494990",
                pr: "3px",
                width: "100%",
                color: "#fff",
                textAlign: "center",
                textTransform: "uppercase",
              }}
            >
              Product Design
            </Typography>
          </Box>
          <Box
            sx={{
              // bgcolor: "#ccc",
              display: { xs: "block", sm: "none" },
              width: "100%",
              maxWidth: "300px",
            }}
          >
            <Link href="/homePage">
              <Image
                src={rightSide}
                alt="logo"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </Link>
            <Typography
              sx={{
                fontSize: "20px",

                // bgcolor: "#49494990",
                width: "100%",

                color: "#fff",
                textAlign: "center",
                textTransform: "uppercase",
              }}
            >
              3D Visual Design
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
