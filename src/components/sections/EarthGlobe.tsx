'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const EarthGlobe = () => {
    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const mount = mountRef.current;
        if (!mount) return;

        // Scene setup
        const scene = new THREE.Scene();
        const width = mount.clientWidth;
        const height = mount.clientHeight;

        const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
        if (width <= 768) {
            camera.position.set(0, -0.6, 4.0);
        } else {
            camera.position.set(-1.2, 0, 3.2);
        }

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setClearColor(0x000000, 0);
        renderer.shadowMap.enabled = true;
        mount.appendChild(renderer.domElement);

        const textureLoader = new THREE.TextureLoader();

        // ── RELIABLE TEXTURES (CORS Safe) ───────────────────────────────────
        const earthTexture = textureLoader.load(
            'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg'
        );
        earthTexture.colorSpace = THREE.SRGBColorSpace;

        const cloudsTexture = textureLoader.load(
            'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_clouds_1024.png'
        );

        const specularTexture = textureLoader.load(
            'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_specular_2048.jpg'
        );

        const bumpTexture = textureLoader.load(
            'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_normal_2048.jpg'
        );

        // ── EARTH SPHERE ──────────────────────────────────────────────────────
        const earthGeo = new THREE.SphereGeometry(1, 128, 128);
        const earthMat = new THREE.MeshPhongMaterial({
            map: earthTexture,
            specularMap: specularTexture,
            specular: new THREE.Color(0x222222),
            shininess: 15,
            bumpMap: bumpTexture,
            bumpScale: 0.04,
        });
        const earth = new THREE.Mesh(earthGeo, earthMat);
        scene.add(earth);

        // ── CLOUD LAYER ───────────────────────────────────────────────────────
        const cloudGeo = new THREE.SphereGeometry(1.008, 128, 128);
        const cloudMat = new THREE.MeshPhongMaterial({
            map: cloudsTexture,
            transparent: true,
            opacity: 0.5,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
        });
        const clouds = new THREE.Mesh(cloudGeo, cloudMat);
        scene.add(clouds);

        // ── ATMOSPHERE GLOW (inner) ───────────────────────────────────────────
        const atmosGeo = new THREE.SphereGeometry(1.015, 64, 64);
        const atmosMat = new THREE.MeshPhongMaterial({
            color: 0x3399ff,
            transparent: true,
            opacity: 0.07,
            side: THREE.FrontSide,
            depthWrite: false,
        });
        const atmosphere = new THREE.Mesh(atmosGeo, atmosMat);
        scene.add(atmosphere);

        // ── OUTER GLOW (shader-based halo) ────────────────────────────────────
        const glowGeo = new THREE.SphereGeometry(1.2, 64, 64);
        const glowMat = new THREE.ShaderMaterial({
            uniforms: {
                c: { value: 0.4 },
                p: { value: 4.5 },
                glowColor: { value: new THREE.Color(0x1a6fff) },
                viewVector: { value: camera.position },
            },
            vertexShader: `
                uniform vec3 viewVector;
                uniform float c;
                uniform float p;
                varying float intensity;
                void main() {
                    vec3 vNormal = normalize(normalMatrix * normal);
                    vec3 vNormel = normalize(normalMatrix * viewVector);
                    intensity = pow(c - dot(vNormal, vNormel), p);
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                uniform vec3 glowColor;
                varying float intensity;
                void main() {
                    vec3 glow = glowColor * intensity;
                    gl_FragColor = vec4(glow, intensity * 0.6);
                }
            `,
            side: THREE.BackSide,
            blending: THREE.AdditiveBlending,
            transparent: true,
            depthWrite: false,
        });
        const glow = new THREE.Mesh(glowGeo, glowMat);
        scene.add(glow);

        // ── STARS ─────────────────────────────────────────────────────────────
        const starsGeo = new THREE.BufferGeometry();
        const starsCount = 6000;
        const starsPos = new Float32Array(starsCount * 3);
        const starsSizes = new Float32Array(starsCount);
        for (let i = 0; i < starsCount; i++) {
            starsPos[i * 3] = (Math.random() - 0.5) * 800;
            starsPos[i * 3 + 1] = (Math.random() - 0.5) * 800;
            starsPos[i * 3 + 2] = (Math.random() - 0.5) * 800;
            starsSizes[i] = Math.random() * 0.8 + 0.2;
        }
        starsGeo.setAttribute('position', new THREE.BufferAttribute(starsPos, 3));
        starsGeo.setAttribute('size', new THREE.BufferAttribute(starsSizes, 1));
        const starsMat = new THREE.PointsMaterial({
            color: 0xffffff,
            size: 0.25,
            transparent: true,
            opacity: 0.9,
            sizeAttenuation: true,
        });
        const stars = new THREE.Points(starsGeo, starsMat);
        scene.add(stars);

        // ── LIGHTING ──────────────────────────────────────────────────────────
        // Dimmer ambient light to make the earth darker
        const ambient = new THREE.AmbientLight(0xffffff, 0.15);
        scene.add(ambient);

        // Primary sun light
        const sunLight = new THREE.DirectionalLight(0xffffff, 1.4);
        sunLight.position.set(-5, 3, 5);
        scene.add(sunLight);

        // Subtle fill to soften shadow on the dark side
        const fillLight = new THREE.DirectionalLight(0x90b0d0, 0.2);
        fillLight.position.set(5, -2, -5);
        scene.add(fillLight);

        // ── INITIAL ORIENTATION → face Philippines ─────────────────────────
        const PHI_LON = 122 * (Math.PI / 180);
        const PHI_LAT = 12 * (Math.PI / 180);
        earth.rotation.y = -PHI_LON + Math.PI;
        earth.rotation.x = PHI_LAT;
        earth.rotation.z = 0.41;
        clouds.rotation.copy(earth.rotation);
        atmosphere.rotation.copy(earth.rotation);

        // ── MOUSE / TOUCH INTERACTION ──────────────────────────────────────
        let isDragging = false;
        let prevMouse = { x: 0, y: 0 };
        let velX = 0;
        let velY = 0.0003;

        const onMouseDown = (e: MouseEvent) => {
            isDragging = true;
            prevMouse = { x: e.clientX, y: e.clientY };
            velX = 0;
            velY = 0;
        };
        const onMouseMove = (e: MouseEvent) => {
            if (!isDragging) return;
            const dx = e.clientX - prevMouse.x;
            const dy = e.clientY - prevMouse.y;
            velY = dx * 0.004;
            velX = dy * 0.004;
            prevMouse = { x: e.clientX, y: e.clientY };
        };
        const onMouseUp = () => {
            isDragging = false;
        };

        let lastTouchX = 0, lastTouchY = 0;
        const onTouchStart = (e: TouchEvent) => {
            lastTouchX = e.touches[0].clientX;
            lastTouchY = e.touches[0].clientY;
            velX = 0; velY = 0;
        };
        const onTouchMove = (e: TouchEvent) => {
            const dx = e.touches[0].clientX - lastTouchX;
            const dy = e.touches[0].clientY - lastTouchY;
            velY = dx * 0.004;
            velX = dy * 0.004;
            lastTouchX = e.touches[0].clientX;
            lastTouchY = e.touches[0].clientY;
        };

        renderer.domElement.addEventListener('mousedown', onMouseDown);
        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', onMouseUp);
        renderer.domElement.addEventListener('touchstart', onTouchStart, { passive: true });
        renderer.domElement.addEventListener('touchmove', onTouchMove, { passive: true });

        // ── ANIMATION LOOP ─────────────────────────────────────────────────
        let animId: number;
        const animate = () => {
            animId = requestAnimationFrame(animate);

            if (!isDragging) {
                // Auto-rotate slowly
                earth.rotation.y += 0.0008;
                clouds.rotation.y += 0.0009;   // clouds rotate slightly faster
                atmosphere.rotation.y += 0.0008;
                // Dampen manual velocity
                velX *= 0.88;
                velY *= 0.88;
            } else {
                earth.rotation.x += velX;
                earth.rotation.y += velY;
                clouds.rotation.x += velX;
                clouds.rotation.y += velY;
                atmosphere.rotation.x += velX;
                atmosphere.rotation.y += velY;
            }

            // Keep glow facing camera
            (glowMat.uniforms.viewVector.value as THREE.Vector3).copy(camera.position);

            stars.rotation.y += 0.00005;
            renderer.render(scene, camera);
        };
        animate();

        // ── RESIZE HANDLER ─────────────────────────────────────────────────
        const onResize = () => {
            const w = mount.clientWidth;
            const h = mount.clientHeight;
            camera.aspect = w / h;
            if (w <= 768) {
                camera.position.set(0, -0.6, 4.0);
            } else {
                camera.position.set(-1.2, 0, 3.2);
            }
            camera.updateProjectionMatrix();
            renderer.setSize(w, h);
        };
        window.addEventListener('resize', onResize);

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener('resize', onResize);
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseup', onMouseUp);
            renderer.domElement.removeEventListener('mousedown', onMouseDown);
            renderer.domElement.removeEventListener('touchstart', onTouchStart);
            renderer.domElement.removeEventListener('touchmove', onTouchMove);
            if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
            renderer.dispose();
        };
    }, []);

    return (
        <div
            ref={mountRef}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 1,
                cursor: 'grab',
            }}
        />
    );
};

export default EarthGlobe;
