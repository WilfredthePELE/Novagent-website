import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import * as THREE from 'three';

function makeStd(colorHex, emissiveHex, intensity = 0.35) {
  return useMemo(
    () => ({
      roughness: 0.28,
      metalness: 0.45,
      color: new THREE.Color(colorHex),
      emissive: new THREE.Color(emissiveHex),
      emissiveIntensity: intensity,
    }),
    []
  );
}
function makeRing(colorHex) {
  return useMemo(
    () => ({
      roughness: 0.2,
      metalness: 0.95,
      color: new THREE.Color(colorHex),
    }),
    []
  );
}
function makeDot(colorHex, intensity = 1.1) {
  return useMemo(
    () => ({
      roughness: 0.25,
      metalness: 0.1,
      color: new THREE.Color(colorHex),
      emissive: new THREE.Color(colorHex),
      emissiveIntensity: intensity,
    }),
    []
  );
}

function Floating3DContent() {
  const groupRef = useRef(null);

  const bodyMat = makeStd('#7aa6ff', '#1c2a55', 0.35);
  const ringMatA = makeRing('#6366F1');
  const ringMatB = makeRing('#22D3EE');
  const dotMatA = makeDot('#22D3EE', 1.1);
  const dotMatB = makeDot('#6366F1', 0.85);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const g = groupRef.current;
    if (g) {
      g.rotation.set(Math.sin(t * 0.35) * 0.35, 0.5 + t * 0.2, 0.1);
      g.position.y = Math.sin(t * 0.55) * 0.35;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh rotation={[1.05, 0.5, 0]}>
        <torusKnotGeometry args={[2.0, 0.62, 220, 38, 2, 3]} />
        <meshStandardMaterial {...bodyMat} />
      </mesh>

      <mesh rotation={[1.6, 0.52, 0]} scale={[1.12, 1.12, 1.12]}>
        <torusGeometry args={[3.9, 0.08, 72, 200]} />
        <meshStandardMaterial {...ringMatA} />
      </mesh>
      <mesh rotation={[-1.25, 0.75, 0]} scale={[1.14, 1.14, 1.14]}>
        <torusGeometry args={[4.4, 0.055, 52, 220]} />
        <meshStandardMaterial {...ringMatB} />
      </mesh>

      <mesh position={[5.6, 3.8, -6]}>
        <sphereGeometry args={[0.62, 32, 32]} />
        <meshStandardMaterial {...dotMatA} />
      </mesh>
      <mesh position={[-5.4, -2.8, -5]}>
        <sphereGeometry args={[0.4, 28, 28]} />
        <meshStandardMaterial {...dotMatB} />
      </mesh>
      <mesh position={[3.2, -5.4, -4]} scale={0.75}>
        <sphereGeometry args={[0.34, 24, 24]} />
        <meshStandardMaterial {...dotMatA} />
      </mesh>
      <mesh position={[-4.2, 5.1, -7]} scale={0.65}>
        <sphereGeometry args={[0.32, 22, 22]} />
        <meshStandardMaterial {...dotMatB} />
      </mesh>
    </group>
  );
}

export default function HeroScene() {
  return (
    <div className="hero-scene">
      <Canvas
        dpr={[1, Math.min(window.devicePixelRatio, 1.6)]}
        gl={{ antialias: true, alpha: true }}
        camera={{ position: [0, 0, 12], fov: 48 }}
      >
        <ambientLight intensity={0.55} />
        <directionalLight position={[8, 6, 12]} intensity={1.25} />
        <pointLight color="#6366F1" position={[-10, 5, -2]} intensity={40} decay={2} />
        <pointLight color="#22D3EE" position={[10, -6, -2]} intensity={40} decay={2} />

        <Floating3DContent />

        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.55}
          minPolarAngle={Math.PI / 2.6}
          maxPolarAngle={Math.PI / 1.85}
          enablePan={false}
          enableDamping
          dampingFactor={0.08}
        />
      </Canvas>
    </div>
  );
}
