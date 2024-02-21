"use client"

import styles from './Services.module.css'
import Image from 'next/image';
import Steps from "@/app/_assets/svg/service-steps.svg";
import Modeling from "@/app/_assets/svg/3d-service.svg";
import Step2 from "@/app/_assets/svg/simulation-service.svg";
import Video from "@/app/_assets/svg/video-service.svg";
import Lense from "@/app/_assets/png/lense.png";

import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const Services = () => {

  const lens = useGLTF('./lens.glb')


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
            <h2 className={styles.heading}>
              3D Modeling
              <Image
                alt=''
                src={Modeling}
                className={styles.logo}
              />
            </h2>
            <h2 className={`${styles.heading} ${styles.unselected}`}>
              3D Simulation
              <Image
                alt=''
                src={Step2}
                className={styles.logo}
              />
            </h2>
            <h2 className={`${styles.heading} ${styles.unselected}`}>
              Video Animation
              <Image
                alt=''
                src={Video}
                className={styles.logo}
              />
            </h2>
          </div>
        </div>
      </div>
      <div className={styles.imageWraper}>

        <Canvas
          shadows
          camera={{
            fov: 45,
            // near: 0.1,
            // far: 200,
            position: [2, 2, 10]
          }}
        >
          <OrbitControls makeDefault />
          <directionalLight castShadow position={[0, -1, 0]} intensity={2.1} />
          <ambientLight intensity={0.5} />
          <primitive object={lens.scene} scale={0.5} position={[0, -1, 0]} rotation={[0, 8, 5]} />
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
