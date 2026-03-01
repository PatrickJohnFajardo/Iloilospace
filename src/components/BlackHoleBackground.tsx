'use client';

import React, { useEffect, useRef } from 'react';

const BlackHoleBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;
        let animationFrameId: number;

        const stars: Star[] = [];
        const numStars = 600;
        const mouse = { x: -1000, y: -1000 };

        class Star {
            x: number;
            y: number;
            size: number;
            originalX: number;
            originalY: number;
            vx: number;
            vy: number;
            opacity: number;
            angle: number;
            orbitSpeed: number;

            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.originalX = this.x;
                this.originalY = this.y;
                this.size = Math.random() * 1.5 + 0.2;
                this.vx = (Math.random() - 0.5) * 0.1;
                this.vy = (Math.random() - 0.5) * 0.1;
                this.opacity = Math.random() * 0.5 + 0.2;
                this.angle = Math.random() * Math.PI * 2;
                this.orbitSpeed = (Math.random() - 0.5) * 0.05;
            }

            update() {
                // Natural movement
                this.x += this.vx;
                this.y += this.vy;

                // Twinkle effect
                this.opacity += (Math.random() - 0.5) * 0.05;
                if (this.opacity < 0.2) this.opacity = 0.2;
                if (this.opacity > 0.8) this.opacity = 0.8;

                // Mouse 'Black Hole' interaction
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const maxDist = 300;

                if (distance < maxDist) {
                    const force = (maxDist - distance) / maxDist;

                    // Strong pull towards center
                    this.x += dx * force * 0.15;
                    this.y += dy * force * 0.15;

                    // Slight orbital swirling
                    const swirlX = Math.cos(this.angle) * force * 5;
                    const swirlY = Math.sin(this.angle) * force * 5;
                    this.x += swirlX;
                    this.y += swirlY;
                    this.angle += this.orbitSpeed;

                    // Increase brightness as it gets closer
                    this.opacity = Math.min(1, this.opacity + force * 0.5);
                }

                // Wrap around screen
                if (this.x < -50) this.x = width + 50;
                if (this.x > width + 50) this.x = -50;
                if (this.y < -50) this.y = height + 50;
                if (this.y > height + 50) this.y = -50;
            }

            draw(ctx: CanvasRenderingContext2D) {
                // If it's too close to the black hole center, don't draw it (swallowed)
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 15) return;

                ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const setup = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            stars.length = 0;
            for (let i = 0; i < numStars; i++) {
                stars.push(new Star());
            }
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        const render = () => {
            // Background is technically already black from CSS, but clear with transparency
            ctx.clearRect(0, 0, width, height);

            // Draw Black Hole Event Horizon
            if (mouse.x > 0 && mouse.y > 0) {
                // Inner shadow (Black Hole)
                ctx.beginPath();
                ctx.arc(mouse.x, mouse.y, 20, 0, Math.PI * 2);
                ctx.fillStyle = '#000';
                ctx.fill();

                // Accretion disk / glow
                const gradient = ctx.createRadialGradient(mouse.x, mouse.y, 10, mouse.x, mouse.y, 80);
                gradient.addColorStop(0, 'rgba(255, 255, 255, 0.4)');
                gradient.addColorStop(0.2, 'rgba(255, 255, 255, 0.1)');
                gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(mouse.x, mouse.y, 80, 0, Math.PI * 2);
                ctx.fill();

                // Light bending effect
                ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.arc(mouse.x, mouse.y, 100, 0, Math.PI * 2);
                ctx.stroke();
            }

            stars.forEach(star => {
                star.update();
                star.draw(ctx);
            });
            animationFrameId = requestAnimationFrame(render);
        };

        setup();
        window.addEventListener('resize', setup);
        window.addEventListener('mousemove', handleMouseMove);
        render();

        return () => {
            window.removeEventListener('resize', setup);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                zIndex: -1,
                pointerEvents: 'none',
                background: 'transparent'
            }}
        />
    );
};

export default BlackHoleBackground;
