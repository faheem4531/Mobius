"use client";

import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";

import Link from "next/link.js";
// import styles from "../ComponentsStyles.module.css";
import Question from "./Question.js";
const GotQuestions = ({}) => {
  const questions = [
    {
      qs: "What is included in each subscription?",
      ans: "What is included in each subscription?What is included in each subscription?What is included in each subscription?What is included in each subscription?What is included in each subscription?",
      panel: "panel1",
      isexpanded: false,
    },
    {
      qs: "What is included in each subscription?",
      ans: "What is included in each subscription?What is included in each subscription?What is included in each subscription?What is included in each subscription?What is included in each subscription?",
      panel: "panel2",
      isexpanded: false,
    },
    {
      qs: "What is included in each subscription?",
      ans: "What is included in each subscription?What is included in each subscription?What is included in each subscription?What is included in each subscription?What is included in each subscription?",
      panel: "panel3",
      isexpanded: false,
    },
    {
      qs: "What is included in each subscription?",
      ans: "What is included in each subscription?What is included in each subscription?What is included in each subscription?What is included in each subscription?What is included in each subscription?",
      panel: "panel4",
      isexpanded: false,
    },
    {
      qs: "What is included in each subscription?",
      ans: "What is included in each subscription?What is included in each subscription?What is included in each subscription?What is included in each subscription?What is included in each subscription?",
      panel: "panel5",
      isexpanded: false,
    },
    {
      qs: "What is included in each subscription?",
      ans: "What is included in each subscription?What is included in each subscription?What is included in each subscription?What is included in each subscription?What is included in each subscription?",
      panel: "panel6",
      isexpanded: false,
    },
    {
      qs: "What is included in each subscription?",
      ans: "What is included in each subscription?What is included in each subscription?What is included in each subscription?What is included in each subscription?What is included in each subscription?",
      panel: "panel7",
      isexpanded: false,
    },
    {
      qs: "What is included in each subscription?",
      ans: "What is included in each subscription?What is included in each subscription?What is included in each subscription?What is included in each subscription?What is included in each subscription?",
      panel: "panel8",
      isexpanded: false,
    },
  ];

  const [DumyQs1, setDummyQ] = useState([]);

  useEffect(() => {
    setDummyQ(questions);
  }, []);

  const handleExpands = (panel) => {
    setDummyQ((prev) => {
      return prev.map((x) => {
        if (x.panel === panel) {
          return { ...x, isexpanded: !x.isexpanded };
        } else {
          return { ...x, isexpanded: false };
        }
      });
    });
  };

  return (
    <Box
      sx={{
        padding: {
          lg: "20px 160px  120px 110px",
          md: "150px 50px 150px",
          sm: "150px 100px 150px",
          xs: "120px 20px 80px",
        },
      }}
    >
      <Typography
        sx={{
          fontSize: { lg: "20px", sm: "18px", xs: "16px" },
          textAlign: "center",
          fontWeight: 300,
        }}
      >
        FAQs
      </Typography>
      <Typography
        sx={{
          fontSize: { lg: "38px", md: "32px", xs: "30px" },
          fontWeight: 800,
          color: "#FFFFFF",
          lineHeight: { sm: "45.6px", xs: "120%" },
          maxWidth: "1270px",
          textAlign: "center",
          m: "25px 0",
        }}
      >
        Got Questions? We have answers
      </Typography>
      <Box
        sx={{
          margin: { sm: "85px auto 0", xs: "45px auto 0" },
          display: "flex",
          flexDirection: { md: "row", sm: "column", xs: "column" },
          columnGap: { lg: "10%", md: "5%" },
          maxWidth: "1300px",
        }}
      >
        <Box sx={{ width: "100%" }}>
          {DumyQs1.slice(0, 4).map((item, index) => (
            <Question
              key={index}
              qs={item.qs}
              ans={item.ans}
              panelNo={item.panel}
              expanded={item.isexpanded}
              handleExpands={handleExpands}
            />
          ))}
        </Box>

        <Box sx={{ width: "100%" }}>
          {DumyQs1.slice(4, 8).map((item, index) => (
            <Question
              key={index}
              qs={item.qs}
              ans={item.ans}
              panelNo={item.panel}
              expanded={item.isexpanded}
              handleExpands={handleExpands}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};
export default GotQuestions;
