"use client";

import React, { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./Projects.module.css";
import Lense from "@/_assets/projects/lense.webp";
import PillPuncher from "@/_assets/projects/pill-puncher.webp";
import Elevate from "@/_assets/projects/elevate.webp";
import Fonestar from "@/_assets/projects/fonestar.webp";
import Avancus from "@/_assets/projects/avancus.webp";
import FormulaZ from "@/_assets/projects/formulaZ.webp";
import Luna from "@/_assets/projects/luna.webp";
import Metaleon from "@/_assets/projects/metaleon.webp";
import LightOne from "@/_assets/projects/light-one.webp";
import Houduo from "@/_assets/projects/houduo.webp";

const project_dateils = [
  {
    image: Lense,
    name: "Sony",
    url: "https://dribbble.com/shots/22479838-Sony?utm_source=Clipboard_Shot&utm_campaign=aliimranmms&utm_content=Sony&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=aliimranmms&utm_content=Sony&utm_medium=Social_Share",
  },
  {
    image: PillPuncher,
    name: "PILL PUNCHER",
    url: "https://dribbble.com/shots/22478889-Pill-Puncher?utm_source=Clipboard_Shot&utm_campaign=aliimranmms&utm_content=Pill%20Puncher&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=aliimranmms&utm_content=Pill%20Puncher&utm_medium=Social_Share",
  },
  {
    image: Elevate,
    name: "ELEVATE",
    url: "https://dribbble.com/shots/22480246-Elevate?utm_source=Clipboard_Shot&utm_campaign=aliimranmms&utm_content=Elevate&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=aliimranmms&utm_content=Elevate&utm_medium=Social_Share",
  },
  {
    image: Fonestar,
    name: "FONESTAR",
    url: "https://dribbble.com/shots/22479440-Fonestar?utm_source=Clipboard_Shot&utm_campaign=aliimranmms&utm_content=Fonestar&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=aliimranmms&utm_content=Fonestar&utm_medium=Social_Share",
  },
  {
    image: Avancus,
    name: "AVANCUS",
    url: "https://dribbble.com/shots/22479266-Avancus?utm_source=Clipboard_Shot&utm_campaign=aliimranmms&utm_content=Avancus&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=aliimranmms&utm_content=Avancus&utm_medium=Social_Share",
  },
  {
    image: FormulaZ,
    name: "FORMULA Z",
    url: "https://dribbble.com/shots/22479951-Formula-Z?utm_source=Clipboard_Shot&utm_campaign=aliimranmms&utm_content=Formula%20Z&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=aliimranmms&utm_content=Formula%20Z&utm_medium=Social_Share",
  },
  {
    image: Luna,
    name: "LUNA",
    url: "https://dribbble.com/shots/22480084-Luna?utm_source=Clipboard_Shot&utm_campaign=aliimranmms&utm_content=Luna&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=aliimranmms&utm_content=Luna&utm_medium=Social_Share",
  },
  {
    image: Metaleon,
    name: "METALEON",
    url: "https://dribbble.com/shots/22472389-Metaleon?utm_source=Clipboard_Shot&utm_campaign=aliimranmms&utm_content=Metaleon&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=aliimranmms&utm_content=Metaleon&utm_medium=Social_Share",
  },
  {
    image: Houduo,
    name: "HOUDUO",
    url: "https://dribbble.com/shots/22482383-Houduo?utm_source=Clipboard_Shot&utm_campaign=aliimranmms&utm_content=Houduo&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=aliimranmms&utm_content=Houduo&utm_medium=Social_Share",
  },
  {
    image: LightOne,
    name: "LIGHT ONE",
    url: "https://dribbble.com/shots/22480315-Light-One?utm_source=Clipboard_Shot&utm_campaign=aliimranmms&utm_content=Light%20One&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=aliimranmms&utm_content=Light%20One&utm_medium=Social_Share",
  },
  {
    image: Lense,
    name: "Sony",
    url: "https://dribbble.com/shots/22479838-Sony?utm_source=Clipboard_Shot&utm_campaign=aliimranmms&utm_content=Sony&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=aliimranmms&utm_content=Sony&utm_medium=Social_Share",
  },
  {
    image: PillPuncher,
    name: "PILL PUNCHER",
    url: "https://dribbble.com/shots/22478889-Pill-Puncher?utm_source=Clipboard_Shot&utm_campaign=aliimranmms&utm_content=Pill%20Puncher&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=aliimranmms&utm_content=Pill%20Puncher&utm_medium=Social_Share",
  },
  {
    image: Elevate,
    name: "ELEVATE",
    url: "https://dribbble.com/shots/22480246-Elevate?utm_source=Clipboard_Shot&utm_campaign=aliimranmms&utm_content=Elevate&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=aliimranmms&utm_content=Elevate&utm_medium=Social_Share",
  },
  {
    image: Fonestar,
    name: "FONESTAR",
    url: "https://dribbble.com/shots/22479440-Fonestar?utm_source=Clipboard_Shot&utm_campaign=aliimranmms&utm_content=Fonestar&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=aliimranmms&utm_content=Fonestar&utm_medium=Social_Share",
  },
  {
    image: Avancus,
    name: "AVANCUS",
    url: "https://dribbble.com/shots/22479266-Avancus?utm_source=Clipboard_Shot&utm_campaign=aliimranmms&utm_content=Avancus&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=aliimranmms&utm_content=Avancus&utm_medium=Social_Share",
  },
  {
    image: FormulaZ,
    name: "FORMULA Z",
    url: "https://dribbble.com/shots/22479951-Formula-Z?utm_source=Clipboard_Shot&utm_campaign=aliimranmms&utm_content=Formula%20Z&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=aliimranmms&utm_content=Formula%20Z&utm_medium=Social_Share",
  },
  {
    image: Luna,
    name: "LUNA",
    url: "https://dribbble.com/shots/22480084-Luna?utm_source=Clipboard_Shot&utm_campaign=aliimranmms&utm_content=Luna&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=aliimranmms&utm_content=Luna&utm_medium=Social_Share",
  },
  {
    image: Metaleon,
    name: "METALEON",
    url: "https://dribbble.com/shots/22472389-Metaleon?utm_source=Clipboard_Shot&utm_campaign=aliimranmms&utm_content=Metaleon&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=aliimranmms&utm_content=Metaleon&utm_medium=Social_Share",
  },
  {
    image: Houduo,
    name: "HOUDUO",
    url: "https://dribbble.com/shots/22482383-Houduo?utm_source=Clipboard_Shot&utm_campaign=aliimranmms&utm_content=Houduo&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=aliimranmms&utm_content=Houduo&utm_medium=Social_Share",
  },
  {
    image: LightOne,
    name: "LIGHT ONE",
    url: "https://dribbble.com/shots/22480315-Light-One?utm_source=Clipboard_Shot&utm_campaign=aliimranmms&utm_content=Light%20One&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=aliimranmms&utm_content=Light%20One&utm_medium=Social_Share",
  },
];

export default function CardSlider() {
  const [centerCardIndex, setCenterCardIndex] = useState(0);

  const settings = {
    infinite: true,
    speed: 200,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    afterChange: (current) => setCenterCardIndex(current),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div style={{ margin: "0" }}>
      <div className={styles.container}>
        <h3>Projects</h3>
        <h3
          style={{
            fontSize: "38px",
            color: "var(--text-main)",
            fontWeight: "500",
            margin: " 35px 0 70px",
          }}
        >
          Here are our some recent Projects
        </h3>
        <Slider {...settings} className={styles.slider} style={{ margin: "0" }}>
          {project_dateils.map((card, index) => {
            const distanceFromCenter = index - centerCardIndex;
            let scale;

            if (distanceFromCenter === 0) {
              scale = 1;
            } else if (distanceFromCenter === -1 || distanceFromCenter === 1) {
              scale = 0.4;
            } else if (distanceFromCenter === -2 || distanceFromCenter === 2) {
              scale = 0.2;
            } else {
              scale = 0.3;
            }

            return (
              <div key={index}>
                <div
                  style={{
                    transform: `scale(${scale})`,
                    opacity: scale,
                    transition: "all 0.3s ease-in",
                    display: "flex",
                    justifyContent: "center",
                  }}
                  className={styles.card}
                >
                  <Image
                    src={card.image}
                    alt="3d models images"
                    className={styles.image}
                  />
                  <a href={card.url} target="_blank" className={styles.name}>
                    {card.name}
                  </a>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
