import * as THREE from 'three';

export class ThreeInitializer {
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;

  constructor(mountElement: HTMLDivElement) {
    // Scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x87ceeb);
    this.scene.fog = new THREE.Fog(0x87ceeb, 50, 200);

    // Camera
    this.camera = new THREE.PerspectiveCamera(
      60,
      mountElement.clientWidth / mountElement.clientHeight,
      0.1,
      1000
    );
    this.camera.position.set(30, 25, 30);
    this.camera.lookAt(0, 10, 0);

    // Renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(mountElement.clientWidth, mountElement.clientHeight);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // Mount
    mountElement.appendChild(this.renderer.domElement);
  }
}