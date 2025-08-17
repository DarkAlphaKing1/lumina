import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text, Box, Sphere, Plane } from "@react-three/drei";
import * as THREE from "three";

// Interactive Lamp Component
const InteractiveLamp = ({ position }: { position: [number, number, number] }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLit, setIsLit] = useState(false);
  const lightRef = useRef<THREE.PointLight>(null);
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group position={position}>
      {/* Lamp Base */}
      <mesh
        ref={meshRef}
        position={[0, 0, 0]}
        onPointerEnter={() => setIsHovered(true)}
        onPointerLeave={() => setIsHovered(false)}
        onClick={() => setIsLit(!isLit)}
        scale={isHovered ? 1.1 : 1}
      >
        <cylinderGeometry args={[0.3, 0.5, 1.5, 8]} />
        <meshStandardMaterial color={isHovered ? "#DAA520" : "#8B4513"} />
      </mesh>
      
      {/* Lamp Shade */}
      <mesh position={[0, 1.2, 0]} scale={isHovered ? 1.05 : 1}>
        <coneGeometry args={[0.8, 0.6, 8]} />
        <meshStandardMaterial 
          color={isLit ? "#F5F5DC" : "#E6E6FA"} 
          emissive={isLit ? "#FFF8DC" : "#000000"}
          emissiveIntensity={isLit ? 0.3 : 0}
        />
      </mesh>

      {/* Light Source */}
      {isLit && (
        <pointLight
          ref={lightRef}
          position={[0, 1, 0]}
          color="#FFF8DC"
          intensity={2}
          distance={10}
          decay={2}
        />
      )}
    </group>
  );
};

// Animated Plant Component
const AnimatedPlant = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [isHovered, setIsHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 2) * 0.1;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <group position={position}>
      {/* Pot */}
      <mesh position={[0, -0.5, 0]}>
        <cylinderGeometry args={[0.4, 0.3, 0.6, 8]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
      
      {/* Plant */}
      <mesh
        ref={meshRef}
        onPointerEnter={() => setIsHovered(true)}
        onPointerLeave={() => setIsHovered(false)}
        scale={isHovered ? 1.2 : 1}
      >
        <sphereGeometry args={[0.6, 8, 6]} />
        <meshStandardMaterial color="#228B22" />
      </mesh>
    </group>
  );
};

// Flickering Candle Component
const FlickeringCandle = ({ position }: { position: [number, number, number] }) => {
  const lightRef = useRef<THREE.PointLight>(null);
  const flameRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (lightRef.current) {
      lightRef.current.intensity = 1 + Math.sin(state.clock.elapsedTime * 10) * 0.3;
    }
    if (flameRef.current) {
      flameRef.current.scale.y = 1 + Math.sin(state.clock.elapsedTime * 8) * 0.2;
    }
  });

  return (
    <group position={position}>
      {/* Candle Body */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 1, 8]} />
        <meshStandardMaterial color="#F5F5DC" />
      </mesh>
      
      {/* Flame */}
      <mesh ref={flameRef} position={[0, 0.7, 0]}>
        <sphereGeometry args={[0.05, 8, 6]} />
        <meshStandardMaterial 
          color="#FF6347" 
          emissive="#FF4500"
          emissiveIntensity={0.8}
        />
      </mesh>

      {/* Light */}
      <pointLight
        ref={lightRef}
        position={[0, 0.7, 0]}
        color="#FF6347"
        intensity={1}
        distance={5}
        decay={2}
      />
    </group>
  );
};

// Main Luxury Scene Component
const LuxuryScene = () => {
  return (
    <div className="w-full h-screen relative">
      <Canvas
        camera={{ position: [0, 5, 10], fov: 60 }}
        shadows
        className="bg-gradient-to-b from-secondary/20 to-primary/10"
      >
        {/* Lighting */}
        <ambientLight intensity={0.4} color="#F5F5DC" />
        <directionalLight
          position={[10, 10, 5]}
          intensity={1}
          color="#FFF8DC"
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />

        {/* Floor */}
        <Plane 
          rotation={[-Math.PI / 2, 0, 0]} 
          position={[0, -2, 0]} 
          args={[20, 20]}
          receiveShadow
        >
          <meshStandardMaterial color="#F5F5DC" />
        </Plane>

        {/* Interactive Elements */}
        <InteractiveLamp position={[-3, 0, 2]} />
        <AnimatedPlant position={[3, 0, -2]} />
        <FlickeringCandle position={[0, 0, 3]} />
        <FlickeringCandle position={[-1, 0, 3]} />
        <FlickeringCandle position={[1, 0, 3]} />

        {/* Furniture */}
        {/* Coffee Table */}
        <Box position={[0, -1, 0]} args={[3, 0.2, 1.5]} castShadow>
          <meshStandardMaterial color="#8B4513" />
        </Box>

        {/* Sofa */}
        <Box position={[0, -0.5, -3]} args={[4, 1, 1]} castShadow>
          <meshStandardMaterial color="#2F4F2F" />
        </Box>

        {/* Decorative Elements */}
        <Sphere position={[2, 0, 1]} args={[0.3]} castShadow>
          <meshStandardMaterial color="#DAA520" metalness={0.8} roughness={0.2} />
        </Sphere>

        {/* 3D Text */}
        <Text
          position={[0, 3, 0]}
          fontSize={1}
          color="#2F4F2F"
          anchorX="center"
          anchorY="middle"
          font="/fonts/PlayfairDisplay-Regular.woff"
        >
          LUMINA DESIGN
        </Text>

        {/* Controls */}
        <OrbitControls
          enablePan={false}
          enableZoom={true}
          enableRotate={true}
          maxDistance={15}
          minDistance={5}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>

      {/* Overlay UI */}
      <div className="absolute bottom-8 left-8 text-background/80 text-sm font-medium">
        <p>🖱️ Click & drag to explore</p>
        <p>💡 Click the lamp to toggle light</p>
        <p>🌿 Hover over plants for animations</p>
      </div>
    </div>
  );
};

export default LuxuryScene;