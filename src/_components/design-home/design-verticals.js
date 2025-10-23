"use client";

import { Box, Grid2, Typography } from "@mui/material";
import Image from "next/image";
import designimage1 from "@/_assets/svg/designIcon/designimage1.svg";
import designimage2 from "@/_assets/svg/designIcon/designimage2.svg";
import designimage3 from "@/_assets/svg/designIcon/designIcon3.svg";
import designimage4 from "@/_assets/svg/designIcon/designIcon4.svg";
import designimage5 from "@/_assets/svg/designIcon/designIcon.svg";
import designimage6 from "@/_assets/svg/designIcon/designIcon6.svg";
import designimage7 from "@/_assets/svg/designIcon/designIcon7.svg";
import designimage8 from "@/_assets/svg/designIcon/designIcon8.svg";
import designimage9 from "@/_assets/svg/designIcon/designIcon9.svg";

const DesignVerticals = () => {
  const data = [
    {
      icon: designimage1,
      heading: "Industrial Concept Design",
      des: "Validating idea into feasible design ideology and concept sketches",
    },
    {
      icon: designimage2,
      heading: "Design For Manufacturing",
      des: "Turnkey solution from ideation to prototyping, we got you covered.",
    },
    {
      icon: designimage3,
      heading: "CAD & Mechanical Engineering",
      des: "Amazing designs and rework over on any mechanical system",
    },
    {
      icon: designimage4,
      heading: "Electronics Engineering & PCB Design",
      des: "Seamless connection and smart integration by professionals",
    },
    {
      icon: designimage5,
      heading: "Simulation & CFD",
      des: "Testing everything in a computer environment to ensure a foolproof design",
    },
    {
      icon: designimage6,
      heading: "Prototyping",
      des: "Integrating good design work into a final tangible product crafted with precision",
    },
    {
      icon: designimage7,
      heading: "Product Renders",
      des: "Visualize your product with market valid materials and environment.",
    },
    {
      icon: designimage8,
      heading: "Reverse Engineering",
      des: "Reinvent components or products with our team to stand out in the competition",
    },
    {
      icon: designimage9,
      heading: "Consultancy for Manufacturing",
      des: "With our experienced team find reliable manufacturers all around the globe",
    },
  ];

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
          Design Verticals
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
          With the essence of design & aesthetics, we create products that are
          symphonies in the noise.
        </Typography>
        <Box
          sx={{
            width: "100%",
            height: "400px",
            my: { xs: "20px ", md: "30px ", lg: " 48px" },
          }}
        >
          <video
            src="/video/bidet-buddy-snip.mp4"
            alt="bidet-buddy-snip"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            autoPlay
            loop
            muted
          />
        </Box>

        <Grid2
          container
          width={"100%"}
          spacing={{ xs: 2, md: 4, lg: 5 }}
          sx={{ justifyContent: "center" }}
        >
          {data.map((items, i) => {
            return (
              <Grid2 key={i} size={{ xs: 6, md: 4 }}>
                <Cards
                  heading={items.heading}
                  des={items.des}
                  image={items.icon}
                />
              </Grid2>
            );
          })}
        </Grid2>

        {/* <Typography
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
        </Typography> */}
      </Box>
    </Box>
  );
};

export const Cards = ({ heading, des, image }) => {
  return (
    <Box
      onClick={() => console.log(id)}
      sx={{
        width: "100%",

        // maxWidth: "400px",
        bgcolor: "#000",
        p: { xs: "4px" },
        borderRadius: { xs: "12px", sm: "16px" },
        border: "1px solid #434245",

        "&:hover ": {
          // bgcolor: "red",
          background:
            "linear-gradient(120deg, #434245 0%, #434245 70%, #636161ff 100%)",
        },
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          gap: "8px",
          borderRadius: { xs: "12px" },
          p: { xs: "6px 4px", md: "8px" },
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: { xs: "center", md: "flex-start" },
          borderBottom: "1px solid  #646268",
        }}
      >
        <Box
          sx={{
            maxWidth: { xs: "32px", lg: "48px" },

            width: "100%",
            height: { xs: "32px", lg: "48px" },
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
        <Typography
          sx={{
            fontSize: { xs: "10px", md: "12px", lg: "16px" },
            color: "#EDEDEF",
            fontWeight: 400,
            textAlign: { xs: "center", md: "left" },
            fontFamily: "Avenir !important",
            textTransform: "uppercase",
          }}
        >
          {heading}
        </Typography>
      </Box>
      <Typography
        sx={{
          p: { xs: "4px", md: "16px" },
          mt: { xs: "4px", md: "10px" },
          fontSize: { xs: "10px", md: "12px", lg: "16px" },
          color: "#EDEDEF",
          fontFamily: "Avenir3 !important",
          textTransform: "capitalize",
          textAlign: { xs: "center", lg: "left" },
          height: { xs: "60px", md: "100px" },
        }}
      >
        {des}
      </Typography>
    </Box>
  );
};
export default DesignVerticals;
