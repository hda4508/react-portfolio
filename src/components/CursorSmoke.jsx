import React, { useEffect, useRef } from "react";
import "./cursor-smoke.css";

export default function CursorSmoke() {
  const smokeRef = useRef(null);

  useEffect(() => {
    const container = smokeRef.current;
    if (!container) return;

    const handleMove = (e) => {
      // 작은 점 하나 만들기
      const circle = document.createElement("div");
      circle.className = "circle";

      const x = e.clientX;
      const y = e.clientY;

      // 마우스 위치 기준으로 중앙 맞추기
      circle.style.left = `${x - 5}px`;
      circle.style.top = `${y - 5}px`;

      container.appendChild(circle);

      // 애니메이션 끝나면 DOM에서 제거
      setTimeout(() => {
        circle.remove();
      }, 1000); // animation: 1s 이니까 1초 후 제거
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return <div className="smoke" ref={smokeRef} />;
}
