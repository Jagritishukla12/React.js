import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function ComputerModel() {
  const { scene } = useGLTF("/assets/computer.glb"); 
  return <primitive object={scene} scale={2} position={[0, -1.5, 0]} />;
}


export default function Hero() {
  return (
    <section className="w-full h-screen bg-[#0a0a0a] text-white flex items-center justify-between px-20">
      
      <div className="max-w-lg">
        <h1 className="text-5xl font-bold leading-tight">
          Hi, I'm <span className="text-purple-500">Adrian</span>
        </h1>
        <p className="mt-6 text-lg text-gray-300">
          I develop 3D visuals, user interfaces and web applications
        </p>
      </div>

      
      <div className="w-[500px] h-[400px]">
        <Canvas camera={{ position: [3, 2, 6], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 5, 2]} />
          <Suspense fallback={null}>
            <ComputerModel />
          </Suspense>
          <OrbitControls enableZoom={false} autoRotate />
        </Canvas>
      </div>
    </section>
  );
}
