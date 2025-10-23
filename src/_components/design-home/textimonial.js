import { Box, Typography } from "@mui/material";
import Image from "next/image";
import ImageReview from "@/_assets/png/ImageReview.png";

const ReviewTestmonial = ({ name }) => {
  return (
    <Box
      sx={{
        backgroundImage: "url('/clients-bg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box
        sx={{
          // maxWidth: { xs: "400px" },
          width: { xs: "300px", md: "400px" },
          padding: { xs: "16px", md: "24px" },
          textAlign: "start",
          borderRadius: "24px",
          border: "var(--border-lite-3)",
          background: "linear-gradient(var(--bg-gradient-1))",
        }}
      >
        <Box sx={{ display: "flex", gap: "8px" }}>
          <Box sx={{ width: { xs: "48px", md: "64px" }, aspectRatio: "1/1" }}>
            <Image
              src={ImageReview}
              alt="ImageReview"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </Box>

          <Box>
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: "14px", md: "18px" },
                fontWeight: 400,
                color: "#EDEDEF",
                fontFamily: "Avenir !important",
                textTransform: "capitalize",
              }}
            >
              {name}
            </Typography>

            <div>
              {/* ⭐ SVG stars */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="98"
                height="19"
                viewBox="0 0 98 19"
                fill="none"
              >
                {[...Array(5)].map((_, i) => (
                  <path
                    key={i}
                    d="M10.0186 0.078125L12.8324 5.50308L19.2914 6.29697L14.5715 10.4437L15.7495 16.3593L10.0186 13.4971L4.28765 16.3593L5.46561 10.4437L0.745753 6.29697L7.20468 5.50308L10.0186 0.078125Z"
                    transform={`translate(${i * 19}, 0)`}
                    fill="#BC9362"
                  />
                ))}
              </svg>
            </div>
          </Box>
        </Box>

        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "12px", md: "16px" },
            padding: "32px 0",
            color: "#EDEDEF",
            lineHeight: "120%",
            fontFamily: "Avenir3 !important",
          }}
        >
          “Regardless of the type of testimonial you like to use, letting people
          know exactly what benefits your product or service can offer them in
          the words of people. Product or service can offer them in the words of
          people.”
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "14px", md: "18px" },
            color: "#EDEDEF",
            fontFamily: "Avenir3 !important",
            textTransform: "capitalize",
          }}
        >
          coordinator at -{" "}
          <Typography
            component="span"
            sx={{
              fontSize: { xs: "14px", md: "18px" },
              fontWeight: 500,
              color: "#FFFFFF",
              fontStyle: "italic",
              fontFamily: "Avenir !important",
            }}
          >
            Luna
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
};

export default ReviewTestmonial;
