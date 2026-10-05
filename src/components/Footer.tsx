import { Mic, Twitter, Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand-col">
          <a href="#" className="nav-brand">
            <span className="nav-logo"><Mic size={20} /></span>
            <span>Voxa</span>
          </a>
          <p className="footer-tagline">
            Voice assistants for everything. Speak naturally, and let Voxa handle the rest.
          </p>
          <div className="footer-socials">
            <a href="#" aria-label="Twitter"><Twitter size={18} /></a>
            <a href="#" aria-label="GitHub"><Github size={18} /></a>
            <a href="#" aria-label="LinkedIn"><Linkedin size={18} /></a>
          </div>
        </div>

        <div className="footer-links">
            <div className="footer-col">
              <h4>Product</h4>
              <a href="#demo">Live Demo</a>
              <a href="#assistants">Assistants</a>
              <a href="#features">Features</a>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <a href="#">About</a>
              <a href="#">Careers</a>
              <a href="#">Blog</a>
            </div>
            <div className="footer-col">
              <h4>Resources</h4>
              <a href="#">Documentation</a>
              <a href="#">API Reference</a>
              <a href="#">Support</a>
            </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© 2026 Voxa. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Cookies</a>
        </div>
      </div>
      <style>{`
        .footer { background: var(--neutral-950); color: var(--neutral-400); padding: var(--space-7) 0 var(--space-3); }
        .footer-inner {
          display: grid; grid-template-columns: 1.5fr 2fr; gap: var(--space-5);
          padding-bottom: var(--space-5); border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        .footer .nav-brand { color: #fff; }
        .footer-tagline { font-size: 14px; line-height: 1.6; max-width: 320px; margin: var(--space-2) 0; }
        .footer-socials { display: flex; gap: 12px; }
        .footer-socials a {
          width: 36px; height: 36px; border-radius: var(--r-sm);
          display: flex; align-items: center; justify-content: center;
          background: rgba(255,255,255,0.06); color: var(--neutral-300);
          transition: all 0.25s var(--ease);
        }
        .footer-socials a:hover { background: var(--brand); color: #fff; transform: translateY(-2px); }
        .footer-links { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-3); }
        .footer-col h4 { font-size: 14px; color: #fff; margin-bottom: var(--space-2); font-family: var(--font-sans); font-weight: 600; }
        .footer-col a { display: block; font-size: 14px; padding: 6px 0; color: var(--neutral-400); transition: color 0.2s; }
        .footer-col a:hover { color: var(--accent-400); }
        .footer-bottom { display: flex; justify-content: space-between; align-items: center; padding-top: var(--space-3); font-size: 13px; flex-wrap: wrap; gap: 12px; }
        .footer-bottom-links { display: flex; gap: var(--space-2); }
        .footer-bottom-links a { color: var(--neutral-400); transition: color 0.2s; }
        .footer-bottom-links a:hover { color: #fff; }
        @media (max-width: 768px) {
          .footer-inner { grid-template-columns: 1fr; gap: var(--space-4); }
          .footer-links { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 480px) {
          .footer-links { grid-template-columns: 1fr 1fr; }
          .footer-bottom { flex-direction: column; text-align: center; }
        }
      `}</style>
    </footer>
  );
}
