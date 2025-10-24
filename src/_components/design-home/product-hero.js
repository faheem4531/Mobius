import { Box, Typography } from "@mui/material";
import HeadingSection from "./heading-section";
import img1 from "@/_assets/svg/case-study/img1.svg";
import img2 from "@/_assets/svg/case-study/img2.svg";
import img3 from "@/_assets/svg/case-study/img3.svg";
import img4 from "@/_assets/svg/case-study/img4.svg";
import img5 from "@/_assets/svg/case-study/img5.svg";
import img6 from "@/_assets/svg/case-study/img6.svg";
import img7 from "@/_assets/svg/case-study/img7.svg";
import img8 from "@/_assets/svg/case-study/img8.svg";
import Image from "next/image";
import NavBar from "../navBar/NavBar";

export default function ProductHero() {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 50.48%, #000000 100%)",
        backgroundImage: "url(/bgimage-case-study].png)",

        background: " rgba(33, 33, 35, 0.4)",

        backgroundRepeat: "no-repeat",
        backgroundSize: { xs: "120% 100%", sm: "100% 100%" },
        backgroundPosition: { xs: "center top", sm: "center" },

        // height: "100vh",
      }}
    >
      <NavBar />

      <Box
        sx={{
          maxWidth: "1440px",
          width: "100%",
          display: "flex",
          // backgroundImage: "url(/client-gradient.png)",
          flexDirection: "column",
          alignItems: "center",
          m: "auto",

          padding: {
            xs: " 88px 20px 32px",
            sm: " 128px 20px 32px",
            md: "260px 40px 40px",
            lg: "340px 80px 20px",
          },
        }}
      >
        <HeadingSection
          heading="Our Case Studies"
          description=" Here you can see our work collection"
          sxDescription={{
            maxWidth: { xs: 300, md: 420 },
            width: "100%",
            // display: { xs: "none", md: "block" },
            margin: { xs: "8px 0 32px", md: "8px 0 48px" },
          }}
        />

        <Box
          sx={{
            py: { md: "24px" },
            textAlign: "center",
            width: "100%",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              textAlign: "center",
              fontSize: { xs: "16px", md: "20px" },
              textTransform: "capitalize",
              fontFamily: {
                xs: "Avenir3 !important",
              },
            }}
          >
            Tools we work in
          </Typography>

          <Box
            sx={{
              mt: { xs: 2, md: 3 },
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: { xs: 1, md: 3, lg: 6 },
            }}
          >
            {[img1, img2, img3, img4, img5, img6, img7, img8].map(
              (card, index) => (
                <Box
                  key={index}
                  sx={{
                    width: { xs: 36, md: 72 },
                    aspectRatio: "1 / 1",
                  }}
                >
                  <Image
                    src={card}
                    alt={`icon-${index}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Box>
              )
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
