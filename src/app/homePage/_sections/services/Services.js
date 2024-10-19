"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

import styles from "./Services.module.css";
import Steps from "@/app/_assets/svg/service-steps.svg";
import Step1 from "@/app/_assets/svg/3d-service.svg";
import Step1Active from "@/app/_assets/svg/3d-service-active.svg";
import Step2 from "@/app/_assets/svg/simulation-service.svg";
import Step2Active from "@/app/_assets/svg/simulation-service-active.svg";
import Step3 from "@/app/_assets/svg/video-service.svg";
import Step3Active from "@/app/_assets/svg/video-service-active.svg";
import Lense from "@/app/_assets/png/lense.png";
import Model from "@/app/Model/Model";

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
          <Image alt="" src={Steps} className={styles.steps} />
          <div>
            <h2
              className={`${styles.heading} ${
                modelStates.model && styles.active
              }`}
              onClick={handlingModel}
            >
              {/* 3D Modeling */}
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
              {/* 3D Simulation */}
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
              {/* Video Animation */}
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
      <div className={styles.imageWraper}>
        <div className={styles.index}>
          <Model modelStates={modelStates} />
        </div>
        <Image src={Lense} alt="img" className={styles.lense} />
      </div>

      {/* <div className={styles.torus}>
        <Canvas
          camera={{
            fov: 45,
            near: 0.1,
            far: 200,
            position: [4, 2, 6]
          }}
        >
          <OrbitControls enableZoom={false} />
          <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
          <ambientLight intensity={0.5} />
          <mesh
            position={[0, -1.8, -7.6]}
            rotation={[-3.4, -0.2, 0]}
            scale={7}
          >
            <torusGeometry />
            <meshStandardMaterial wireframe color="#ffffff" />
          </mesh>
        </Canvas>
      </div> */}
    </div>
  );
};

export default Services;
