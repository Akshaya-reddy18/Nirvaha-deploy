import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const SacredBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const geometriesRef = useRef<THREE.Mesh[]>([]);
  const scrollYRef = useRef(0);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 8;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    rendererRef.current = renderer;

    // Sacred Geometry - Torus (represents eternal cycle)
    const torusGeometry = new THREE.TorusGeometry(2, 0.08, 16, 100);
    const torusMaterial = new THREE.MeshBasicMaterial({
      color: 0xE6B21E,
      transparent: true,
      opacity: 0.12,
      wireframe: true,
    });
    const torus = new THREE.Mesh(torusGeometry, torusMaterial);
    torus.position.set(-3, 1, -2);
    scene.add(torus);
    geometriesRef.current.push(torus);

    // Second Torus
    const torus2 = new THREE.Mesh(torusGeometry.clone(), torusMaterial.clone());
    torus2.material.color.setHex(0x4D3062);
    torus2.material.opacity = 0.1;
    torus2.position.set(3, -1, -3);
    torus2.scale.set(0.7, 0.7, 0.7);
    scene.add(torus2);
    geometriesRef.current.push(torus2);

    // Sacred Circle
    const circleGeometry = new THREE.RingGeometry(1.5, 1.6, 64);
    const circleMaterial = new THREE.MeshBasicMaterial({
      color: 0x00C9B1,
      transparent: true,
      opacity: 0.15,
      side: THREE.DoubleSide,
    });
    const circle = new THREE.Mesh(circleGeometry, circleMaterial);
    circle.position.set(0, 0, -4);
    scene.add(circle);
    geometriesRef.current.push(circle);

    // Handle scroll
    const handleScroll = () => {
      scrollYRef.current = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll);

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      const scrollFactor = scrollYRef.current * 0.0005;
      const time = Date.now() * 0.0003;

      // Rotate geometries based on scroll
      geometriesRef.current.forEach((mesh, index) => {
        if (index === 0) {
          // First torus - clockwise on scroll down
          mesh.rotation.z += 0.002;
          mesh.rotation.x = scrollFactor;
          mesh.rotation.y = Math.sin(time) * 0.1;
        } else if (index === 1) {
          // Second torus - counter-clockwise
          mesh.rotation.z -= 0.0015;
          mesh.rotation.x = -scrollFactor;
          mesh.rotation.y = Math.cos(time) * 0.1;
        } else {
          // Circle - gentle pulse
          mesh.rotation.z += 0.001;
          mesh.scale.setScalar(1 + Math.sin(time * 2) * 0.05);
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      
      geometriesRef.current.forEach((mesh) => {
        if (mesh.geometry) mesh.geometry.dispose();
        if (mesh.material) {
          if (Array.isArray(mesh.material)) {
            mesh.material.forEach((mat) => mat.dispose());
          } else {
            mesh.material.dispose();
          }
        }
      });

      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none -z-20"
      style={{ 
        filter: 'blur(3px)', 
        opacity: 0.5,
        mixBlendMode: 'screen'
      }}
    />
  );
};

export default SacredBackground;
