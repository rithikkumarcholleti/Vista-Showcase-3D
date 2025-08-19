import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  PresentationControls,
  Stage,
  useGLTF,
  Environment,
} from "@react-three/drei";
import { motion } from "framer-motion";

// ---------------------- Car Model Fallback ----------------------
const CarModelFallback = () => {
  return (
    <group>
      {/* Car body */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2, 0.5, 1]} />
        <meshStandardMaterial color="#c62828" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Car roof */}
      <mesh position={[0.25, 0.35, 0]}>
        <boxGeometry args={[1, 0.3, 0.9]} />
        <meshStandardMaterial color="#c62828" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Car windows */}
      <mesh position={[0.25, 0.35, 0]}>
        <boxGeometry args={[1.01, 0.25, 0.8]} />
        <meshStandardMaterial
          color="#222222"
          metalness={0.9}
          roughness={0.1}
          emissive="#222222"
          emissiveIntensity={0.1}
        />
      </mesh>

      {/* Wheels */}
      {[-0.6, 0.6].map((x) =>
        [0.5, -0.5].map((z, i) => (
          <mesh
            key={`${x}-${z}-${i}`}
            position={[x, -0.25, z]}
            rotation={[Math.PI / 2, 0, 0]}
          >
            <cylinderGeometry args={[0.2, 0.2, 0.1, 16]} />
            <meshStandardMaterial color="#111" metalness={0.5} roughness={0.8} />
          </mesh>
        ))
      )}

      {/* Headlights */}
      <mesh position={[-0.95, 0, 0.35]}>
        <boxGeometry args={[0.05, 0.1, 0.2]} />
        <meshStandardMaterial
          color="#fff"
          emissive="#fff"
          emissiveIntensity={0.5}
        />
      </mesh>
      <mesh position={[-0.95, 0, -0.35]}>
        <boxGeometry args={[0.05, 0.1, 0.2]} />
        <meshStandardMaterial
          color="#fff"
          emissive="#fff"
          emissiveIntensity={0.5}
        />
      </mesh>
    </group>
  );
};

// ---------------------- Model Loader with fallback ----------------------
const Model = ({ modelPath }) => {
  try {
    const { scene } = useGLTF(modelPath);
    return <primitive object={scene} scale={1} />;
  } catch (err) {
    console.warn(`❌ Failed to load ${modelPath}. Showing fallback model.`);
    return <CarModelFallback />;
  }
};

// ---------------------- Scene Component ----------------------
const Scene3D = ({
  modelPath,
  autoRotate = true,
  backgroundColor = "transparent",
}) => {
  return (
    <motion.div
      className="w-full h-[400px] md:h-[500px] lg:h-[600px]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ fov: 45 }}
        style={{ background: backgroundColor }}
      >
        <Suspense fallback={<CarModelFallback />}>
          <PresentationControls
            global
            zoom={0.8}
            rotation={[0, -Math.PI / 4, 0]}
            polar={[-Math.PI / 4, Math.PI / 4]}
            azimuth={[-Math.PI / 4, Math.PI / 4]}
          >
            <Stage environment="city" intensity={1} shadows>
              <Model modelPath={modelPath} />
            </Stage>
          </PresentationControls>

          {autoRotate && (
            <OrbitControls
              autoRotate
              autoRotateSpeed={1.5}
              enableZoom={false}
            />
          )}

          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </motion.div>
  );
};

export default Scene3D;
