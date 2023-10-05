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

  }
];
const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    centerPadding: "60px",
    slidesToScroll: 3,
    // initialSlide: 0,
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
        <div className={styles.card}>
          <Image
            src={Lense}
            alt=''
            className={styles.image} />
          <div className={styles.name}>Sony </div>
        </div>
        <div className={styles.card}>
          <Image
            src={Fonestar}
            alt=''
            className={styles.image} />
          <div className={styles.name}>Sony </div>
        </div>
        <div className={styles.card}>
          <Image
            src={Avancus}
            alt=''
            className={styles.image} />
          <div className={styles.name}>Sony </div>
        </div>
        <div className={styles.card}>
          <Image
            src={Metaleon}
            alt=''
            className={styles.image} />
          <div className={styles.name}>Sony </div>
        </div>
        <div className={styles.card}>
          <Image
            src={FormulaZ}
            alt=''
            className={styles.image} />
          <div className={styles.name}>Sony </div>
        </div>
      </Slider>
    </div>

  );
};

export default Projects;
