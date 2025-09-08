import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  PresentationControls,
  Stage,
  useGLTF,
  Environment,
  Html,
  useProgress,
} from "@react-three/drei";
import { motion } from "framer-motion";
import React from "react";

/** ---------- Nice loading overlay (percent) ---------- */
function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div style={{ fontSize: 14, fontFamily: "sans-serif" }}>
        Loading… {Math.round(progress)}%
      </div>
    </Html>
  );
}

/** ---------- Minimal error boundary to catch real load errors ---------- */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() { return { hasError: true }; }
  componentDidCatch() { /* you can log here if needed */ }
  render() {
    if (this.state.hasError) return this.props.fallback;
    return this.props.children;
  }
}

/** ---------- Your coded car fallback (unchanged) ---------- */
const CarModelFallback = () => {
  return (
    <group>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2, 0.5, 1]} />
        <meshStandardMaterial color="#c62828" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[0.25, 0.35, 0]}>
        <boxGeometry args={[1, 0.3, 0.9]} />
        <meshStandardMaterial color="#c62828" metalness={0.8} roughness={0.2} />
      </mesh>
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
      {[-0.6, 0.6].map((x) =>
        [0.5, -0.5].map((z, i) => (
          <mesh key={`${x}-${z}-${i}`} position={[x, -0.25, z]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.2, 0.2, 0.1, 16]} />
            <meshStandardMaterial color="#111" metalness={0.5} roughness={0.8} />
          </mesh>
        ))
      )}
      <mesh position={[-0.95, 0, 0.35]}>
        <boxGeometry args={[0.05, 0.1, 0.2]} />
        <meshStandardMaterial color="#fff" emissive="#fff" emissiveIntensity={0.5} />
      </mesh>
      <mesh position={[-0.95, 0, -0.35]}>
        <boxGeometry args={[0.05, 0.1, 0.2]} />
        <meshStandardMaterial color="#fff" emissive="#fff" emissiveIntensity={0.5} />
      </mesh>
    </group>
  );
};

/** ---------- Model loader (no try/catch; let Suspense/ErrorBoundary do it) ---------- */
const Model = ({ modelPath }) => {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} scale={1} dispose={null} />;
};

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
      <Canvas shadows dpr={[1, 2]} camera={{ fov: 45 }} style={{ background: backgroundColor }}>
        {/* Keep Presentation/Stage always mounted. Remove Stage's environment to avoid extra suspension. */}
        <PresentationControls
          global
          zoom={0.8}
          rotation={[0, -Math.PI / 4, 0]}
          polar={[-Math.PI / 4, Math.PI / 4]}
          azimuth={[-Math.PI / 4, Math.PI / 4]}
        >
          {/* Stage WITHOUT environment to reduce first-load suspension */}
          <Stage intensity={1} shadows>
            {/* Only the model suspends here; show a neutral loader, not a car */}
            <ErrorBoundary fallback={<CarModelFallback />}>
              <Suspense fallback={<Loader />}>
                <Model modelPath={modelPath} />
              </Suspense>
            </ErrorBoundary>
          </Stage>
        </PresentationControls>

        {autoRotate && <OrbitControls autoRotate autoRotateSpeed={1.5} enableZoom={false} />}

        {/* Environment can still suspend; give it its own null fallback so you don't see a car while HDR loads */}
        <Suspense fallback={null}>
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </motion.div>
  );
};

export default Scene3D;
