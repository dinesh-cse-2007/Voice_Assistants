import { Globe, Zap, Shield, Headphones, Languages, Clock } from "lucide-react";

const FEATURES = [
  {
    icon: Globe,
    title: "120+ languages",
    desc: "Speak naturally in your native tongue. Voxa understands and responds in over 120 languages and dialects.",
  },
  {
    icon: Zap,
    title: "Instant responses",
    desc: "Our edge-optimized inference engine delivers sub-second responses with no awkward pauses.",
  },
  {
    icon: Shield,
    title: "Private by design",
    desc: "Your conversations are encrypted end-to-end and processed locally wherever possible. Nothing is sold, ever.",
  },
  {
    icon: Headphones,
    title: "Natural voices",
    desc: "Choose from 40+ studio-grade voices that sound human, warm, and alive — not robotic.",
  },
  {
    icon: Languages,
    title: "Live translation",
    desc: "Speak in one language, Voxa responds in another. Real-time translation for seamless cross-language conversations.",
  },
  {
    icon: Clock,
    title: "Always available",
    desc: "24/7 uptime with offline mode for essential commands. Voxa is ready whenever you speak.",
  },
];

export default function Features() {
  return (
    <section className="section" id="features">
      <div className="container">
        <div className="section-head">
          <span className="section-label">
            <span className="label-dot" /> Why Voxa
          </span>
          <h2 className="section-title">Built for the way you actually speak</h2>
          <p className="section-subtitle">
            Not rigid commands — real conversation. Voxa picks up on context, remembers
            preferences, and adapts to your voice over time.
          </p>
        </div>

        <div className="features-grid">
          {FEATURES.map((f, i) => (
            <div key={f.title} className="feature-card" style={{ animationDelay: `${i * 80}ms` }}>
              <div className="feature-icon-wrap">
                <f.icon size={24} />
              </div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .features-grid {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-3);
        }
        .feature-card {
          padding: var(--space-4); border-radius: var(--r-lg);
          background: #fff; border: 1px solid var(--border);
          transition: all 0.35s var(--ease);
          animation: fadeUp 0.5s var(--ease) backwards;
        }
        .feature-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg); border-color: var(--primary-200);
        }
        .feature-icon-wrap {
          width: 48px; height: 48px; border-radius: var(--r-md);
          display: flex; align-items: center; justify-content: center;
          background: var(--primary-50); color: var(--primary-600);
          margin-bottom: var(--space-2); transition: all 0.3s var(--ease);
        }
        .feature-card:hover .feature-icon-wrap {
          background: var(--primary-600); color: #fff; transform: scale(1.08);
        }
        .feature-title { font-size: 19px; margin-bottom: 10px; }
        .feature-desc { font-size: 14px; color: var(--text-muted); line-height: 1.6; }
        @media (max-width: 900px) { .features-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 600px) { .features-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}
