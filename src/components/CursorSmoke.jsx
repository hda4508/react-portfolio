import React, { useEffect, useRef } from "react";
import "./cursor-smoke.css";

export default function CursorSmoke() {
  const smokeRef = useRef(null);

  useEffect(() => {
    const container = smokeRef.current;
    if (!container) return;

    const handleMove = (e) => {
      const circle = document.createElement("div");
      circle.className = "circle";

      const x = e.clientX;
      const y = e.clientY;

      circle.style.left = `${x - 5}px`;
      circle.style.top = `${y - 5}px`;

      container.appendChild(circle);

      setTimeout(() => {
        circle.remove();
      }, 1000);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return <div className="smoke" ref={smokeRef} />;
}
