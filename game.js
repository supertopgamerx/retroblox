// 3D RetroBLOX Game Engine Code for Raspberry Pi 5, Chromebook, and All Devices

import * as THREE from 'three';

class GameEngine {
    constructor() {
        this.renderer = new THREE.WebGLRenderer();
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

        this.init();
    }

    init() {
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);

        this.camera.position.z = 5;

        window.addEventListener('resize', this.onWindowResize.bind(this));
    }

    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    createCube() {
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const cube = new THREE.Mesh(geometry, material);
        this.scene.add(cube);
        return cube;
    }

    gameLoop() {
        requestAnimationFrame(this.gameLoop.bind(this));
        this.renderer.render(this.scene, this.camera);
    }

    start() {
        const cube = this.createCube();
        this.gameLoop();
    }
}

const gameEngine = new GameEngine();
gameEngine.start();