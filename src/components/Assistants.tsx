import { Brain, Home, Briefcase, Heart, ArrowRight } from "lucide-react";

const ASSISTANTS = [
  {
    icon: Brain,
    name: "Voxa Mind",
    tagline: "Your thinking partner",
    desc: "Ask questions, brainstorm ideas, summarize documents, and get things done with natural conversation.",
    features: ["Research & Q&A", "Document summaries", "Idea generation", "Code help"],
    color: "var(--primary-600)",
    gradient: "linear-gradient(135deg, var(--primary-500), var(--primary-800))",
    badge: "Most popular",
  },
  {
    icon: Home,
    name: "Voxa Home",
    tagline: "Control your space",
    desc: "Connect your smart devices and control lights, temperature, music, and routines with simple voice commands.",
    features: ["Smart lights & plugs", "Thermostat control", "Music & media", "Scene automation"],
    color: "var(--accent-600)",
    gradient: "linear-gradient(135deg, var(--accent-500), var(--accent-800))",
    badge: null,
  },
  {
    icon: Briefcase,
    name: "Voxa Work",
    tagline: "Your productivity co-pilot",
    desc: "Schedule meetings, draft emails, take notes, and manage your calendar — all hands-free while you focus.",
    features: ["Calendar management", "Email drafting", "Meeting notes", "Task tracking"],
    color: "var(--warm-600)",
    gradient: "linear-gradient(135deg, var(--warm-400), var(--warm-700))",
    badge: "New",
  },
  {
    icon: Heart,
    name: "Voxa Care",
    tagline: "Wellness companion",
    desc: "Guided meditation, medication reminders, daily check-ins, and a friendly voice whenever you need one.",
    features: ["Meditation guides", "Medication reminders", "Mood check-ins", "Sleep stories"],
    color: "#e85d8a",
    gradient: "linear-gradient(135deg, #f06b94, #c43d6b)",
    badge: null,
  },
];

export default function Assistants() {
  return (
    <section className="section section--alt" id="assistants">
      <div className="container">
        <div className="section-head">
          <span className="section-label">
            <span className="label-dot" /> Meet the family
          </span>
          <h2 className="section-title">One platform, four specialized assistants</h2>
          <p className="section-subtitle">
            Each Voxa assistant is tuned for a different part of your life. Switch between them
            with a single voice command, or use them all together.
          </p>
        </div>

        <div className="assistant-grid">
          {ASSISTANTS.map((a) => (
            <article key={a.name} className="assistant-card">
              {a.badge && <span className="assistant-badge" style={{ color: a.color }}>{a.badge}</span>}
              <div className="assistant-icon" style={{ background: a.gradient }}>
                <a.icon size={28} />
              </div>
              <h3 className="assistant-name">{a.name}</h3>
              <p className="assistant-tagline" style={{ color: a.color }}>{a.tagline}</p>
              <p className="assistant-desc">{a.desc}</p>
              <ul className="assistant-features">
                {a.features.map((f) => (
                  <li key={f}>
                    <span className="feature-check" style={{ borderColor: a.color, color: a.color }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#demo" className="assistant-link" style={{ color: a.color }}>
                Try {a.name.split(" ")[1]} <ArrowRight size={16} />
              </a>
            </article>
          ))}
        </div>
      </div>
      <style>{`
        .section-head { text-align: center; margin-bottom: var(--space-7); display: flex; flex-direction: column; align-items: center; }
        .label-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--brand); display: inline-block; }
        .assistant-grid {
          display: grid; grid-template-columns: repeat(4, 1fr); gap: var(--space-3);
        }
        .assistant-card {
          position: relative; background: #fff; border: 1px solid var(--border);
          border-radius: var(--r-lg); padding: var(--space-4);
          transition: all 0.35s var(--ease); display: flex; flex-direction: column;
        }
        .assistant-card:hover {
          transform: translateY(-6px); box-shadow: var(--shadow-xl);
          border-color: transparent;
        }
        .assistant-badge {
          position: absolute; top: 16px; right: 16px;
          font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em;
          padding: 4px 10px; border-radius: var(--r-full);
          background: var(--neutral-100);
        }
        .assistant-icon {
          width: 56px; height: 56px; border-radius: var(--r-md);
          display: flex; align-items: center; justify-content: center;
          color: #fff; margin-bottom: var(--space-2);
          box-shadow: 0 8px 20px rgba(0,0,0,0.12);
        }
        .assistant-name { font-size: 22px; margin-bottom: 4px; }
        .assistant-tagline { font-size: 14px; font-weight: 600; margin-bottom: var(--space-2); }
        .assistant-desc { font-size: 14px; color: var(--text-muted); line-height: 1.6; margin-bottom: var(--space-3); }
        .assistant-features { display: flex; flex-direction: column; gap: 10px; margin-bottom: var(--space-3); flex: 1; }
        .assistant-features li { display: flex; align-items: center; gap: 10px; font-size: 14px; color: var(--neutral-700); }
        .feature-check {
          width: 20px; height: 20px; border-radius: 50%; border: 1.5px solid;
          display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 700;
        }
        .assistant-link {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 14px; font-weight: 600; transition: gap 0.25s var(--ease);
        }
        .assistant-link:hover { gap: 12px; }
        @media (max-width: 1024px) {
          .assistant-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .assistant-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
