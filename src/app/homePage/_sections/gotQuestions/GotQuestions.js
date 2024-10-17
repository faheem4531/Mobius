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
  }, [t]);

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
          lg: "150px 160px  120px 110px",
          md: "150px 50px 150px",
          sm: "150px 100px 150px",
          xs: "120px 20px 80px",
        },
      }}
      // className={styles.gotQsBg}
    >
      <Typography
        sx={{
          fontSize: { md: "52px", sm: "44px", xs: "32px" },
          fontWeight: 500,
          fontFamily: "Besley !important",
        }}
      >
        {t("landingPage.questionSection.title")}
      </Typography>
      <Typography
        sx={{
          fontSize: { sm: "20px", xs: "16px" },
          marginTop: "10px",
          fontFamily: "Avenir",
        }}
      >
        {t("landingPage.questionSection.subTitle")}
      </Typography>
      <Box
        sx={{
          marginTop: { sm: "85px", xs: "45px" },
          display: "flex",
          flexDirection: { md: "row", sm: "column", xs: "column" },
          columnGap: { lg: "10%", md: "5%" },
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

      <Box sx={{ textAlign: "center" }}>
        <Link href="/faqs">
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "18px",
              marginTop: "80px",
              display: "inline-block",
              border: "1px solid #3E4F3C",
              padding: "10px 25px 7px",
              fontFamily: "Avenir",
              borderRadius: "4px",
            }}
          >
            {t("landingPage.questionSection.btnText")}
          </Typography>
        </Link>
      </Box>
    </Box>
  );
};
export default GotQuestions;
