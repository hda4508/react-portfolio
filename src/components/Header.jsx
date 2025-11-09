import { Link, useLocation } from "react-router-dom";

export default function Header() {
    const { pathname } = useLocation();
    const is = (p) => (pathname === p ? "active" : "");

    return (
        <header>
            <nav className="nav" aria-label="Primary">
                <Link to="/" className={`brand ${is("/")}`}>ANHA</Link>
                <Link to="/portfolio" className={`center ${is("/portfolio")}`}>PORTFOLIO</Link>
                <Link to="/about" className={`right ${is("/about")}`}>ABOUT</Link>
            </nav>
        </header>
    );
}
