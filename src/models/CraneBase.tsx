import * as THREE from 'three';

export class CraneBase {
  static create(): THREE.Object3D {
    const craneMat = new THREE.MeshStandardMaterial({ color: 0xffa500 });

    const baseGeo = new THREE.CylinderGeometry(2, 3, 2, 8);
    const base = new THREE.Mesh(baseGeo, craneMat);
    base.position.y = 1;
    base.castShadow = true;

    const platformGeo = new THREE.CylinderGeometry(2.5, 2.5, 0.5, 8);
    const platform = new THREE.Mesh(platformGeo, craneMat);
    platform.position.y = 2.5;
    platform.castShadow = true;
    base.add(platform);

    const towerGeo = new THREE.BoxGeometry(1.5, 15, 1.5);
    const tower = new THREE.Mesh(towerGeo, craneMat);
    tower.position.y = 7.5;
    tower.castShadow = true;
    platform.add(tower);

    return base;
  }
}
