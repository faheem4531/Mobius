'use client'

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function LensWireFrame(props) {
  const groupRef = useRef()
  const { nodes, materials } = useGLTF('/lens-wireframe.glb')

  return (
    <group ref={groupRef} {...props} dispose={null}
      scale={0.05}
      position={[-0.7, -2, 0]}
      rotation={[0.9, 4, -5.6]}
    >
      <lineSegments
        geometry={nodes.texLens02_matt001.geometry}
        material={materials.entity_2}
        position={[22.887, -13.884, -59.233]}
      />
      <lineSegments
        geometry={nodes.texLens02_glossy.geometry}
        material={materials.entity_2}
        position={[22.887, -13.884, -59.233]}
      />
      <lineSegments
        geometry={nodes.texLens02_matt.geometry}
        material={materials.entity_2}
        position={[22.887, -13.884, -59.233]}
      />
      <lineSegments
        geometry={nodes.chromeBrushed_lens02.geometry}
        material={materials.entity_2}
        position={[22.887, -13.884, -59.233]}
      />
      <lineSegments
        geometry={nodes.chromeBrushed_lens_screws02.geometry}
        material={materials.entity_2}
        position={[22.887, -13.884, -59.233]}
      />
      <lineSegments
        geometry={nodes.gold_connectors_lens02.geometry}
        material={materials.entity_2}
        position={[22.887, -13.884, -59.233]}
      />
      <lineSegments
        geometry={nodes.glassLens02.geometry}
        material={materials.entity_2}
        position={[22.887, -13.884, -59.233]}
      />
      <lineSegments
        geometry={nodes.white_emount.geometry}
        material={materials.entity_2}
        position={[-0.028, 8.558, 27.38]}
      />
    </group>
  )
}

useGLTF.preload('/lens-wireframe.glb')
