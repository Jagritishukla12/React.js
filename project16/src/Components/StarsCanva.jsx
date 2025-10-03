import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Stars, OrbitControls } from "@react-three/drei";

const StarsBackground = () => {
  return (
    <>
      
      <Stars
        radius={100}      
        depth={50}         
        count={5000}      
        factor={4}        
        saturation={0}     
        fade               
        speed={2}          
      />
    
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
    </>
  );
};

const StarsCanva = () => {
  return (
    <div className="w-full h-screen absolute inset-0 -z-10">
      <Canvas>
        <Suspense fallback={null}>
          <StarsBackground />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default StarsCanva;
