import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header.jsx";

export default function Home({ duration = 2600 }) {
    const [loaded, setLoaded] = useState(false);
    const [percent, setPercent] = useState(0);
    const rippleRef = useRef(null);

    // 링 경로 길이 세팅
    useEffect(() => {
        const svg = rippleRef.current;
        if (!svg) return;
        const rings = svg.querySelectorAll(".ring");
        rings.forEach((el) => {
            const r = parseFloat(el.getAttribute("r") || "0");
            const len = 2 * Math.PI * r;
            el.style.strokeDasharray = `${len}`;
            el.style.strokeDashoffset = `${len}`;
        });
    }, []);

    // % 카운트
    useEffect(() => {
        let raf = 0;
        const start = performance.now();
        const step = (now) => {
            const t = Math.min(1, (now - start) / duration);
            setPercent(Math.floor(t * 100));
            if (t < 1) raf = requestAnimationFrame(step);
            else setLoaded(true);
        };
        raf = requestAnimationFrame(step);
        return () => cancelAnimationFrame(raf);
    }, [duration]);

    return (
        <div className="wrap">
            {/* Splash (홈에서만) */}
            <div className={`loader ${loaded ? "is-hidden" : ""}`} aria-label="로딩 중">
                <div className="loaderInner">
                    <div className="percent" aria-live="polite">{percent}%</div>
                    <div className="rippleWrap" aria-hidden>
                        <svg ref={rippleRef} className="ripple" viewBox="0 0 400 400">
                            <g className="rings">
                                <circle className="ring r1" cx="200" cy="200" r="40" />
                                <circle className="ring r2" cx="200" cy="200" r="70" />
                                <circle className="ring r3" cx="200" cy="200" r="100" />
                                <circle className="ring r4" cx="200" cy="200" r="130" />
                                <circle className="ring r5" cx="200" cy="200" r="160" />
                                <circle className="ring r6" cx="200" cy="200" r="190" />
                            </g>
                        </svg>
                    </div>
                </div>
            </div>

            {/* 메인 */}
            <main className={`site ${loaded ? "is-visible" : ""}`}>
                <Header />
                <section className="hero" aria-label="메인 히어로">
                    <h1>ANHA STUDIO<br />Season 2025 Collection</h1>
                    <h2>Every line of <span>Code</span> carries intention</h2>
                    <h2>Crafting Experience Through <span>Code</span></h2>
                </section>
            </main>

            <div className="scroll-indicator" aria-hidden="true">
                <div className="line"></div>
                <div className="dot"></div>
            </div>
            <section>
                <br>
                </br>
                <br>
                </br>
                <br>
                </br>
                <br>
                </br>
                <br>
                </br>
            </section>
        </div>
    );
}
