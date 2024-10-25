"use client";

import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";

import Link from "next/link.js";
// import styles from "../ComponentsStyles.module.css";
import Question from "./Question.js";
const GotQuestions = ({}) => {
  const questions = [
    {
      qs: "What services do you offer?",
      ans: "We specialize in high-quality 3D product animations, CGI (computer-generated imagery) videos, motion graphics, and visual effects (VFX) for product marketing, advertisements, and digital campaigns.",
      panel: "panel1",
      isexpanded: false,
    },
    {
      qs: "How can 3D product animations improve my brand?",
      ans: "3D animations bring your products to life, providing engaging visuals that highlight features, benefits, and design. This approach helps build a stronger emotional connection with your audience, leading to increased engagement and higher conversion rates.",
      panel: "panel2",
      isexpanded: false,
    },
    {
      qs: "How long does it take to create a 3D product animation?",
      ans: "The timeline depends on the complexity of the project, including factors such as product intricacy, animation length, and any additional features like VFX. On average, most projects take between 2 to 6 weeks from concept to final delivery.",
      panel: "panel3",
      isexpanded: false,
    },
    {
      qs: "What types of products can you create 3D animations for?",
      ans: "We can create 3D animations for a wide range of products, including consumer electronics, cosmetics, fashion items, medical devices, automotive parts, and industrial equipment. Whether it's a physical product or a conceptual idea, we can turn it into a compelling visual experience.",
      panel: "panel4",
      isexpanded: false,
    },
    {
      qs: "What is the cost of your 3D animation and CGI services?",
      ans: "Costs vary based on the scope of the project, including animation duration, level of detail, and specific requirements. We offer flexible pricing packages to fit different budgets. Contact us for a personalized quote.",
      panel: "panel5",
      isexpanded: false,
    },
    {
      qs: "Can I request revisions after the animation is completed?",
      ans: "Absolutely! We offer a set number of revisions as part of our standard packages to ensure the final product meets your expectations. We work closely with you during the process to minimize revisions and ensure a smooth experience.",
      panel: "panel6",
      isexpanded: false,
    },
    {
      qs: "What industries do you typically work with?",
      ans: "Our team works across multiple industries, including beauty and cosmetics, consumer electronics, fashion, automotive, medical devices, and more. If you have a product, we can bring it to life, regardless of the industry.",
      panel: "panel7",
      isexpanded: false,
    },
    {
      qs: "How do I get started with a 3D product animation project?",
      ans: "Getting started is easy! Simply reach out to us via our contact form, and we’ll schedule a consultation to discuss your product, your vision, and the goals for your animation. From there, we’ll provide a detailed proposal outlining the process, timeline, and pricing.",
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
          maxWidth: "1300px",
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
