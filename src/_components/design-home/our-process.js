"use client";

import { Box, Grid2, Typography } from "@mui/material";
import Image from "next/image";
import image1 from "@/_assets/png/numberImages/1.png";
import image2 from "@/_assets/png/numberImages/2.png";
import image3 from "@/_assets/png/numberImages/3.png";
import image4 from "@/_assets/png/numberImages/4.png";
import image5 from "@/_assets/png/numberImages/5.png";
import image6 from "@/_assets/png/numberImages/6.png";
import image7 from "@/_assets/png/numberImages/7.png";
import image8 from "@/_assets/png/numberImages/8.png";
import designimage7 from "@/_assets/svg/designIcon/designIcon7.svg";

const OurProcess = () => {
  const designData = [
    {
      id: 1,
      heading: "Design Consultation",
      icon: designimage7,
      image: image1,
      items: [
        "Establish design brief",
        "Projected timescales",
        "Development budget",
        "Written quotation",
      ],
    },
    {
      id: 2,
      heading: "Concept & Feasibility",
      icon: designimage7,
      image: image2,
      items: [
        "Feasibility research",
        "Competitor research",
        "Idea generation",
        "Conceptual designs",
        "Patent Research",
      ],
    },
    {
      id: 3,
      heading: "Detailed CAD Design",
      icon: designimage7,
      image: image3,
      items: [
        "Engineered solutions",
        "Design for manufacture",
        "3D CAD modelling",
        "Prototyping data",
      ],
    },
    {
      id: 4,
      heading: "Electronics & PCB Design",
      icon: designimage7,
      image: image4,
      items: [
        "Engineering Drawings",
        "Prepare data files",
        "Files for Laser Cutting etc",
        "Conceptual designs",
        "Present & review",
      ],
    },
    {
      id: 5,
      heading: "Prototype & Testing",
      icon: designimage7,
      image: image5,
      items: [
        "Rapid prototyping",
        "CNC, SLS, SLA, FDM",
        "Prototype assembly",
        "Test, review, record",
        "3D Printing",
      ],
    },
    {
      id: 6,
      heading: "Design Optimization",
      icon: designimage7,
      image: image6,
      items: [
        "Design feedback",
        "Design revision",
        "Computer simulation",
        "Re-prototype & test",
      ],
    },
    {
      id: 7,
      heading: "Product Visualization",
      icon: designimage7,
      image: image7,
      items: [
        "Photo realistic visuals",
        "Product animations",
        "Artwork for instructions",
        "Branding & packaging",
      ],
    },
    {
      id: 8,
      heading: "Manufacturing Consultancy",
      icon: designimage7,
      image: image8,
      items: [
        "Find suitable manufacturer",
        "Production support",
        "Negotiation",
        "Quality Control",
      ],
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
          Our process
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
          Crystal clear process to help non-technical clients with the technical
          workflow.
        </Typography>
        <Box
          sx={{
            width: "100%",
          }}
        >
          {designData.map((items, i) => {
            return (
              <Box
                key={i}
                sx={{
                  display: "flex",
                  mb: i !== 7 && { xs: "24px", md: "30px", lg: "40px" },
                  justifyContent: "flex-end",
                  alignItems: i % 2 !== 0 ? "flex-end" : "flex-start",
                  width: "100%",
                  flexDirection: "column",
                }}
              >
                <Cards
                  id={items.id}
                  heading={items.heading}
                  icon={items.icon}
                  image={items.image}
                  liData={items.items}
                />
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export const Cards = ({ heading, icon, liData, image, id }) => {
  return (
    <Box
      onClick={() => console.log(id)}
      sx={{
        width: "100%",
        maxWidth: { xs: "320px", sm: "400px", md: "500px", lg: "680px" },
        bgcolor: "#000",
        p: { xs: "8px", md: "12px 8px" },
        borderRadius: { xs: "12px", sm: "16px" },
        border: "1px solid #434245",
        position: "relative",
        zIndex: 2,
        mt: { xs: "30px", md: "40px", lg: "50px" },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          zIndex: 8,
          right: 0,
          top: { xs: -30, md: -40, lg: -50 },
          maxWidth: { xs: "72px", md: "120px", lg: "160px" },
          height: { xs: "74px", md: "100px", lg: "142px" },
          width: "100%",
        }}
      >
        <Image
          src={image}
          alt="logo"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          gap: "8px",
          borderRadius: { xs: "12px" },
          p: { xs: "8px" },
          alignItems: "center",
          flexDirection: { xs: "row", md: "row" },
          justifyContent: { xs: "flex-start" },
          // borderBottom: "1px solid  #646268",
        }}
      >
        <Box
          sx={{
            maxWidth: { xs: "36px", md: "50px", lg: "80px" },

            width: "100%",
            height: { xs: "36px", md: "50px", lg: "80px" },
          }}
        >
          <Image
            src={icon}
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
            fontSize: { xs: "14px", md: "18px", lg: "24px" },
            color: "#EDEDEF",
            fontWeight: 400,
            textAlign: { xs: "left" },
            fontFamily: "Avenir !important",
            textTransform: "uppercase",
          }}
        >
          {heading}
        </Typography>
      </Box>

      <Box
        component="ul"
        sx={{
          width: "100%",
          p: { xs: "4px" },
          mt: { xs: "4px", md: "10px" },
          textWrap: "wrap",
          height: { lg: "112px" },
          listStyleType: "disc",
          pl: { xs: 1, lg: 2 },
          display: "grid",
          gridAutoFlow: { sm: "column" },
          gridTemplateRows: { xs: "1fr", sm: "repeat(3, auto)" },
          gridAutoColumns: "1fr",
          // columnGap: { xs: "16px", md: "24px" },
          // gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
        }}
      >
        {liData.map((item, i) => (
          <Typography
            key={i}
            component="li"
            sx={{
              listStyleType: "disc", // ensure dots visible
              textWrap: "wrap",
              fontSize: { xs: "12px", md: "14px", lg: "20px" },
              color: "#EDEDEF",
              fontFamily: "Avenir3 !important",
              textTransform: "capitalize",
              textAlign: { xs: "left" },
              ml: { xs: "10px", md: "20px" }, // thoda margin for spacing
            }}
          >
            {item}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};
export default OurProcess;
