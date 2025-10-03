function ComputerModel() {
  return (
    <group rotation={[0, -0.5, 0]}>
      <mesh>
        <boxGeometry args={[2, 1.3, 0.1]} />
        <meshStandardMaterial color="#f14c4cff" metalness={0.8} roughness={0.4} />
      </mesh>
      

      <mesh position={[0, 0, 0.06]}>
        <planeGeometry args={[1.8, 1.1]} />
        <meshStandardMaterial emissive="#a855f7" emissiveIntensity={1.3} color="black" />
      </mesh>
      

      <mesh position={[0, -1, 0]}>                                                                           
        <cylinderGeometry args={[0.05, 0.1, 1, 32]} />
        <meshStandardMaterial color="#e23f3fff" />
      </mesh>

      <mesh position={[0, -1.5, 0.3]}>
        <boxGeometry args={[0.8, 0.1, 0.6]} />
        <meshStandardMaterial color="#8f2020ff" />
      </mesh>
    </group>
  );
}
export default ComputerModel;
