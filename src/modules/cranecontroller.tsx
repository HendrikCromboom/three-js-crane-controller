import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import type { ControlsState } from '../interfaces/ControleState';
import type { KeyMap } from '../interfaces/KeyMap';
import { ThreeInitializer } from '../models/ThreeInitializer';
import { LightingSetup } from '../models/LightingSetup';
import { GroundSetup } from '../models/GroundSetup';
import { CraneBase } from '../models/CraneBase';
import { CargoBox } from '../models/CargoBox';

export default function CraneController() {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const [controls, setControls] = useState<ControlsState>({
    boom: 0,
    cable: 5,
    rotation: 0,
    trolley: 0
  });

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const three = new ThreeInitializer(mountRef.current);

    LightingSetup.addToScene(three.scene);
    GroundSetup.addToScene(three.scene);

    const base = CraneBase.create();
    three.scene.add(base);

    const cargo = CargoBox.create();
    three.scene.add(cargo);
    

    // Grid
    const grid = new THREE.GridHelper(100, 20, 0x444444, 0x888888);
    three.scene.add(grid);


    // Rotating platform
    const platformGeo = new THREE.CylinderGeometry(2.5, 2.5, 0.5, 8);
    const platform = new THREE.Mesh(platformGeo, CraneBase.craneMat);
    platform.position.y = 2.5;
    platform.castShadow = true;
    base.add(platform);

    // Tower
    const towerGeo = new THREE.BoxGeometry(1.5, 15, 1.5);
    const tower = new THREE.Mesh(towerGeo, CraneBase.craneMat);
    tower.position.y = 7.5;
    tower.castShadow = true;
    platform.add(tower);

    // Boom (main arm)
    const boomGeo = new THREE.BoxGeometry(20, 0.8, 0.8);
    const boom = new THREE.Mesh(boomGeo, CraneBase.craneMat);
    boom.position.set(0, 15, 0);
    boom.castShadow = true;
    platform.add(boom);

    const boomArmGeo = new THREE.BoxGeometry(20, 0.8, 0.8);
    const boomArm = new THREE.Mesh(boomArmGeo, CraneBase.craneMat);
    boomArm.position.set(10, 0, 0); 
    boomArm.castShadow = true;
    boom.add(boomArm);

    // Trolley (moves along boom)
    const trolleyGeo = new THREE.BoxGeometry(1, 1, 1);
    const trolleyMat = new THREE.MeshStandardMaterial({ color: 0xff4444 });
    const trolley = new THREE.Mesh(trolleyGeo, trolleyMat);
    trolley.castShadow = true;
    boomArm.add(trolley); // FIXED: Changed to attach to boomArm instead of boom

    // Cable
    const cableMat = new THREE.LineBasicMaterial({ color: 0x333333, linewidth: 2 });
    const cableGeo = new THREE.BufferGeometry();
    const cablePoints = [new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, -5, 0)];
    cableGeo.setFromPoints(cablePoints);
    const cable = new THREE.Line(cableGeo, cableMat);
    three.scene.add(cable);
    // Hook
    const hookGeo = new THREE.CylinderGeometry(0.3, 0.3, 0.8, 8);
    const hookMat = new THREE.MeshStandardMaterial({ color: 0x333333 });
    const hook = new THREE.Mesh(hookGeo, hookMat);
    hook.castShadow = true;
    three.scene.add(hook);
    // Keyboard controls
    const keys: KeyMap = {};
    const handleKeyDown = (e: KeyboardEvent): void => { keys[e.key.toLowerCase()] = true; };
    const handleKeyUp = (e: KeyboardEvent): void => { keys[e.key.toLowerCase()] = false; };
    
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    // Animation loop
    let boomAngle = 0;
    let cableLength = 5;
    let rotation = 0;
    let trolleyPos: number = 0;

    function animate(): void {
      requestAnimationFrame(animate);
            
      // Boom up/down (Q/E)
      if (keys['q'] && boomAngle < 0.3) boomAngle += 0.01;
      if (keys['e'] && boomAngle > -0.5) boomAngle -= 0.01;
      boom.rotation.z = boomAngle;

      // Cable up/down (W/S)
      if (keys['w'] && cableLength > 1) cableLength -= 0.1;
      if (keys['s'] && cableLength < 15) cableLength += 0.1;

            // Get trolley world position
      const trolleyWorldPos = new THREE.Vector3();
      trolley.getWorldPosition(trolleyWorldPos);

      // Update cable position
      cable.position.copy(trolleyWorldPos);
      hook.position.set(trolleyWorldPos.x, trolleyWorldPos.y - cableLength, trolleyWorldPos.z);


      const newCablePoints = [
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(0, -cableLength, 0)
      ];
      cable.geometry.setFromPoints(newCablePoints);
      hook.position.y = -cableLength;

      // 🔄 Reset cable and hook rotation to face downward
      cable.rotation.set(0, 0, 0);
      hook.rotation.set(0, 0, 0);

      // Crane rotation (A/D)
      if (keys['a']) rotation += 0.02;
      if (keys['d']) rotation -= 0.02;
      platform.rotation.y = rotation;

      // Trolley movement (Arrow Left/Right)
      if (keys['arrowleft'] && trolleyPos > -8) trolleyPos -= 0.1;
      if (keys['arrowright'] && trolleyPos < 8) trolleyPos += 0.1;
      trolley.position.x = trolleyPos;

      setControls({
        boom: Number(((boomAngle + 0.5) / 0.8 * 100).toFixed(0)),
        cable: Number(cableLength.toFixed(1)),
        rotation: Number(((rotation * 180 / Math.PI) % 360).toFixed(0)),
        trolley: Number(trolleyPos.toFixed(1))
      });

      three.renderer.render(three.scene, three.camera);
    }

    animate();

    // Handle window resize
    const handleResize = (): void => {
      if (!mountRef.current) return;
      three.camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
      three.camera.updateProjectionMatrix();
      three.renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(three.renderer.domElement);
      three.renderer.dispose();
    };
  }, []);

  return (
    <div className="w-full h-screen flex flex-col bg-gray-900">
      <div ref={mountRef} className="flex-1" />
      
      <div className="bg-gray-800 text-white p-4">
        <h2 className="text-2xl font-bold mb-3 text-orange-400">🏗️ Crane Controller</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          <div className="bg-gray-700 p-3 rounded">
            <div className="text-gray-400 text-sm">Boom Angle</div>
            <div className="text-2xl font-bold">{controls.boom}%</div>
          </div>
          <div className="bg-gray-700 p-3 rounded">
            <div className="text-gray-400 text-sm">Cable Length</div>
            <div className="text-2xl font-bold">{controls.cable}m</div>
          </div>
          <div className="bg-gray-700 p-3 rounded">
            <div className="text-gray-400 text-sm">Rotation</div>
            <div className="text-2xl font-bold">{controls.rotation}°</div>
          </div>
          <div className="bg-gray-700 p-3 rounded">
            <div className="text-gray-400 text-sm">Trolley Pos</div>
            <div className="text-2xl font-bold">{controls.trolley}m</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="bg-gray-700 p-3 rounded">
            <div className="font-semibold mb-2 text-orange-400">Movement Controls:</div>
            <div className="space-y-1">
              <div><kbd className="bg-gray-600 px-2 py-1 rounded">W</kbd> / <kbd className="bg-gray-600 px-2 py-1 rounded">S</kbd> - Cable Up/Down</div>
              <div><kbd className="bg-gray-600 px-2 py-1 rounded">A</kbd> / <kbd className="bg-gray-600 px-2 py-1 rounded">D</kbd> - Rotate Left/Right</div>
            </div>
          </div>
          <div className="bg-gray-700 p-3 rounded">
            <div className="font-semibold mb-2 text-orange-400">Advanced Controls:</div>
            <div className="space-y-1">
              <div><kbd className="bg-gray-600 px-2 py-1 rounded">Q</kbd> / <kbd className="bg-gray-600 px-2 py-1 rounded">E</kbd> - Boom Up/Down</div>
              <div><kbd className="bg-gray-600 px-2 py-1 rounded">←</kbd> / <kbd className="bg-gray-600 px-2 py-1 rounded">→</kbd> - Trolley Left/Right</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
