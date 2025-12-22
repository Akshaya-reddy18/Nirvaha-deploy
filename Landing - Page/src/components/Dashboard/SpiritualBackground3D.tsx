import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const SpiritualBackground3D = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const geometriesRef = useRef<THREE.Mesh[]>([]);
  const scrollYRef = useRef(0);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    rendererRef.current = renderer;

    // Create sacred geometry - Mandala-like structure
    const createMandala = () => {
      const group = new THREE.Group();
      const geometry = new THREE.TorusGeometry(1, 0.05, 16, 100);
      const material = new THREE.MeshBasicMaterial({
        color: 0x00D4AA,
        transparent: true,
        opacity: 0.15,
        wireframe: true,
      });

      for (let i = 0; i < 8; i++) {
        const mesh = new THREE.Mesh(geometry, material);
        mesh.rotation.z = (Math.PI / 4) * i;
        group.add(mesh);
      }

      return group;
    };

    // Create floating lotus particles
    const createLotusParticles = () => {
      const particlesGeometry = new THREE.BufferGeometry();
      const particlesCount = 100;
      const posArray = new Float32Array(particlesCount * 3);

      for (let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 10;
      }

      particlesGeometry.setAttribute(
        'position',
        new THREE.BufferAttribute(posArray, 3)
      );

      const particlesMaterial = new THREE.PointsMaterial({
        size: 0.02,
        color: 0x00C9B1,
        transparent: true,
        opacity: 0.6,
        blending: THREE.AdditiveBlending,
      });

      return new THREE.Points(particlesGeometry, particlesMaterial);
    };

    // Add geometries to scene
    const mandala1 = createMandala();
    mandala1.position.set(-2, 1, -2);
    scene.add(mandala1);
    geometriesRef.current.push(mandala1 as any);

    const mandala2 = createMandala();
    mandala2.position.set(2, -1, -3);
    mandala2.scale.set(0.7, 0.7, 0.7);
    scene.add(mandala2);
    geometriesRef.current.push(mandala2 as any);

    const particles = createLotusParticles();
    scene.add(particles);
    geometriesRef.current.push(particles as any);

    // Handle scroll
    const handleScroll = () => {
      scrollYRef.current = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll);

    // Handle resize
    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current) return;
      
      cameraRef.current.aspect = window.innerWidth / window.innerHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      const scrollFactor = scrollYRef.current * 0.001;

      // Rotate mandalas based on scroll
      geometriesRef.current.forEach((mesh, index) => {
        if (mesh.type === 'Group') {
          mesh.rotation.z += 0.001 * (index % 2 === 0 ? 1 : -1);
          mesh.rotation.x = scrollFactor * (index % 2 === 0 ? 1 : -1);
        } else if (mesh.type === 'Points') {
          mesh.rotation.y += 0.0005;
          mesh.position.y = Math.sin(Date.now() * 0.001) * 0.2;
        }
      });

      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
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

      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ filter: 'blur(2px)', opacity: 0.4 }}
    />
  );
};

export default SpiritualBackground3D;
