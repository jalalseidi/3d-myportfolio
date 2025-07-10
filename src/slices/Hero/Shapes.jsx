"use client";

import * as THREE from "three";
import { Canvas, useLoader } from "@react-three/fiber";
import { ContactShadows, Float, Environment } from "@react-three/drei";
import { Suspense, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export function Shapes() {
    return (
      <div className="row-span-1 row-start-1 -mt-9 aspect-square  md:col-span-1 md:col-start-2 md:mt-0">
        <Canvas
          className="z-0"
          shadows
          gl={{ antialias: false }}
          dpr={[1, 1.5]}
          camera={{ position: [0, 0, 25], fov: 30, near: 1, far: 40 }}
        >
          <Suspense fallback={null}>
            <Geometries />
            <ContactShadows
              position={[0, -3.5, 0]}
              opacity={0.65}
              scale={40}
              blur={1}
              far={9}
            />
            <Environment preset="studio" />
          </Suspense>
        </Canvas>
      </div>
    );
  }

  function Geometries() {
    const textures = {
      react: useLoader(THREE.TextureLoader, '/logos/react.svg'),
      javascript: useLoader(THREE.TextureLoader, '/logos/javascript.svg'),
      python: useLoader(THREE.TextureLoader, '/logos/python.svg'),
      django: useLoader(THREE.TextureLoader, '/logos/django.svg'),
      nodejs: useLoader(THREE.TextureLoader, '/logos/nodejs.svg'),
      typescript: useLoader(THREE.TextureLoader, '/logos/typescript.svg')
    };

    const geometries = [
      {
        position: [0, 0, 0],
        r: 0.3,
        geometry: new THREE.BoxGeometry(2.5, 2.5, 0.3),
        texture: textures.react
      },
      {
        position: [1, -0.75, 4],
        r: 0.4,
        geometry: new THREE.BoxGeometry(2.5, 2.5, 0.3),
        texture: textures.javascript
      },
      {
        position: [-1.4, 2, -4],
        r: 0.6,
        geometry: new THREE.BoxGeometry(2.5, 2.5, 0.3),
        texture: textures.nodejs
      },
      {
        position: [-0.8, -0.75, 5],
        r: 0.5,
        geometry: new THREE.BoxGeometry(2.5, 2.5, 0.3),
        texture: textures.python
      },
      {
        position: [1.6, 1.6, -4],
        r: 0.7,
        geometry: new THREE.BoxGeometry(2.5, 2.5, 0.3),
        texture: textures.typescript
      },
      {
        position: [0.5, 1.5, 2],
        r: 0.4,
        geometry: new THREE.BoxGeometry(2.5, 2.5, 0.3),
        texture: textures.django
      },
    ];
  
    const soundEffects = [
      new Audio("/sounds/knock1.ogg"),
      new Audio("/sounds/knock2.ogg"),
      new Audio("/sounds/knock3.ogg"),
      new Audio("/sounds/knock4.ogg"),
      new Audio("/sounds/knock5.ogg"),
    ];
  
    const materials = [
      new THREE.MeshStandardMaterial({ color: 0x61dafb, roughness: 0.2, metalness: 0.1 }), // React Blue
      new THREE.MeshStandardMaterial({ color: 0xdd0031, roughness: 0.3, metalness: 0.2 }), // Angular Red
      new THREE.MeshStandardMaterial({ color: 0x68a063, roughness: 0.1, metalness: 0.3 }), // Node.js Green
      new THREE.MeshStandardMaterial({ color: 0xf7df1e, roughness: 0.4, metalness: 0.1 }), // JavaScript Yellow
      new THREE.MeshStandardMaterial({ color: 0x3178c6, roughness: 0.2, metalness: 0.2 }), // TypeScript Blue
      new THREE.MeshStandardMaterial({ color: 0x4fc08d, roughness: 0.1, metalness: 0.1 }), // Vue.js Green
      new THREE.MeshStandardMaterial({
        roughness: 0.1,
        metalness: 0.3,
        color: 0x306998, // Python Blue
      }),
      new THREE.MeshStandardMaterial({
        color: 0xff6b35, // Git Orange
        roughness: 0.2,
        metalness: 0.1,
      }),
    ];
  
    return geometries.map(({ position, r, geometry, texture }) => (
      <group position={position.map((p) => p * 2)} key={JSON.stringify(position)}>
        <Float speed={5 * r} rotationIntensity={6 * r} floatIntensity={5 * r}>
          <mesh geometry={geometry}>
            <meshBasicMaterial map={texture} transparent={true} />
          </mesh>
        </Float>
      </group>
    ));
  }
