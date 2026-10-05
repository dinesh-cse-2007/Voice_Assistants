import { Sparkles } from "lucide-react";

const USE_CASES = [
  { emoji: "🏠", title: "Smart Home", desc: "Dim the lights, set the thermostat, and start your evening routine with a single phrase." },
  { emoji: "📝", title: "Productivity", desc: "Draft emails, schedule meetings, and capture action items without touching a keyboard." },
  { emoji: "🩺", title: "Healthcare", desc: "Voice-guided medication tracking, symptom check-ins, and hands-free health logging." },
  { emoji: "🚗", title: "In the Car", desc: "Navigate, reply to messages, and control music keeping your eyes on the road and hands on the wheel." },
  { emoji: "🎓", title: "Learning", desc: "Ask questions, get explanations, practice languages, and quiz yourself in natural dialogue." },
  { emoji: "🛒", title: "Shopping", desc: "Reorder essentials, track packages, and compare products with conversational commerce." },
];

export default function UseCases() {
  return (
    <section className="section section--dark" id="usecases">
      <div className="usecases-glow" />
      <div className="container">
        <div className="section-head">
          <span className="section-label" style={{ color: var_branded }}>
            <span className="label-dot" style={{ background: var_accent }} /> Use cases
          </span>
          <h2 className="section-title" style={{ color: "#fff" }}>
            From morning routine to midnight brainstorm
          </h2>
          <p className="section-subtitle" style={{ color: "var(--neutral-400)" }}>
            See how Voxa fits into everyday moments across every part of your life.
          </p>
        </div>

        <div className="usecases-grid">
          {USE_CASES.map((uc) => (
            <div key={uc.title} className="usecase-card">
              <span className="usecase-emoji">{uc.emoji}</span>
              <h3 className="usecase-title">{uc.title}</h3>
              <p className="usecase-desc">{uc.desc}</p>
            </div>
          ))}
        </div>

        <div className="usecases-cta">
          <div className="cta-card">
            <div className="cta-content">
              <Sparkles size={20} />
              <div>
                <h3>Ready to talk to your world?</h3>
                <p>Start a free conversation with Voxa — no account needed for the demo.</p>
              </div>
            </div>
            <a href="#demo" className="btn btn-primary btn-lg">Try the live demo</a>
          </div>
        </div>
      </div>
      <style>{`
        .usecases-glow {
          position: absolute; top: 0; left: 50%; transform: translateX(-50%);
          width: 600px; height: 400px; border-radius: 50%;
          background: radial-gradient(circle, rgba(8,124,232,0.15) 0%, transparent 60%);
          filter: blur(60px); pointer-events: none;
        }
        .usecases-grid {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-3);
          margin-bottom: var(--space-6); position: relative;
        }
        .usecase-card {
          padding: var(--space-4); border-radius: var(--r-lg);
          background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);
          transition: all 0.35s var(--ease); backdrop-filter: blur(10px);
        }
        .usecase-card:hover {
          background: rgba(255,255,255,0.07); border-color: rgba(8,124,232,0.3);
          transform: translateY(-4px);
        }
        .usecase-emoji { font-size: 32px; display: block; margin-bottom: var(--space-2); }
        .usecase-title { font-size: 19px; color: #fff; margin-bottom: 10px; }
        .usecase-desc { font-size: 14px; color: var(--neutral-400); line-height: 1.6; }
        .usecases-cta { position: relative; }
        .cta-card {
          display: flex; align-items: center; justify-content: space-between; gap: var(--space-3);
          padding: var(--space-4) var(--space-5); border-radius: var(--r-xl);
          background: linear-gradient(135deg, rgba(8,124,232,0.12), rgba(4,201,154,0.08));
          border: 1px solid rgba(8,124,232,0.25); flex-wrap: wrap;
        }
        .cta-content { display: flex; align-items: center; gap: var(--space-2); color: var(--accent-400); }
        .cta-content h3 { font-size: 22px; color: #fff; margin-bottom: 4px; }
        .cta-content p { font-size: 15px; color: var(--neutral-300); }
        @media (max-width: 900px) { .usecases-grid { grid-template-columns: repeat(2, 1fr); } .cta-card { flex-direction: column; text-align: center; } }
        @media (max-width: 600px) { .usecases-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}

const var_branded = "#50bcff";
const var_accent = "#11e5b0";
