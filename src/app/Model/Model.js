"use client";

import { Box } from "@mui/material";
import Image from "next/image";
import { OrbitControls } from "@react-three/drei";
import { useState } from "react";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import { Lens } from "@/app/Model/Lens";
import { LensClay } from "@/app/Model/LensClay";
import styles from "./styles.module.css";
import { LensWireFrame } from "./LensWireFrame";
import Lense from "@/app/_assets/png/lense.webp";
import MaskButton from "@/app/_components/button/MaskButton";

const Model = ({ modelStates }) => {
  function setModel() {
    if (modelStates.model) {
      return <Lens />;
    } else if (modelStates.simulation) {
      return <LensWireFrame />;
    } else if (modelStates.clay) {
      return <LensClay />;
    } else {
      return null;
    }
  }

  return (
    <Canvas
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [4, 2, 10],
      }}
    >
      <Suspense fallback={null}>
        <OrbitControls enableZoom={false} />
        <directionalLight position={[-8, -0.9, -1.5]} intensity={10} />
        <directionalLight position={[0.4, -1, -1.1]} intensity={10} />
        <directionalLight position={[10, 1, 1.1]} intensity={10} />
        <ambientLight intensity={0.5} />
        {setModel()}
      </Suspense>
    </Canvas>
  );
};

export default function LensViewer({ modelStates }) {
  const [showModel, setShowModel] = useState(false);

  return (
    <div className={styles.imageWraper}>
      {!showModel && (
        <Box
          sx={{
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              bottom: "-100px",
              left: "50%",
              transform: "translateX( -50%)",
            }}
          >
            <MaskButton
              text={"Interact with Model"}
              onClick={() => setShowModel(true)}
            />
          </Box>
          <Image
            src={Lense}
            alt="3d Lens modal image"
            className={styles.lense}
          />
        </Box>
      )}
      {showModel && <Model modelStates={modelStates} />}
    </div>
  );
}
