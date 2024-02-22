"use client"

import styles from './Services.module.css'
import Image from 'next/image';
import Steps from "@/app/_assets/svg/service-steps.svg";
import Step1 from "@/app/_assets/svg/3d-service.svg";
import Step1Active from "@/app/_assets/svg/3d-service-active.svg";
import Step2 from "@/app/_assets/svg/simulation-service.svg";
import Step2Active from "@/app/_assets/svg/simulation-service-active.svg";
import Step3 from "@/app/_assets/svg/video-service.svg";
import Step3Active from "@/app/_assets/svg/video-service-active.svg";
import Lense from "@/app/_assets/png/lense.png";

import { Canvas } from '@react-three/fiber';
import { useState } from 'react';
import Model from '@/app/Model/Model';
import { useGLTF } from '@react-three/drei';

const Services = () => {

  const [modelStates, setModelState] = useState({
    model: true,
    simulation: false,
    clay: false
  })

  const loadModels = {
    lens: useGLTF('./lens-clay.glb'),
    lensClay: useGLTF('./lens-clay.glb'),
    lensWireframe: useGLTF('./lens-wireframe.glb')
  };

  function handlingModel() {
    setModelState({
      model: true,
      simulation: false,
      clay: false
    })
  }

  function handlingSimulation() {
    setModelState({
      model: false,
      simulation: true,
      clay: false
    })
  }

  function handlingClay() {
    setModelState({
      model: false,
      simulation: false,
      clay: true
    })
  }


  return (
    <div className={styles.services}>
      <div className={styles.content}>
        <div className={styles.title}>Our Services</div>
        <h1>We Provide 3D Services</h1>
        <hr />
        <div className={styles.servicesSteps}>
          <Image
            alt=''
            src={Steps}
            className={styles.steps}
          />
          <div>
            <h2 className={`${styles.heading} ${modelStates.model && styles.active}`} onClick={handlingModel}>
              3D Modeling
              <Image
                alt=''
                src={modelStates.model ? Step1Active : Step1}
                className={styles.logo}
              />
            </h2>
            <h2 className={`${styles.heading} ${styles.unselected} ${modelStates.simulation && styles.active}`} onClick={handlingSimulation}>
              3D Simulation
              <Image
                alt=''
                src={modelStates.simulation ? Step2Active : Step2}
                className={styles.logo}
              />
            </h2>
            <h2 className={`${styles.heading} ${styles.unselected} ${modelStates.clay && styles.active}`} onClick={handlingClay}>
              Video Animation
              <Image
                alt=''
                src={modelStates.clay ? Step3Active : Step3}
                className={styles.logo}
              />
            </h2>
          </div>
        </div>
      </div>
      <div className={styles.imageWraper}>

        <Canvas
          camera={{
            fov: 45,
            near: 0.1,
            far: 200,
            position: [4, 2, 10]
          }}
        >
          <Model
            modelStates={modelStates}
            models={loadModels} />
        </Canvas>

        <Image
          src={Lense}
          alt=''
          className={styles.lense}
        />
      </div>
    </div>
  )
};

export default Services;
