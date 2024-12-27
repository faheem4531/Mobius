"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

import styles from "./Services.module.css";
import Steps from "@/app/_assets/svg/service-steps.webp";

import Step1 from "@/app/_assets/svg/3d-service.webp";
import Step1Active from "@/app/_assets/svg/3d-service-active.webp";
import Step2 from "@/app/_assets/svg/simulation-service.webp";
import Step2Active from "@/app/_assets/svg/simulation-service-active.webp";
import Step3 from "@/app/_assets/svg/video-service.webp";
import Step3Active from "@/app/_assets/svg/video-service-active.webp";
import LensViewer from "@/app/Model/Model";

const Services = () => {
  const [modelStates, setModelState] = useState({
    model: true,
    simulation: false,
    clay: false,
  });
  const textRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);

  function handlingModel() {
    setModelState({
      model: true,
      simulation: false,
      clay: false,
    });
  }

  function handlingSimulation() {
    setModelState({
      model: false,
      simulation: true,
      clay: false,
    });
  }

  function handlingClay() {
    setModelState({
      model: false,
      simulation: false,
      clay: true,
    });
  }

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      textRef.current,
      { x: 200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          end: "top 30%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      headingRef.current,
      { x: 350, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
          end: "top 30%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      paragraphRef.current,
      { x: 500, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: paragraphRef.current,
          start: "top 80%",
          end: "top 30%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div className={styles.services}>
      <div className={styles.content}>
        <div className={styles.title} ref={textRef}>
          Our Services
        </div>
        <h2
          style={{
            color: "var(--text-main)",
            fontSize: "38px",
            marginBottom: "40px",
          }}
          ref={headingRef}
        >
          Elevate website with 3D Models{" "}
        </h2>
        <hr />
        <div className={styles.servicesSteps} ref={paragraphRef}>
          <Image alt="steps" src={Steps} className={styles.steps} />
          <div>
            <h2
              className={`${styles.heading} ${
                modelStates.model && styles.active
              }`}
              onClick={handlingModel}
            >
              Textured Model
              <Image
                alt="Textured Model icon"
                src={modelStates.model ? Step1Active : Step1}
                className={styles.logo}
              />
            </h2>
            <h2
              className={`${styles.heading} ${styles.unselected} ${
                modelStates.simulation && styles.active
              }`}
              onClick={handlingSimulation}
            >
              Wireframes
              <Image
                alt="Wireframes icon"
                src={modelStates.simulation ? Step2Active : Step2}
                className={styles.logo}
              />
            </h2>
            <h2
              className={`${styles.heading} ${styles.unselected} ${
                modelStates.clay && styles.active
              }`}
              onClick={handlingClay}
            >
              3d Clay Model
              <Image
                alt="3d Clay Model icon"
                src={modelStates.clay ? Step3Active : Step3}
                className={styles.logo}
              />
            </h2>
          </div>
        </div>
      </div>
      <LensViewer modelStates={modelStates} />
    </div>
  );
};

export default Services;
