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
import { useControls } from 'leva';

const Services = () => {

  const lens = useGLTF('./lens.glb')

  // const { positionT, rotationT, intensity1, intensity2, right } = useControls({
  //   positionT: {
  //     value: { x: -0.7, y: -2, z: 0 },
  //     step: 0.1,
  //     joystick: 'invertY'
  //   },
  //   intensity1: 2,
  //   right: {
  //     value: { x: -0.7, y: -2, z: 0 },
  //     step: 0.1,
  //     joystick: 'invertY'
  //   },
  //   intensity2: 2,
  //   rotationT: {
  //     value: { x: 0.9, y: 4, z: -5.6 },
  //     step: 0.1,
  //     joystick: 'invertY'
  //   },
  // })

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
          camera={{
            fov: 45,
            near: 0.1,
            far: 200,
            position: [4, 2, 10]
          }}
        >
          <OrbitControls enableZoom={false} />
          <directionalLight position={[-8, -0.9, -1.5]} intensity={1} />
          <directionalLight position={[0.4, -1, -1.1]} intensity={1} />
          <ambientLight intensity={0.5} />
          <primitive
            object={lens.scene}
            scale={0.05}
            position={[-0.7, -2, 0]}
            rotation={[0.9, 4, -5.6]}

          />
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
