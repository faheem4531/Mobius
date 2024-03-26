'use client'

import { OrbitControls } from '@react-three/drei';
import { useControls } from 'leva';
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber';
import { Lens } from '@/app/Model/Lens';
import { LensClay } from '@/app/Model/LensClay';
import { LensWireFrame } from './LensWireFrame';
import { Environment } from '@react-three/drei'

const Model = ({ modelStates, models }) => {


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

  function setModel() {
    if (modelStates.model) {
      return <Lens />
    }
    else if (modelStates.simulation) {
      return <LensWireFrame />
    }
    else if (modelStates.clay) {
      return <LensClay />
    }
    else {
      return null;
    }
  }

  return <>
    <Canvas
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [4, 2, 10]
      }}
    >
      <Suspense fallback={null}>
        <OrbitControls enableZoom={false} />
        <directionalLight position={[-8, -0.9, -1.5]} intensity={1} />
        <directionalLight position={[0.4, -1, -1.1]} intensity={1} />
        <ambientLight intensity={0.5} />

        {/* <Environment preset="sunset" /> */}
        {setModel()}

      </Suspense>
    </Canvas>
  </>
}

export default Model;