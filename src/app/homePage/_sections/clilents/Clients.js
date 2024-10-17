"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Marquee from "react-fast-marquee";

import Avancus from "@/app/_assets/clients/avancus.svg";
import Elevant from "@/app/_assets/clients/elevant.svg";
import Fonestar from "@/app/_assets/clients/fonestar.svg";
import FormulaZ from "@/app/_assets/clients/formulaZ.svg";
import Houduo from "@/app/_assets/clients/houduo.svg";
import LightOne from "@/app/_assets/clients/light-one.svg";
import Luna from "@/app/_assets/clients/luna.svg";
import Metaleon from "@/app/_assets/clients/metaleon-society.svg";
import PillPuncher from "@/app/_assets/clients/pill-puncher.svg";
import Sony from "@/app/_assets/clients/sony.svg";
import Review from "./ReviewCard";

const Clients_data = [
  {
    id: "Sony",
    logo: Sony,
  },
  {
    id: "Luna",
    logo: Luna,
  },
  {
    id: "Elevant",
    logo: Elevant,
  },
  {
    id: "Fonestar",
    logo: Fonestar,
  },
  {
    id: "FormulaZ",
    logo: FormulaZ,
  },
  {
    id: "Houduo",
    logo: Houduo,
  },
  {
    id: "PillPuncher",
    logo: PillPuncher,
  },
  {
    id: "Avancus",
    logo: Avancus,
  },
  {
    id: "Metaleon",
    logo: Metaleon,
  },
  {
    id: "LightOne",
    logo: LightOne,
  },
];

const Clients = () => {
  return (
    <Box
      sx={{
        padding: { xs: "20px 0 0", md: "70px 0", lg: "110px 0" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundImage: "url('/_assets/png/clients-bg.png')",
        backgroundSize: "cover",
      }}
    >
      <Typography
        variant="h3"
        sx={{ fontSize: { xs: "16px", md: "20px" }, fontWeight: 300 }}
      >
        Clients
      </Typography>
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: "24px", md: "30px", lg: "38px" },
          fontWeight: { xs: 400, md: 500, lg: 600 },
          color: "var(--text-main)",
          margin: { xs: "20px 0", md: "30px 0", lg: "35px 0 70px" },
          textAlign: "center",
        }}
      >
        Here are some of our Favorite Clients
      </Typography>
      <Marquee
        style={{ overflow: "hidden" }}
        speed={30}
        pauseOnHover={true}
        gradient={false}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mt: "20px",
            justifyContent: "center",
          }}
        >
          {Clients_data.map((items) => (
            <Box
              key={items.id}
              sx={{
                width: { xs: "103px", md: "128px", lg: "246px" },
                height: { xs: "70px", md: "84px", lg: "166px" },
                marginRight: { xs: "4px", md: "6px", lg: "10px" },
                flexShrink: 0,
              }}
            >
              <Image
                src={items.logo}
                alt="client logo"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </Box>
          ))}
        </Box>
      </Marquee>

      <Box
        sx={{
          marginTop: { xs: "60px", md: "70px", lg: "120px" },
          textAlign: "center",
        }}
      >
        <Typography
          variant="h3"
          sx={{ fontSize: { xs: "16px", md: "20px" }, fontWeight: 300 }}
        >
          Testimonial
        </Typography>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "24px", md: "30px", lg: "38px" },
            fontWeight: { xs: 400, md: 500, lg: 600 },
            color: "var(--text-main)",
            margin: { xs: "30px 0", md: "30px 0", lg: "35px 0 70px" },
            textAlign: "center",
          }}
        >
          Don’t take our word for the work quality
        </Typography>
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
              width: { sm: "fit-content", xs: "fit-content", md: "100%" },
            }}
          >
            <Review name="Angelina Molnar" />
            <Review name="Cehan Alee" />
            <Review name="Hale Allon" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Clients;
