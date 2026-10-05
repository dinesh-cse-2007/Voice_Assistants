import { useEffect, useState } from "react";
import { Mic, Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Demo", href: "#demo" },
    { label: "Assistants", href: "#assistants" },
    { label: "Features", href: "#features" },
    { label: "Use Cases", href: "#usecases" },
  ];

  return (
    <nav className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="container nav-inner">
        <a href="#" className="nav-brand">
          <span className="nav-logo"><Mic size={20} /></span>
          <span>Voxa</span>
        </a>
        <div className={`nav-links ${open ? "nav-links--open" : ""}`}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <a href="#demo" className="btn btn-primary nav-cta" onClick={() => setOpen(false)}>Try it free</a>
        </div>
        <button className="nav-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      <style>{`
        .nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          transition: all 0.3s var(--ease); padding: var(--space-2) 0;
        }
        .nav--scrolled {
          background: rgba(255,255,255,0.85); backdrop-filter: blur(20px);
          box-shadow: var(--shadow-sm); padding: 10px 0;
        }
        .nav-inner { display: flex; align-items: center; justify-content: space-between; }
        .nav-brand {
          display: flex; align-items: center; gap: 10px;
          font-family: var(--font-display); font-weight: 700; font-size: 22px;
          letter-spacing: -0.02em;
        }
        .nav-logo {
          width: 36px; height: 36px; border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          background: linear-gradient(135deg, var(--primary-600), var(--accent-500));
          color: #fff; box-shadow: 0 4px 12px rgba(8,124,232,0.3);
        }
        .nav-links { display: flex; align-items: center; gap: var(--space-3); }
        .nav-links a:not(.nav-cta) {
          font-size: 15px; font-weight: 500; color: var(--neutral-600);
          transition: color 0.2s;
        }
        .nav-links a:not(.nav-cta):hover { color: var(--brand); }
        .nav-cta { padding: 10px 20px; font-size: 14px; }
        .nav-toggle { display: none; color: var(--text); }
        @media (max-width: 768px) {
          .nav-toggle { display: block; }
          .nav-links {
            position: absolute; top: 100%; left: 0; right: 0;
            flex-direction: column; align-items: stretch; gap: 0;
            background: #fff; padding: var(--space-2); gap: 4px;
            box-shadow: var(--shadow-lg); border-radius: 0 0 var(--r-md) var(--r-md);
            transform: translateY(-10px); opacity: 0; pointer-events: none;
            transition: all 0.3s var(--ease);
          }
          .nav-links--open { transform: translateY(0); opacity: 1; pointer-events: auto; }
          .nav-links a:not(.nav-cta) { padding: 12px 16px; border-radius: var(--r-sm); }
          .nav-links a:not(.nav-cta):hover { background: var(--primary-50); }
          .nav-cta { margin-top: 8px; text-align: center; }
        }
      `}</style>
    </nav>
  );
}
