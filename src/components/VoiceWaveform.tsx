import React, { useEffect, useRef } from 'react';

const VoiceWaveform: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth * window.devicePixelRatio;
    canvas.height = canvas.offsetHeight * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    const bars = 50;
    const barWidth = canvas.offsetWidth / bars;
    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      for (let i = 0; i < bars; i++) {
        const barHeight = Math.sin((Date.now() * 0.005) + (i * 0.2)) * 30 + 40;
        const x = i * barWidth;
        const y = (canvas.offsetHeight - barHeight) / 2;

        const gradient = ctx.createLinearGradient(0, y, 0, y + barHeight);
        gradient.addColorStop(0, '#00d4ff');
        gradient.addColorStop(0.5, '#0f4c75');
        gradient.addColorStop(1, '#1a1a2e');

        ctx.fillStyle = gradient;
        ctx.fillRect(x, y, barWidth - 2, barHeight);
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-24 opacity-80"
      style={{ width: '100%', height: '96px' }}
    />
  );
};

export default VoiceWaveform;