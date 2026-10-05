import { Play, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-grid" />
      <div className="container hero-inner">
        <div className="hero-copy">
          <span className="hero-badge">
            <span className="hero-badge-dot" />
            Powered by advanced neural speech
          </span>
          <h1 className="hero-title">
            Your world,<br />
            <span className="text-gradient">spoken into being</span>
          </h1>
          <p className="hero-desc">
            Voxa is a next-generation voice assistant platform that understands
            natural conversation. Ask, command, and create — no buttons, no
            typing, just your voice.
          </p>
          <div className="hero-actions">
            <a href="#demo" className="btn btn-primary btn-lg">
              <Play size={18} fill="currentColor" /> Try the live demo
            </a>
            <a href="#assistants" className="btn btn-ghost btn-lg">
              Explore assistants <ArrowRight size={18} />
            </a>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <strong>120+</strong>
              <span>languages</span>
            </div>
            <div className="hero-stat">
              <strong>0.3s</strong>
              <span>response time</span>
            </div>
            <div className="hero-stat">
              <strong>99.2%</strong>
              <span>accuracy</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-orb-stack">
            <div className="hero-orb-bg" />
            <div className="hero-orb-main">
              <div className="hero-orb-ring" />
              <div className="hero-orb-core">
                <span className="hero-orb-wave">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} style={{ animationDelay: `${i * 0.15}s` }} />
                  ))}
                </span>
              </div>
            </div>
            <div className="hero-chip hero-chip--1">
              <span>“Set a reminder”</span>
            </div>
            <div className="hero-chip hero-chip--2">
              <span>“Turn off the lights”</span>
            </div>
            <div className="hero-chip hero-chip--3">
              <span>“Play my focus mix”</span>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .hero {
          position: relative; padding: 140px 0 var(--space-8);
          overflow: hidden; background: var(--neutral-50);
        }
        .hero-bg {
          position: absolute; inset: 0;
          background: radial-gradient(ellipse at 70% 20%, rgba(8,124,232,0.08) 0%, transparent 50%),
                      radial-gradient(ellipse at 20% 80%, rgba(4,201,154,0.06) 0%, transparent 50%);
        }
        .hero-grid {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(var(--neutral-200) 1px, transparent 1px),
            linear-gradient(90deg, var(--neutral-200) 1px, transparent 1px);
          background-size: 48px 48px;
          mask-image: radial-gradient(ellipse at center, black 30%, transparent 70%);
          -webkit-mask-image: radial-gradient(ellipse at center, black 30%, transparent 70%);
          opacity: 0.4;
        }
        .hero-inner {
          position: relative; display: grid;
          grid-template-columns: 1fr 1fr; gap: var(--space-6);
          align-items: center;
        }
        .hero-badge {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 7px 14px; border-radius: var(--r-full);
          background: #fff; border: 1px solid var(--border);
          font-size: 13px; font-weight: 500; color: var(--neutral-600);
          box-shadow: var(--shadow-sm); margin-bottom: var(--space-3);
        }
        .hero-badge-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: var(--accent-500);
          box-shadow: 0 0 0 4px rgba(4,201,154,0.15);
        }
        .hero-title {
          font-size: clamp(36px, 5.5vw, 64px);
          line-height: 1.05; margin-bottom: var(--space-3); font-weight: 700;
        }
        .hero-desc {
          font-size: 18px; line-height: 1.6; color: var(--text-muted);
          max-width: 480px; margin-bottom: var(--space-4);
        }
        .hero-actions { display: flex; gap: var(--space-2); flex-wrap: wrap; margin-bottom: var(--space-5); }
        .btn-lg { padding: 14px 28px; font-size: 16px; }
        .hero-stats { display: flex; gap: var(--space-4); }
        .hero-stat strong {
          display: block; font-family: var(--font-display);
          font-size: 32px; font-weight: 700; color: var(--neutral-900);
        }
        .hero-stat span { font-size: 13px; color: var(--text-muted); }
        .hero-visual { display: flex; align-items: center; justify-content: center; position: relative; }
        .hero-orb-stack { position: relative; width: 380px; height: 380px; display: flex; align-items: center; justify-content: center; }
        .hero-orb-bg {
          position: absolute; width: 320px; height: 320px; border-radius: 50%;
          background: radial-gradient(circle, rgba(8,124,232,0.12) 0%, transparent 60%);
        }
        .hero-orb-main { position: relative; width: 200px; height: 200px; display: flex; align-items: center; justify-content: center; }
        .hero-orb-ring {
          position: absolute; width: 100%; height: 100%; border-radius: 50%;
          border: 2px solid var(--primary-300); opacity: 0.4;
          animation: rotate-slow 20s linear infinite;
        }
        .hero-orb-core {
          width: 140px; height: 140px; border-radius: 50%;
          background: linear-gradient(135deg, var(--primary-600) 0%, var(--primary-800) 60%, var(--neutral-900) 100%);
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 20px 60px rgba(8,124,232,0.35), inset 0 2px 20px rgba(255,255,255,0.15);
          animation: float 6s ease-in-out infinite;
        }
        .hero-orb-wave { display: flex; align-items: center; gap: 5px; height: 40px; }
        .hero-orb-wave span {
          width: 4px; height: 100%; background: #fff; border-radius: 4px;
          animation: wave 0.8s ease-in-out infinite alternate;
        }
        .hero-chip {
          position: absolute; padding: 10px 16px; border-radius: var(--r-full);
          background: #fff; border: 1px solid var(--border);
          font-size: 14px; font-weight: 500; color: var(--neutral-700);
          box-shadow: var(--shadow-md); white-space: nowrap;
          animation: float 5s ease-in-out infinite;
        }
        .hero-chip--1 { top: 30px; right: 0; animation-delay: 0s; }
        .hero-chip--2 { bottom: 60px; left: -10px; animation-delay: 1.5s; }
        .hero-chip--3 { bottom: 0; right: 30px; animation-delay: 3s; }
        @media (max-width: 900px) {
          .hero-inner { grid-template-columns: 1fr; text-align: center; }
          .hero-desc { margin-left: auto; margin-right: auto; }
          .hero-actions { justify-content: center; }
          .hero-stats { justify-content: center; }
          .hero-visual { order: -1; }
          .hero-orb-stack { width: 280px; height: 280px; }
          .hero-chip { font-size: 12px; padding: 8px 12px; }
        }
      `}</style>
    </section>
  );
}
