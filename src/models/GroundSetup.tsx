import * as THREE from 'three';

export class GroundSetup {
  static addToScene(scene: THREE.Scene) {
    const groundGeo = new THREE.PlaneGeometry(100, 100);
    const groundMat = new THREE.MeshStandardMaterial({ color: 0x6b8e23 });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    scene.add(ground);

    const grid = new THREE.GridHelper(100, 20, 0x444444, 0x888888);
    scene.add(grid);
  }
}
