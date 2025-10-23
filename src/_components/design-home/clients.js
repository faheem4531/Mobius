"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Marquee from "react-fast-marquee";

import Avancus from "@/_assets/clients/avancus.svg";
import Elevant from "@/_assets/clients/elevant.svg";
import Fonestar from "@/_assets/clients/fonestar.svg";
import FormulaZ from "@/_assets/clients/formulaZ.svg";
import Houduo from "@/_assets/clients/houduo.svg";
import LightOne from "@/_assets/clients/light-one.svg";
import Luna from "@/_assets/clients/luna.svg";
import Metaleon from "@/_assets/clients/metaleon-society.svg";
import PillPuncher from "@/_assets/clients/pill-puncher.svg";
import Sony from "@/_assets/clients/sony.svg";
import HeadingSection from "./heading-section";

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
        backgroundImage: "url(/bg-clients-glow.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: { xs: "120% 100%", sm: "100% 100%" },
        backgroundPosition: { xs: "center top", sm: "center" },
      }}
    >
      <Box
        sx={{
          padding: { xs: "50px 0 40px", md: "70px 0", lg: "150px 0" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",

          backgroundImage: "url(/client-gradient.png)",
          backgroundSize: { xs: "100% 100%", sm: "100% 100%" },
          backgroundPosition: "contain",
        }}
      >
        <HeadingSection
          heading="Clients"
          description="Here are some of our Favorite Clients"
          sxDescription={{
            px: { xs: 4, lg: 6 },
            margin: { xs: "20px 0", md: "30px 0", lg: "35px 0 70px" },
          }}
        />

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
      </Box>
    </Box>
  );
};

export default Clients;
