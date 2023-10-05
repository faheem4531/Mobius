"use client";

import React from 'react';
import styles from './Projects.module.css'
import Image from 'next/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Lense from "@/app/_assets/projects/lense.png";
import PillPuncher from "@/app/_assets/projects/pill-puncher.png";
import Elevate from "@/app/_assets/projects/elevate.png";
import Fonestar from "@/app/_assets/projects/fonestar.png";
import Avancus from "@/app/_assets/projects/avancus.png";
import FormulaZ from "@/app/_assets/projects/formulaZ.png";
import Luna from "@/app/_assets/projects/luna.png";
import Metaleon from "@/app/_assets/projects/metaleon.png";
import LightOne from "@/app/_assets/projects/light-one.png";
import Houduo from "@/app/_assets/projects/houduo.png";

const project_dateils = [
  {
    id: "p1",
    image: Lense,
    name: "Sony",
    url: "https://dribbble.com/shots/22479838-Sony?utm_source=Clipboard_Shot&utm_campaign=aliimranmms&utm_content=Sony&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=aliimranmms&utm_content=Sony&utm_medium=Social_Share"
  },
  {
    id: "p2",
    image: PillPuncher,
    name: "PILL PUNCHER",
    url: "https://dribbble.com/shots/22478889-Pill-Puncher?utm_source=Clipboard_Shot&utm_campaign=aliimranmms&utm_content=Pill%20Puncher&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=aliimranmms&utm_content=Pill%20Puncher&utm_medium=Social_Share"
  },
  {
    id: "p3",
    image: Elevate,
    name: "ELEVATE",
    url: "https://dribbble.com/shots/22480246-Elevate?utm_source=Clipboard_Shot&utm_campaign=aliimranmms&utm_content=Elevate&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=aliimranmms&utm_content=Elevate&utm_medium=Social_Share"
  },
  {
    id: "p4",
    image: Fonestar,
    name: "FONESTAR",
    url: "https://dribbble.com/shots/22479440-Fonestar?utm_source=Clipboard_Shot&utm_campaign=aliimranmms&utm_content=Fonestar&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=aliimranmms&utm_content=Fonestar&utm_medium=Social_Share"
  },
  {
    id: "p5",
    image: Avancus,
    name: "AVANCUS",
    url: "https://dribbble.com/shots/22479266-Avancus?utm_source=Clipboard_Shot&utm_campaign=aliimranmms&utm_content=Avancus&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=aliimranmms&utm_content=Avancus&utm_medium=Social_Share"
  },
  {
    id: "p6",
    image: FormulaZ,
    name: "FORMULA Z",
    url: "https://dribbble.com/shots/22479951-Formula-Z?utm_source=Clipboard_Shot&utm_campaign=aliimranmms&utm_content=Formula%20Z&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=aliimranmms&utm_content=Formula%20Z&utm_medium=Social_Share"
  },
  {
    id: "p7",
    image: Luna,
    name: "LUNA",
    url: "https://dribbble.com/shots/22480084-Luna?utm_source=Clipboard_Shot&utm_campaign=aliimranmms&utm_content=Luna&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=aliimranmms&utm_content=Luna&utm_medium=Social_Share"
  },
  {
    id: "p8",
    image: Metaleon,
    name: "METALEON",
    url: "https://dribbble.com/shots/22472389-Metaleon?utm_source=Clipboard_Shot&utm_campaign=aliimranmms&utm_content=Metaleon&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=aliimranmms&utm_content=Metaleon&utm_medium=Social_Share"
  },
  {
    id: "p9",
    image: Houduo,
    name: "HOUDUO",
    url: "https://dribbble.com/shots/22482383-Houduo?utm_source=Clipboard_Shot&utm_campaign=aliimranmms&utm_content=Houduo&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=aliimranmms&utm_content=Houduo&utm_medium=Social_Share"
  },
  {
    id: "p10",
    image: LightOne,
    name: "LIGHT ONE",
    url: "https://dribbble.com/shots/22480315-Light-One?utm_source=Clipboard_Shot&utm_campaign=aliimranmms&utm_content=Light%20One&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=aliimranmms&utm_content=Light%20One&utm_medium=Social_Share"
  },
];

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className={styles.container}>
      <Slider {...settings} className={styles.slider}>
        {project_dateils.map((items) => {
          return <div className={styles.card} key={items.id}>
            <Image
              src={items.image}
              alt=''
              className={styles.image} />
            <div className={styles.name}>{items.name} </div>
          </div>
        })}
      </Slider>
    </div>
  );
};

export default Projects;
