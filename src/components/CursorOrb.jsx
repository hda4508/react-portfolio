import React, { useEffect, useRef } from "react";
import "./cursor.css";

export default function CursorOrb() {
  const mistRef = useRef(null);

  useEffect(() => {
    const mist = mistRef.current;
    if (!mist) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;
    let rafId;

    const handleMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const animate = () => {
      // 마우스를 바로 따라가기보단, 살짝 느리게 → 흐르는 느낌
      currentX += (targetX - currentX) * 0.09;
      currentY += (targetY - currentY) * 0.09;

      // 컨테이너 자체를 마우스 위치에만 옮기고,
      // 안쪽 레이어들이 따로 일렁이게
      mist.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;

      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMove);
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="cursor-mist" ref={mistRef}>
      <span className="mist-layer layer1" />
      <span className="mist-layer layer2" />
      <span className="mist-layer layer3" />
    </div>
  );
}
