import React, { useEffect } from "react";

export default function Header() {

    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector("header");
            if (window.scrollY > 20) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (!el) return;
        el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <header>
            <nav className="nav" aria-label="Primary">
                <button onClick={() => scrollTo("hero-section")} className="brand">KOO</button>

                <div className="nav-center">
                    <button onClick={() => scrollTo("profile-section")} className="center">ABOUT</button>
                    <button onClick={() => scrollTo("skills-section")} className="center">SKILLS</button>
                    <button onClick={() => scrollTo("work-section")} className="center">PROJECT</button>
                </div>

                <button onClick={() => scrollTo("hero-section")} className="right">2025</button>
            </nav>
        </header>
    );
}
