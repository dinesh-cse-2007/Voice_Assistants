import { useEffect, useState } from "react";
import { Mic, Sparkles } from "lucide-react";

export default function VoiceOrb({ active }: { active: boolean }) {
  const [bars, setBars] = useState<number[]>(Array(14).fill(20));

  useEffect(() => {
    if (!active) {
      setBars(Array(14).fill(20));
      return;
    }
    const id = setInterval(() => {
      setBars((prev) => prev.map(() => 15 + Math.random() * 85));
    }, 120);
    return () => clearInterval(id);
  }, [active]);

  return (
    <div className="orb-wrap">
      {active && (
        <>
          <span className="orb-ring r1" />
          <span className="orb-ring r2" />
          <span className="orb-ring r3" />
        </>
      )}
      <div className={`orb ${active ? "orb--active" : ""}`}>
        <div className="orb-glow" />
        <div className="orb-inner">
          {active ? (
            <div className="orb-wave">
              {bars.map((h, i) => (
                <span key={i} style={{ height: `${h}%`, animationDelay: `${i * 60}ms` }} />
              ))}
            </div>
          ) : (
            <Mic size={56} strokeWidth={1.5} />
          )}
        </div>
        <Sparkles className="orb-spark" size={20} />
      </div>
      <style>{`
        .orb-wrap { position: relative; width: 240px; height: 240px; display: flex; align-items: center; justify-content: center; }
        .orb-ring {
          position: absolute; width: 100%; height: 100%; border-radius: 50%;
          border: 2px solid var(--primary-400); opacity: 0;
          animation: pulse-ring 2s var(--ease) infinite;
        }
        .orb-ring.r2 { animation-delay: 0.6s; border-color: var(--accent-400); }
        .orb-ring.r3 { animation-delay: 1.2s; border-color: var(--primary-300); }
        .orb {
          position: relative; width: 160px; height: 160px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          background: linear-gradient(135deg, var(--primary-600), var(--primary-800));
          box-shadow: 0 20px 60px rgba(8, 124, 232, 0.3), inset 0 2px 20px rgba(255,255,255,0.15);
          transition: all 0.4s var(--ease);
          animation: float 6s ease-in-out infinite;
        }
        .orb--active {
          background: linear-gradient(135deg, var(--accent-500), var(--primary-700));
          box-shadow: 0 20px 80px rgba(4, 201, 154, 0.4), inset 0 2px 20px rgba(255,255,255,0.2);
        }
        .orb-glow {
          position: absolute; inset: -20px; border-radius: 50%;
          background: radial-gradient(circle, rgba(8,124,232,0.3) 0%, transparent 70%);
          opacity: 0; transition: opacity 0.4s;
        }
        .orb--active .orb-glow { opacity: 1; background: radial-gradient(circle, rgba(4,201,154,0.4) 0%, transparent 70%); }
        .orb-inner {
          width: 120px; height: 120px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          background: rgba(255,255,255,0.08); color: rgba(255,255,255,0.9);
          backdrop-filter: blur(10px);
        }
        .orb-wave { display: flex; align-items: center; justify-content: center; gap: 4px; height: 60px; width: 90px; }
        .orb-wave span {
          flex: 1; background: #fff; border-radius: 4px; min-height: 4px;
          animation: wave 0.5s ease-in-out infinite alternate;
        }
        .orb-spark {
          position: absolute; top: 10px; right: 18px; color: var(--warm-300);
          filter: drop-shadow(0 0 8px rgba(255,190,90,0.6));
        }
      `}</style>
    </div>
  );
}
