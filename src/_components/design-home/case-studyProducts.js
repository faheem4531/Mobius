"use client";

import { Box, Grid2, Typography } from "@mui/material";
const products = [
  {
    id: 1,
    ProName: "KYS Norway",
    indName: "Appliances",
    image: "/work/kys.jpeg",
    size: { xs: 12, md: 6.5 },
  },
  {
    id: 2,
    ProName: "Wosler",
    indName: "Medical Tech",
    image: "/work/wosler.jpeg",
    size: { xs: 6, md: 5.5 },
  },
  {
    id: 3,
    ProName: "SmartFoil",
    indName: "Adventure sports",
    image: "/work/smart-foil.jpeg",
    size: { xs: 6, md: 3.1 },
  },
  {
    id: 4,
    ProName: "Umbrella Mount",
    indName: "Industry",
    image: "/work/umbrella-mount.jpeg",
    size: { xs: 12, md: 4.65 },
  },
  {
    id: 5,
    ProName: "Moodieband",
    indName: "Toys",
    image: "/work/moodieband.jpeg",
    size: { xs: 6, md: 4.25 },
  },
  {
    id: 6,
    ProName: "KYS Norway",
    indName: "Appliances",
    image: "/work/kys.jpeg",
    size: { xs: 6, md: 6.5 },
  },
  {
    id: 7,
    ProName: "Wosler",
    indName: "Medical Tech",
    image: "/work/wosler.jpeg",
    size: { xs: 12, md: 5.5 },
  },
  {
    id: 8,
    ProName: "SmartFoil",
    indName: "Adventure sports",
    image: "/work/smart-foil.jpeg",
    size: { xs: 6, md: 3.15 },
  },
  {
    id: 9,
    ProName: "Umbrella Mount",
    indName: "Industry",
    image: "/work/umbrella-mount.jpeg",
    size: { xs: 6, md: 5.7 },
  },
  {
    id: 10,
    ProName: "Moodieband",
    indName: "Toys",
    image: "/work/moodieband.jpeg",
    size: { xs: 12, md: 3.15 },
  },
  {
    id: 11,
    ProName: "SmartFoil",
    indName: "Adventure sports",
    image: "/work/smart-foil.jpeg",
    size: { xs: 6, md: 3.27 },
  },
  {
    id: 12,
    ProName: "Moodieband",
    indName: "Toys",
    image: "/work/moodieband.jpeg",
    size: { xs: 6, md: 3.27 },
  },
  {
    id: 13,
    ProName: "Umbrella Mount",
    indName: "Industry",
    image: "/work/umbrella-mount.jpeg",
    size: { xs: 12, md: 5.46 },
  },
  {
    id: 14,
    ProName: "KYS Norway",
    indName: "Appliances",
    image: "/work/kys.jpeg",
    size: { xs: 6, md: 6.5 },
  },
  {
    id: 15,
    ProName: "Wosler",
    indName: "Medical Tech",
    image: "/work/wosler.jpeg",
    size: { xs: 6, md: 5.5 },
  },
];

import Image from "next/image";

const CaseStudyProducts = () => {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(180deg, #000000 -8.83%, rgba(0, 0, 0, 0) 50.36%, #000000 108.42%)",
        backgroundImage: "url(/bgimgcasestudy.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: { xs: "120% 100%", sm: "100% 100%" },
        backgroundPosition: { xs: "center top", sm: "right" },
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
        <Grid2 container spacing={{ xs: 2, md: 3 }}>
          {products.map((item) => (
            <Grid2 key={item.id} size={item.size}>
              <Cards
                ProName={item.ProName}
                indName={item.indName}
                image={item.image}
                id={item.id}
              />
            </Grid2>
          ))}
        </Grid2>
      </Box>
    </Box>
  );
};

export const Cards = ({ ProName, indName, image, id }) => {
  return (
    <Box
      onClick={() => console.log(id)}
      sx={{
        width: "100%",
        borderRadius: { xs: "4px", sm: "8px" },
        border: "1px solid rgba(67, 66, 69, 1)",
        height: { xs: "172px", sm: "300px", md: "340px", lg: "440px" },
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
        }}
      >
        <Image
          src={image}
          alt="logo"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: { xs: 4, md: 8 },
            objectFit: "cover",
          }}
          width={1000}
          height={1000}
        />
      </Box>
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          bgcolor: "rgba(0, 0, 0, 0.8)",

          display: "flex",
          alignItems: "center",
          justifyContent: { xs: "space-between" },
          height: { xs: "24px", sm: "43px" },
          borderRadius: {
            xs: "0px 0px 5px  5px ",
            md: "0px 0px 12px  12px ",
          },
          p: { xs: "8px", sm: "16px 8px" },
          mt: { xs: "-24px", sm: "-43px" },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 300,
            fontSize: { xs: "10px", md: "16px" },
            fontFamily: "Avenir3 !important",
            textTransform: "uppercase",
            color: "rgba(255, 255, 255, 1)",
          }}
        >
          {ProName}
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 300,
            fontSize: { xs: "8px", sm: "12px" },
            fontFamily: "Avenir3 !important",
            color: "rgba(255, 255, 255, 1)",
          }}
        >
          {indName}
        </Typography>
      </Box>
    </Box>
  );
};
export default CaseStudyProducts;
