import React, { useRef, useEffect, useState } from "react";
import { useFrame, useLoader} from "@react-three/fiber";
import * as THREE from "three";

import EarthDayMap from "./textures/8k_earth_daymap.jpg";
import EarthNightMap from "./textures/8k_earth_nightmap.jpg";
import EarthNormalMap from "./textures/8k_earth_normal_map.jpg";
import EarthSpecularMap from "./textures/8k_earth_specular_map.jpg";
import EarthCloudsMap from "./textures/8k_earth_clouds.jpg";
import { TextureLoader } from "three";

export function Earth(props) {
  const [colorMap, nightMap, normalMap, specularMap, cloudsMap] = useLoader(
    TextureLoader,
    [EarthDayMap, EarthNightMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap]
  );

  const earthRef = useRef();
  const cloudsRef = useRef();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [earthRotation, setEarthRotation] = useState(0);
  const [cloudRotation, setCloudRotation] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useFrame((state, delta) => {
    // Smooth earth rotation with damped scroll influence
    const targetEarthRotation = scrollPosition * 0.001; // Reduced rotation multiplier
    const earthRotationDelta = (targetEarthRotation - earthRotation) * 0.1; // Smooth interpolation
    
    const newEarthRotation = earthRotation + earthRotationDelta;
    setEarthRotation(newEarthRotation);

    // Independent cloud rotation
    const newCloudRotation = cloudRotation + 0.0005;
    setCloudRotation(newCloudRotation);

    // Apply rotations
    if (earthRef.current) {
      earthRef.current.rotation.y = newEarthRotation;
    }

    if (cloudsRef.current) {
      cloudsRef.current.rotation.y = newEarthRotation + newCloudRotation;
    }
  });

  return (
    <>
      {/* Lighting setup */}
      <ambientLight intensity={5} color="#ffffff" />
      
      <directionalLight 
        position={[5, 5, 5]} 
        intensity={5} 
        color="#f6f3ea"
        castShadow
      />
      
      <pointLight 
        color="#ffffff" 
        position={[2, 0, 5]} 
        intensity={1.2} 
        distance={15}
      />

      {/* Clouds Layer */}
      <mesh ref={cloudsRef} position={[0, 0, 3]}>
        <sphereGeometry args={[1.005, 32, 32]} />
        <meshPhongMaterial
          map={cloudsMap}
          opacity={0.15}
          depthWrite={true}
          transparent={true}
          side={THREE.DoubleSide}
          shininess={50}
        />
      </mesh>
      
      {/* Earth Mesh with Day/Night Blending */}
      <mesh ref={earthRef} position={[0, 0, 3]} castShadow receiveShadow>
        <sphereGeometry args={[1, 32, 32]} />
        <shaderMaterial 
          uniforms={{
            dayTexture: { value: colorMap },
            nightTexture: { value: nightMap },
            normalMap: { value: normalMap },
            specularMap: { value: specularMap },
            lightIntensity: { value: 1 } // Increased light intensity
          }}
          vertexShader={`
            varying vec2 vUv;
            varying vec3 vNormal;
            
            void main() {
              vUv = uv;
              vNormal = normal;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `}
          fragmentShader={`
            uniform sampler2D dayTexture;
            uniform sampler2D nightTexture;
            uniform sampler2D normalMap;
            uniform sampler2D specularMap;
            uniform float lightIntensity;
            
            varying vec2 vUv;
            varying vec3 vNormal;
            
            void main() {
              vec3 dayColor = texture2D(dayTexture, vUv).rgb;
              vec3 nightColor = texture2D(nightTexture, vUv).rgb;
              
              // Enhanced day/night blending with brighter night lights
              float dayNightMix = dot(vNormal, vec3(0.0, 0.0, 1.0)) * 0.5 + 0.5;
              
              // Boost night light intensity
              vec3 enhancedNightColor = nightColor * 1.5;
              
              vec3 finalColor = mix(enhancedNightColor, dayColor, dayNightMix);
              
              gl_FragColor = vec4(finalColor, 1.0);
            }
          `}
        />
      </mesh>
    </>
  );
}