import * as THREE from 'three';

export class CargoBox {
  static create(): THREE.Mesh {
    const cargoGeo = new THREE.BoxGeometry(2, 2, 2);
    const cargoMat = new THREE.MeshStandardMaterial({ color: 0x8b4513 });
    const cargo = new THREE.Mesh(cargoGeo, cargoMat);
    cargo.position.set(8, 1, 5);
    cargo.castShadow = true;
    return cargo;
  }
}
