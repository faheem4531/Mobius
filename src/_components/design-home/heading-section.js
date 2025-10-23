"use client";

import { Typography, Box } from "@mui/material";
import PropTypes from "prop-types";

const HeadingSection = ({
  heading,
  description,
  sxHeading,
  sxDescription,
  mobDes,
  sxmobDes,
}) => {
  return (
    <Box sx={{ textAlign: "center" }}>
      {heading && (
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: "16px", md: "20px" },
            textTransform: "capitalize",
            fontFamily: { xs: "Avenir3 !important", md: "Avenir3 !important" },
            ...sxHeading,
          }}
        >
          {heading}
        </Typography>
      )}

      {description && (
        <Typography
          variant="h1"
          sx={{
            px: { xs: 3, lg: 6 },
            fontWeight: 500,
            fontSize: { xs: "24px", md: "30px", lg: "32px" },
            color: "var(--text-main)",
            fontFamily: "Avenir5 !important",
            textAlign: "center",
            lineHeight: { xs: "32px", md: "48px" },
            textTransform: "capitalize",
            ...sxDescription,
          }}
        >
          {description}
        </Typography>
      )}
      {mobDes && (
        <Typography
          variant="h1"
          sx={{
            display: { xs: "block", md: "none" },

            px: { xs: 3, lg: 6 },

            fontWeight: 500,
            fontSize: { xs: "24px", md: "30px", lg: "32px" },
            color: "var(--text-main)",
            fontFamily: "Avenir5 !important",
            textAlign: "center",
            lineHeight: { xs: "32px", md: "48px" },
            textTransform: "capitalize",
            ...sxmobDes,
          }}
        >
          {mobDes}
        </Typography>
      )}
    </Box>
  );
};

// ✅ PropTypes (JS version me type checking)
HeadingSection.propTypes = {
  heading: PropTypes.string,
  description: PropTypes.string,
  sxHeading: PropTypes.object,
  sxmobDes: PropTypes.object,
  sxDescription: PropTypes.object,
  mobDes: PropTypes.string,
};

export default HeadingSection;
