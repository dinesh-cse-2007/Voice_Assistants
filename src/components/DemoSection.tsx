import { Mic } from "lucide-react";
import VoiceDemo from "./VoiceDemo";

export default function DemoSection() {
  return (
    <section className="section" id="demo">
      <div className="container">
        <div className="section-head">
          <span className="section-label">
            <span className="label-dot" /> Live demo
          </span>
          <h2 className="section-title">Talk to Voxa right now</h2>
          <p className="section-subtitle">
            Tap the button and speak — or try one of the suggestions. This is a real
            voice demo running entirely in your browser using the Web Speech API.
          </p>
        </div>
        <VoiceDemo />
        <p className="demo-note">
          <Mic size={14} /> Tip: Allow microphone access when prompted. Best experienced in Chrome or Edge.
        </p>
      </div>
      <style>{`
        .demo-note {
          text-align: center; font-size: 13px; color: var(--text-light);
          margin-top: var(--space-3); display: flex; align-items: center; justify-content: center; gap: 6px;
        }
      `}</style>
    </section>
  );
}
