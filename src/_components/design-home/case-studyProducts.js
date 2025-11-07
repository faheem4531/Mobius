"use client";

import { useEffect, useState } from "react";
import { Box, Grid2, Typography, CircularProgress } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

const CaseStudyProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("/api/caseStudies");
        const result = await response.json();
        if (result.success) {
          setProducts(result.data[0].caseStudies);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);
  // ✅ Loader while data is fetching
  if (loading) {
    return (
      <Box
        sx={{
          height: "40vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CircularProgress sx={{ color: "white" }} />
      </Box>
    );
  }
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
          padding: { xs: "32px 20px", md: "40px", lg: "80px" },
        }}
      >
        <Grid2 container spacing={{ xs: 2, md: 3 }}>
          {products.map((item) => (
            <Grid2 key={item.id} size={item.size}>
              <Cards
                slug={item.slug}
                ProName={item.ProName}
                indName={item.indName}
                image={item.image}
              />
            </Grid2>
          ))}
        </Grid2>
      </Box>
    </Box>
  );
};

export const Cards = ({ ProName, indName, image, slug }) => {
  const router = useRouter();
  return (
    <Box
      onClick={() => router.push(`/product-design/case-studies/${slug}`)}
      sx={{
        width: "100%",
        borderRadius: { xs: "4px", sm: "8px" },
        border: "1px solid rgba(67, 66, 69, 1)",
        height: { xs: "172px", sm: "300px", md: "340px", lg: "440px" },
      }}
    >
      <Box sx={{ width: "100%", height: "100%" }}>
        <Image
          src={image}
          alt={ProName}
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
          borderRadius: { xs: "0 0 5px 5px", md: "0 0 12px 12px" },
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
