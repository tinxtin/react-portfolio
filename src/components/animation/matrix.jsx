import React, { useRef, useEffect } from 'react'

const Canvas = () => {

    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);
        let columns = Math.floor(width / 20);

        const characters = 'ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ01123456789'
        const charArray = characters.split('');

        let drops = [];
        for (let i = 0; i < columns; i++) {
            drops[i] = 1
        }

        let frameRate = 15;
        let lastFrameTime = Date.now();


        const draw = () => {
            ctx.fillStyle = 'rgba(0, 0, 0, .1)';
            ctx.fillRect(0, 0, width, height);
            ctx.fillStyle = '#0f0';
            ctx.font = '15px monospace';

            for (let i = 0; i < drops.length; i++) {
                const text = charArray[Math.floor(Math.random() * charArray.length)]
                ctx.fillText(text, i * 20, drops[i] * 20);

                if (drops[i] * 20 > height && Math.random() > .95) {
                    drops[i] = 0;
                }

                drops[i]++; 
            }
        }

        const render = () => {
            const currenTime = Date.now();
            const elapsedTime = currenTime - lastFrameTime;

            if (elapsedTime > 1000 / frameRate) {
                draw();
                lastFrameTime = currenTime;
            }
            requestAnimationFrame(render)
        }
        render()

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            columns = Math.floor(width/10);
            drops = [];

            for (let i = 0; i < columns; i++) {
                drops[i] = 1;
            }
        }

        const isMobileDevice = /Mobi/i.test(window.navigator.userAgent)

        if (!isMobileDevice) {
            window.addEventListener('resize', handleResize);
        }

        return () => {
            if (!isMobileDevice) {
                window.addEventListener('resize', handleResize);
            }
        }
    })

    return <canvas className='fixed top-0 left-0 z-[-1]' ref={canvasRef}/>
}

export default Canvas;