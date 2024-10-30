"use client";

import Icon from "@/app/_assets/svg/qs-list.svg";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Image from "next/image";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  borderBottom: "1px solid #D6D6D6",
  bgcolor: "red ",
  maxWidth: "500px",
  "&:last-of-type": {
    borderBottom: {
      md: "none",
      sm: "1px solid #D6D6D6",
      xs: "1px solid #D6D6D6",
    },
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<Image src={Icon} alt="icon" />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "#000",
  flexDirection: "row-reverse",
  color: "#E6E6E6",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(2),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(0),
  backgroundColor: "#000",
  color: "#E6E6E6 !important",
}));

export default function Question({
  qs,
  ans,
  panelNo,
  expanded,
  handleExpands,
}) {
  return (
    <Accordion expanded={expanded} onChange={() => handleExpands(panelNo)}>
      <AccordionSummary
        sx={{ padding: { md: "10px 0 ", sm: "5px 0", xs: "5px 0" } }}
      >
        <Typography sx={{ fontSize: "17px", fontFamily: "Avenir !important" }}>
          {qs}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography
          sx={{
            padding: {
              md: "0px 0 20px 60px",
              sm: "0 0 10px 47px",
              xs: "0px 0 10px 47px",
            },
            fontFamily: "Avenir3 !important",
            fontSize: "14px",
          }}
        >
          {ans}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}
