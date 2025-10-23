"use client";

import Icon from "@/_assets/svg/qs-list.svg";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { color } from "three/examples/jsm/nodes/Nodes.js";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  borderBottom: "1px solid #D6D6D6",
  backgroundColor: "#000",
  maxWidth: "600px",
  "&::before": { display: "none" },
}));

const AccordionSummary = styled((props) => <MuiAccordionSummary {...props} />)(
  ({ theme }) => ({
    flexDirection: "row", // keep normal order
    color: "#E6E6E6",
    backgroundColor: "#000",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between", // pushes icon to end
    "& .MuiAccordionSummary-content": {
      marginLeft: 0,
      display: "flex",
      alignItems: "center",
    },
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
      transform: "rotate(90deg)",
    },
  })
);

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(0),
  backgroundColor: "#000",
  color: "#E6E6E6",
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
        expandIcon={<Image src={Icon} alt="icon" />}
        sx={{
          padding: { md: "10px 0", sm: "5px 0", xs: "5px 0" },
        }}
      >
        <Typography
          sx={{
            fontSize: "17px",
            fontFamily: "Avenir !important",
          }}
        >
          {qs}
        </Typography>
      </AccordionSummary>

      <AccordionDetails>
        <Typography
          sx={{
            padding: {
              md: "0px 0 20px 0px",
              sm: "0 0 10px 0px",
              xs: "0px 0 10px 0px",
            },
            color: "#a7a4ad",
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
