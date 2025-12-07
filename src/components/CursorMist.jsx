import React, { useEffect, useRef } from "react";
import "./cursor.css";

export default function CursorMist() {
  const layers = useRef([]);

  useEffect(() => {
    let mouseX = 0, mouseY = 0;

    const handleMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", handleMove);

    const animate = () => {
      layers.current.forEach((layer, i) => {
        const delay = (i + 1) * 0.06; // 레이어별 딜레이 차이
        const currentX = parseFloat(layer.dataset.x) || 0;
        const currentY = parseFloat(layer.dataset.y) || 0;

        const newX = currentX + (mouseX - currentX) * delay;
        const newY = currentY + (mouseY - currentY) * delay;

        layer.dataset.x = newX;
        layer.dataset.y = newY;

        // 안개 느낌: 늘어진 타원형 + 강한 blur
        layer.style.transform = `translate(${newX - 200}px, ${newY - 120}px) rotate(${i * 20}deg)`;
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <div className="mist-container">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className={`mist-chunk chunk-${i}`}
          ref={(el) => (layers.current[i] = el)}
        />
      ))}
    </div>
  );
}
