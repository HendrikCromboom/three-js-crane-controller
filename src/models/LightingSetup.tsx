import * as THREE from 'three';

export class LightingSetup {
  static addToScene(scene: THREE.Scene) {
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const sun = new THREE.DirectionalLight(0xffffff, 0.8);
    sun.position.set(50, 50, 30);
    sun.castShadow = true;
    sun.shadow.camera.left = -30;
    sun.shadow.camera.right = 30;
    sun.shadow.camera.top = 30;
    sun.shadow.camera.bottom = -30;
    sun.shadow.mapSize.set(2048, 2048);
    scene.add(sun);
  }
}
